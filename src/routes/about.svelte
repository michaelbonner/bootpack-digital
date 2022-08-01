<script lang="ts">
  import MichaelBonner from "../images/michael-bonner.jpg";
  import MichaelBonnerWebp from "../images/michael-bonner.jpg?w=300,500;700;900&webp&srcset";
  import MichaelBonnerAvif from "../images/michael-bonner.jpg?w=300,500;700;900&avif&srcset";
  let seoTitle = "About Us | Bootpack Digital";
  let seoDescription =
    "Bootpack Digital is a small group of passionate creators. We value quality deliverables and human interaction. People are who we are, who we build for, and who we work for.";
</script>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription} />
  <meta property="og:title" content={seoTitle} />
  <meta property="og:description" content={seoDescription} />
  <meta name="twitter:title" content={seoTitle} />
  <meta name="twitter:description" content={seoDescription} />
</svelte:head>

<div class="relative py-16 bg-white overflow-hidden text-lg leading-8">
  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-3xl mx-auto mb-6">
      <h1
        class="mb-6 text-3xl font-extrabold tracking-tight text-navy-600 sm:text-4xl sm:leading-10"
      >
        <span
          class="block text-base leading-6 text-orange-500 font-semibold tracking-wide uppercase"
        >
          Introducing
        </span>
        Bootpack Digital
      </h1>
    </div>

    <div class="max-w-3xl text-gray-500 mx-auto">
      <p class="text-gray-500 py-12">
        We are a small group of passionate creators trying to make a difference.
        We value quality deliverables and human interaction. People are who we
        are, who we build for, and who we work for.
      </p>
    </div>
    <div class="max-w-3xl text-gray-500 mx-auto mt-12">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10"
      >
        Who are we?
      </h2>
    </div>
    <div
      class="max-w-3xl mx-auto mt-8 shadow-lg border border-gray-100 rounded-lg"
    >
      <div
        class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8"
      >
        <picture>
          <source srcset={MichaelBonnerAvif} type="image/avif" />
          <source srcset={MichaelBonnerWebp} type="image/webp" />
          <img
            alt="Headshot of Michael Bonner"
            class="overflow-hidden shadow-lg rounded-t-lg lg:rounded-r-none lg:rounded-l-lg my-0 py-0"
            height="395"
            loading="lazy"
            src={MichaelBonner}
            width="266"
          />
        </picture>

        <div class="sm:col-span-2 flex flex-col justify-between pb-2 pt-4 pr-4">
          <div class="space-y-4 px-4 lg:px-0">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="text-xl">Michael Bonner</h3>
              <p class="text-orange-600 mt-2">Founder</p>
            </div>
            <div class="text-lg leading-7">
              <p class="text-gray-500 text-base">
                Michael started Bootpack Digital in 2019 as the next generation
                of a freelance business he started in 2006. Michael has been
                building websites since he was 16. What started out as a fun
                thing to do became a livelihood. Michael has worked at several
                different companies, including managing a development team for 5
                years.
              </p>
            </div>
          </div>
          <div class="flex gap-2 mt-4 ml-4 lg:ml-0">
            <a href="https://www.linkedin.com/in/michaelbonner/">
              <svg
                class="w-8 h-8 fill-current text-blue-600 hover:text-blue-800 transition-all ease-in-out"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path
                  d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                />
              </svg>
            </a>
            <a class="ml-2" href="https://www.instagram.com/michael__bonner/">
              <svg
                class="w-8 h-8 fill-current text-blue-600 hover:text-blue-800 transition-all ease-in-out"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path
                  d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"
                />
                <path
                  d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"
                />
              </svg>
            </a>
            <a class="ml-2" href="https://github.com/michaelbonner">
              <svg
                class="w-8 h-8 fill-current text-blue-600 hover:text-blue-800 transition-all ease-in-out"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Github</title>
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
                />
              </svg>
            </a>
            <a class="ml-2" href="https://michaelbonner.dev/">
              <svg
                class="w-8 h-8 fill-current text-blue-600 hover:text-blue-800 transition-all ease-in-out"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Personal Site</title>
                <path
                  d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="36"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-3xl text-gray-500 mx-auto mt-12 pt-12">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10"
      >
        Why the name "Bootpack"?
      </h2>
      <p class="mt-4">
        We're from Utah, so a lot of our lives revolve around outdoor sports.
        Sometimes when you're skiing you need to unclip and hike your way to
        find fresh snow. To get there you can follow a boot pack, which is where
        other hikers have hiked up a steep section. The boot pack helps make the
        journey easier. That's where we come in; our goal is to help you, and
        your business, get to the next level. We've spent years laying a solid
        boot pack, now we can help you get there.
      </p>
    </div>
  </div>
</div>

<div class="bg-gray-100">
  <div
    class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between"
  >
    <h2
      class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-10"
    >
      <span class="block">Ready to build something together?</span>
      <span class="block text-blue-600">
        Send us a message so we can chat.
      </span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <a
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out"
          href="/contact/"
        >
          Get in touch
        </a>
      </div>
    </div>
  </div>
</div>
