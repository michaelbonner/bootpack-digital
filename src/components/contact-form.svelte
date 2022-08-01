<script lang="ts">
  let submitted = false;
  let isSubmitting = false;

  const handleSubmit = async (event: SubmitEvent) => {
    console.log("e.target", event.target);
    const formData = new FormData(event.target as HTMLFormElement);

    fetch("https://formspree.io/f/xgerlrdz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          submitted = true;
          // form.reset();
        } else {
          response.json().then((data) => {
            console.error(data);
            if (Object.hasOwn(data, "errors")) {
              errorMessage = data["errors"]
                .map((error: any) => error["message"])
                .join(", ");
            } else {
              errorMessage = "Oops! There was a problem submitting your form";
            }
          });
        }
      })
      .catch((error) => {
        console.error(error);
        errorMessage = "Oops! There was a problem submitting your form";
      });
  };

  let errors: any = {};
  let errorMessage = "";
  let touched: any = {};
</script>

<form
  class={submitted ? `hidden` : `visible`}
  name="contact"
  on:submit|preventDefault={handleSubmit}
>
  <div class="mt-8 flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="firstName"
      >
        First Name*
      </label>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="firstName"
        name="firstName"
        placeholder="Jane"
        required
        type="text"
      />
      <p class="text-red-500 text-xs italic px-2 pt-1">
        {#if errors.firstName && touched.firstName}
          {errors.firstName}
        {/if}
      </p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="lastName"
      >
        Last Name*
      </label>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="lastName"
        name="lastName"
        placeholder="Doe"
        required
        type="text"
      />
      <p class="text-red-500 text-xs italic px-2 pt-1">
        {#if errors.lastName && touched.lastName}
          {errors.lastName}
        {/if}
      </p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-0">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="email"
      >
        Email*
      </label>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="company"
      >
        Company
      </label>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="company"
        name="company"
        placeholder="Company Name"
        type="text"
      />
      {#if errors.company && touched.company}
        {errors.company}
      {/if}
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="phone"
      >
        Phone Number
      </label>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
    <div class="w-full px-3 mb-6 md:mb-0">
      <label
        class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="message"
      >
        How Can We Help?*
      </label>
      <textarea
        class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="message"
        name="message"
        placeholder="Please give us details about what you're trying to accomplish"
        required
        rows={10}
      />
      <p class="text-red-500 text-xs italic px-2 pt-1">
        {#if errors.message && touched.message}
          {errors.message}
        {/if}
      </p>
    </div>
  </div>
  {#if errorMessage}
    <p class="text-red-500 text-xs italic px-2 pt-1">
      {errorMessage}
    </p>
  {/if}
  <button
    class="w-full lg:w-auto px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
    disabled={isSubmitting}
    type="submit"
  >
    Submit
  </button>
</form>
<div class={submitted ? `visible` : `hidden`}>
  <h2>Thank you for contacting us! We'll be in touch soon</h2>
</div>
