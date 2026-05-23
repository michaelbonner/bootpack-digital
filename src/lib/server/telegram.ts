import { env } from '$env/dynamic/private';

const TELEGRAM_API = 'https://api.telegram.org';

export async function sendTelegramMessage(text: string): Promise<void> {
	const token = env.TELEGRAM_BOT_TOKEN;
	const chatId = env.TELEGRAM_CHAT_ID;

	if (!token || !chatId) {
		console.warn('Telegram credentials missing; skipping notification');
		return;
	}

	const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text,
			parse_mode: 'HTML',
			disable_web_page_preview: true
		})
	});

	if (!res.ok) {
		const body = await res.text();
		throw new Error(`Telegram sendMessage failed: ${res.status} ${body}`);
	}
}

function escapeHtml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function formatContactMessage(submission: {
	firstName: string;
	lastName: string;
	email: string;
	company?: string | null;
	phone?: string | null;
	message: string;
}): string {
	const lines = [
		'<b>New contact form submission</b>',
		'',
		`<b>Name:</b> ${escapeHtml(submission.firstName)} ${escapeHtml(submission.lastName)}`,
		`<b>Email:</b> ${escapeHtml(submission.email)}`
	];

	if (submission.company) {
		lines.push(`<b>Company:</b> ${escapeHtml(submission.company)}`);
	}
	if (submission.phone) {
		lines.push(`<b>Phone:</b> ${escapeHtml(submission.phone)}`);
	}

	lines.push('', '<b>Message:</b>', escapeHtml(submission.message));

	return lines.join('\n');
}
