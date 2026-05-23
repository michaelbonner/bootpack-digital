import { env } from '$env/dynamic/private';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const VERIFY_TIMEOUT_MS = 5000;

type SiteverifyResponse = {
	success: boolean;
	'error-codes'?: string[];
};

export async function verifyTurnstileToken(token: string, remoteIp?: string): Promise<boolean> {
	const secret = env.TURNSTILE_SECRET_KEY;
	if (!secret) {
		console.warn('TURNSTILE_SECRET_KEY missing; skipping captcha verification');
		return true;
	}

	const body = new URLSearchParams({ secret, response: token });
	if (remoteIp) body.set('remoteip', remoteIp);

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), VERIFY_TIMEOUT_MS);

	try {
		const res = await fetch(VERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body,
			signal: controller.signal
		});

		if (!res.ok) return false;

		const data = (await res.json()) as SiteverifyResponse;
		if (!data.success) {
			console.warn('Turnstile verification failed:', data['error-codes']);
		}
		return data.success;
	} catch (err) {
		console.error(
			'Turnstile verification error:',
			err instanceof Error ? err.message : 'unknown error'
		);
		return false;
	} finally {
		clearTimeout(timeout);
	}
}
