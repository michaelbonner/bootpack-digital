import { json } from '@sveltejs/kit';
import { getDb } from '$lib/server/db';
import { freeWebsiteApplications } from '$lib/server/db/schema';
import { formatFreeWebsiteApplication, sendTelegramMessage } from '$lib/server/telegram';
import { verifyTurnstileToken } from '$lib/server/turnstile';
import type { RequestHandler } from './$types';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;

type Payload = {
	firstName?: unknown;
	lastName?: unknown;
	email?: unknown;
	phone?: unknown;
	organizationName?: unknown;
	organizationType?: unknown;
	website?: unknown;
	city?: unknown;
	mission?: unknown;
	goals?: unknown;
	turnstileToken?: unknown;
};

function asTrimmedString(value: unknown, max = MAX_LEN): string | null {
	if (typeof value !== 'string') return null;
	const trimmed = value.trim();
	if (!trimmed || trimmed.length > max) return null;
	return trimmed;
}

function errorMessage(err: unknown): string {
	return err instanceof Error ? err.message : 'unknown error';
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	let payload: Payload;
	try {
		const parsed: unknown = await request.json();
		if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
			return json({ error: 'Invalid payload' }, { status: 400 });
		}
		payload = parsed as Payload;
	} catch {
		return json({ error: 'Invalid JSON' }, { status: 400 });
	}

	const firstName = asTrimmedString(payload.firstName, 200);
	const lastName = asTrimmedString(payload.lastName, 200);
	const email = asTrimmedString(payload.email, 320);
	const phone = asTrimmedString(payload.phone, 50);
	const organizationName = asTrimmedString(payload.organizationName, 200);
	const organizationType = asTrimmedString(payload.organizationType, 100);
	const website = asTrimmedString(payload.website, 500);
	const city = asTrimmedString(payload.city, 200);
	const mission = asTrimmedString(payload.mission);
	const goals = asTrimmedString(payload.goals);
	const turnstileToken = asTrimmedString(payload.turnstileToken, 2048);

	if (!firstName || !lastName || !email || !organizationName || !city || !mission || !goals) {
		return json({ error: 'Missing required fields' }, { status: 400 });
	}

	if (!EMAIL_RE.test(email)) {
		return json({ error: 'Invalid email' }, { status: 400 });
	}

	if (!turnstileToken) {
		return json({ error: 'Captcha token missing' }, { status: 400 });
	}

	const captchaOk = await verifyTurnstileToken(turnstileToken, getClientAddress());
	if (!captchaOk) {
		return json({ error: 'Captcha verification failed' }, { status: 400 });
	}

	const application = {
		firstName,
		lastName,
		email,
		phone,
		organizationName,
		organizationType,
		website,
		city,
		mission,
		goals
	};

	try {
		await getDb().insert(freeWebsiteApplications).values(application);
	} catch (err) {
		console.error('Failed to insert free website application:', errorMessage(err));
		return json({ error: 'Could not save application' }, { status: 500 });
	}

	try {
		await sendTelegramMessage(formatFreeWebsiteApplication(application));
	} catch (err) {
		console.error('Failed to send Telegram notification:', errorMessage(err));
	}

	return json({ ok: true });
};
