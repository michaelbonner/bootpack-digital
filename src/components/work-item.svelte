<script lang="ts">
  export let description: string;
  export let link: string;
  export let poster: string;
  export let title: string;
</script>

<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
  <a
    class="flex-shrink-0"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img alt={title} height="232" loading="lazy" src={poster} width="465" />
  </a>
  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
    <div class="flex-1">
      <a class="block" href={link} rel="noopener noreferrer" target="_blank">
        <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
          {title}
        </h3>
        <p class="mt-3 text-base leading-6 text-gray-500">
          {description}
        </p>
      </a>
    </div>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a
          class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Site
          <svg
            class="ml-1 text-white w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
