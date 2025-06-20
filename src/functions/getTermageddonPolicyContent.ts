export const getTermageddonPolicyContent = async (
	policyKey: string,
	fetch: (url: string) => Promise<Response>
) => {
	try {
		const termageddonUrl = new URL(`https://policies.termageddon.com/api/policy/${policyKey}`);
		const res = await fetch(termageddonUrl.toString());

		return await res.text();
	} catch (error) {
		console.error(error);
		return `<div class="mt-8">Please visit <a href="https://policies.termageddon.com/api/policy/${policyKey}">https://policies.termageddon.com/api/policy/${policyKey}</a></div>`;
	}
};
