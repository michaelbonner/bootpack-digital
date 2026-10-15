import { getDb } from '#lib/server/db/index.js';
import { contactSubmissions } from '#lib/server/db/schema.js';
import { formatContactMessage, sendTelegramMessage } from '#lib/server/telegram.js';
import { verifyTurnstileToken } from '#lib/server/turnstile.js';
import type { RequestHandler } from './$types';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 5000;

type Payload = {
	firstName?: unknown;
	lastName?: unknown;
	email?: unknown;
	company?: unknown;
	phone?: unknown;
	message?: unknown;
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
			return Response.json({ error: 'Invalid payload' }, { status: 400 });
		}
		payload = parsed as Payload;
	} catch {
		return Response.json({ error: 'Invalid JSON' }, { status: 400 });
	}

	const firstName = asTrimmedString(payload.firstName, 200);
	const lastName = asTrimmedString(payload.lastName, 200);
	const email = asTrimmedString(payload.email, 320);
	const message = asTrimmedString(payload.message);
	const company = asTrimmedString(payload.company, 200);
	const phone = asTrimmedString(payload.phone, 50);
	const turnstileToken = asTrimmedString(payload.turnstileToken, 2048);

	if (!firstName || !lastName || !email || !message) {
		return Response.json({ error: 'Missing required fields' }, { status: 400 });
	}

	if (!EMAIL_RE.test(email)) {
		return Response.json({ error: 'Invalid email' }, { status: 400 });
	}

	if (!turnstileToken) {
		return Response.json({ error: 'Captcha token missing' }, { status: 400 });
	}

	const captchaOk = await verifyTurnstileToken(turnstileToken, getClientAddress());
	if (!captchaOk) {
		return Response.json({ error: 'Captcha verification failed' }, { status: 400 });
	}

	const submission = { firstName, lastName, email, company, phone, message };

	try {
		await getDb().insert(contactSubmissions).values(submission);
	} catch (err) {
		console.error('Failed to insert contact submission:', errorMessage(err));
		return Response.json({ error: 'Could not save submission' }, { status: 500 });
	}

	try {
		await sendTelegramMessage(formatContactMessage(submission));
	} catch (err) {
		console.error('Failed to send Telegram notification:', errorMessage(err));
	}

	return Response.json({ ok: true });
};
