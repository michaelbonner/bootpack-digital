// Redact emails and derived names in the live DOM before screenshots.
//
// Usage with agent-browser:
//   agent-browser eval "$(cat scripts/redact-pii.js)"
//   agent-browser screenshot out.jpg --full
//
// Replacements are deterministic per page load: the same real email always
// maps to the same fake email, so a single screenshot is internally
// consistent (rows, badges, and avatar tooltips all line up).
(() => {
	const localPool = [
		'amelia.parker',
		'noah.bennett',
		'olivia.chen',
		'liam.rivera',
		'ava.morgan',
		'lucas.santos',
		'mia.kim',
		'ethan.walsh',
		'isabella.duarte',
		'mason.foster',
		'sofia.nguyen',
		'james.holt',
		'aria.patel',
		'logan.brooks',
		'zoe.hayes',
		'henry.cole'
	];
	const domains = ['example.com', 'acme.test', 'lunchco.test'];
	const emailMap = new Map();
	const nameMap = new Map();
	let cursor = 0;

	const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);
	const nameFromLocal = (local) =>
		local
			.split(/[._\-+]/)
			.filter(Boolean)
			.map(titleCase)
			.join(' ');

	const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const emailRe = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

	function fakeEmailFor(realEmail) {
		if (emailMap.has(realEmail)) return emailMap.get(realEmail);
		const local = localPool[cursor % localPool.length];
		const dom = domains[cursor % domains.length];
		cursor++;
		const fake = `${local}@${dom}`;
		emailMap.set(realEmail, fake);
		const realName = nameFromLocal(realEmail.split('@')[0]);
		const fakeName = nameFromLocal(local);
		nameMap.set(realName, fakeName);
		const realParts = realName.split(' ');
		const fakeParts = fakeName.split(' ');
		if (realParts.length === fakeParts.length) {
			realParts.forEach((p, i) => {
				if (p.length > 2) nameMap.set(p, fakeParts[i]);
			});
		}
		return fake;
	}

	// First pass: collect every email so name-only mentions also get rewritten.
	const seen = new Set();
	document.querySelectorAll('*').forEach((el) => {
		const t = el.textContent || '';
		let m;
		const re = new RegExp(emailRe.source, 'g');
		while ((m = re.exec(t))) seen.add(m[0]);
	});
	seen.forEach(fakeEmailFor);

	function applyReplacements(text) {
		let out = text.replace(emailRe, (e) => fakeEmailFor(e));
		nameMap.forEach((fake, real) => {
			out = out.replace(new RegExp('\\b' + escape(real) + '\\b', 'g'), fake);
		});
		return out;
	}

	function walk(node) {
		if (node.nodeType === 3) {
			const next = applyReplacements(node.nodeValue);
			if (next !== node.nodeValue) node.nodeValue = next;
			return;
		}
		if (node.nodeType !== 1) return;
		const tag = node.tagName;
		if (tag === 'SCRIPT' || tag === 'STYLE') return;
		if ((tag === 'INPUT' || tag === 'TEXTAREA') && typeof node.value === 'string') {
			const next = applyReplacements(node.value);
			if (next !== node.value) node.value = next;
		}
		['title', 'alt', 'aria-label', 'placeholder', 'data-tooltip'].forEach((a) => {
			if (node.hasAttribute(a)) {
				const v = node.getAttribute(a);
				const next = applyReplacements(v);
				if (next !== v) node.setAttribute(a, next);
			}
		});
		node.childNodes.forEach(walk);
	}
	walk(document.body);

	return { emailsReplaced: emailMap.size, nameMappings: nameMap.size };
})();
