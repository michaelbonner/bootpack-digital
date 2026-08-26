<script lang="ts">
  import { PUBLIC_TEST_CONTACT_FORM } from "$env/static/public";
  import clsx from "clsx";
  import Turnstile from "./turnstile.svelte";

  let submitted = $state(false);
  let isSubmitting = $state(false);
  let errors: Record<string, string> = {};
  let errorMessage = $state("");
  let touched: Record<string, boolean> = {};

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (PUBLIC_TEST_CONTACT_FORM === "true") {
      submitted = true;
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const turnstileToken = formData.get("cf-turnstile-response");

    if (!turnstileToken) {
      errorMessage = "Please complete the captcha before submitting";
      return;
    }

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      turnstileToken,
    };

    isSubmitting = true;
    errorMessage = "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        submitted = true;
      } else {
        const data = await response.json().catch(() => ({}));
        errorMessage =
          data?.error ??
          "Oops! There was a problem submitting your form. Please try again, or email us at hey@bootpackdigital.com.";
        if (typeof window !== "undefined" && window.turnstile) {
          window.turnstile.reset();
        }
      }
    } catch (error) {
      console.error(error);
      errorMessage =
        "Oops! There was a problem submitting your form. Please try again, or email us at hey@bootpackdigital.com.";
      if (typeof window !== "undefined" && window.turnstile) {
        window.turnstile.reset();
      }
    } finally {
      isSubmitting = false;
    }
  };
</script>

<form
  class={submitted ? `hidden` : `visible`}
  name="contact"
  onsubmit={handleSubmit}
>
  <div class="flex flex-wrap -mx-3 mt-8 mb-6">
    <div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="firstName"
      >
        First Name*
      </label>
      <input
        aria-required="true"
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="firstName"
        name="firstName"
        placeholder="Jane"
        required
        type="text"
      />
      <p class="px-2 pt-1 text-xs font-medium text-orange-700">
        {#if errors.firstName && touched.firstName}
          {errors.firstName}
        {/if}
      </p>
    </div>
    <div class="px-3 w-full md:w-1/2">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="lastName"
      >
        Last Name*
      </label>
      <input
        aria-required="true"
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="lastName"
        name="lastName"
        placeholder="Doe"
        required
        type="text"
      />
      <p class="px-2 pt-1 text-xs font-medium text-orange-700">
        {#if errors.lastName && touched.lastName}
          {errors.lastName}
        {/if}
      </p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="px-3 mb-0 w-full">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="email"
      >
        Email*
      </label>
      <input
        aria-required="true"
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="email"
        name="email"
        placeholder="jane@company.com"
        required
        type="email"
      />
      {#if errors.email && touched.email}
        {errors.email}
      {/if}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="px-3 mb-6 w-full md:mb-0 md:w-1/2">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="company"
      >
        Company
      </label>
      <input
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="company"
        name="company"
        placeholder="Company Name"
        type="text"
      />
      {#if errors.company && touched.company}
        {errors.company}
      {/if}
    </div>
    <div class="px-3 w-full md:w-1/2">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="phone"
      >
        Phone Number
      </label>
      <input
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="phone"
        name="phone"
        placeholder="801-111-2222"
        type="text"
      />
      {#if errors.phone && touched.phone}
        {errors.phone}
      {/if}
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="px-3 mb-6 w-full md:mb-0">
      <label
        class="block mb-2 text-xs font-bold tracking-[0.16em] text-navy-700 uppercase"
        for="message"
      >
        How Can We Help?*
      </label>
      <textarea
        aria-required="true"
        class="block py-3 px-4 w-full text-base text-navy-800 bg-white rounded-lg border border-blue-200 appearance-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
        id="message"
        name="message"
        placeholder="Please give us details about what you're trying to accomplish"
        required
        rows={10}
      ></textarea>
      <p class="px-2 pt-1 text-xs font-medium text-orange-700">
        {#if errors.message && touched.message}
          {errors.message}
        {/if}
      </p>
    </div>
  </div>
  <div class="flex justify-start mb-6 sm:justify-end">
    <Turnstile />
  </div>
  {#if errorMessage}
    <p class="pb-3 text-sm font-medium text-orange-700">
      {errorMessage}
    </p>
  {/if}
  <div class="flex justify-start sm:justify-end">
    <button
      class={clsx(
        "py-3 px-6 w-full text-base font-semibold text-white bg-orange-700 rounded-lg transition-colors",
        "sm:w-auto",
        "hover:bg-orange-600",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-600",
        "disabled:opacity-60 disabled:cursor-not-allowed",
      )}
      disabled={isSubmitting}
      type="submit"
    >
      {isSubmitting ? "Sending..." : "Send message"}
    </button>
  </div>
</form>
<div class={submitted ? `visible` : `hidden`}>
  <div class="p-7 mt-8 bg-blue-50 rounded-2xl border border-blue-200 sm:p-8">
    <p class="text-xs font-bold tracking-[0.16em] text-orange-700 uppercase">Message sent</p>
    <h3 class="mt-3 text-2xl font-bold tracking-tight text-navy-700">
      Thanks for reaching out!
    </h3>
    <p class="mt-3 text-base leading-7 text-gray-600">
      We'll get back to you within one business day.
    </p>
  </div>
</div>
