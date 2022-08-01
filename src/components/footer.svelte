<script>
  import SocialIcons from "./social-icons.svelte";
</script>

<footer class="lg:flex justify-between items-center text-navy-100 py-8 lg:py-0">
  <nav class="w-full lg:flex justify-between items-end p-4 md:p-8 text-sm">
    <div class="block lg:flex items-center px-4 lg:px-0 text-lg">
      <p class="mr-12 text-sm mb-4 lg:mb-0">
        &copy; {new Date().getFullYear()} Bootpack Digital, LLC
      </p>
      <div class="grid grid-cols-2 lg:flex text-base">
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/">Home</a>
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/work/"
          >Work</a
        >
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/about/"
          >About</a
        >
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/open-source/"
          >Open Source</a
        >
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/contact/"
          >Contact</a
        >
        <a class="block font-semibold py-4 lg:py-2 lg:px-4" href="/policies/"
          >Policies</a
        >
      </div>
    </div>

    <div class="flex justify-start lg:justify-end mt-6 lg:mt-0">
      <SocialIcons />
    </div>
  </nav>
</footer>
