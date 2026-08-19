<script lang="ts">
  import clsx from "clsx";
  import type { Picture } from "vite-imagetools";

  interface Props {
    description: string;
    link: string;
    poster: Picture;
    title: string;
    lazy?: boolean;
    linkText?: string;
    caseStudyLink?: string;
    featured?: boolean;
  }

  let {
    description,
    link,
    poster,
    title,
    lazy = true,
    linkText = "View Site",
    caseStudyLink,
    featured = false,
  }: Props = $props();
</script>

<article
  class={clsx(
    "group border-t border-blue-200 pt-5",
    featured &&
      "w-full overflow-hidden border-0 bg-navy-800 pt-0 md:col-span-2 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] xl:col-span-3",
  )}
>
  <a
    class={clsx(
      "block overflow-hidden bg-blue-100",
      featured ? "min-h-72 lg:min-h-[30rem]" : "rounded-md",
    )}
    data-sveltekit-reload
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <enhanced:img
      alt={title}
      class={clsx(
        "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]",
        featured ? "min-h-72 lg:min-h-[30rem]" : "aspect-[16/10]",
      )}
      fetchpriority={featured ? "high" : "auto"}
      loading={featured ? "eager" : lazy ? "lazy" : "eager"}
      sizes={featured
        ? "(min-width: 1024px) min(700px, calc(57.5vw - 37px)), calc(100vw - 32px)"
        : "(min-width: 1440px) 432px, (min-width: 1280px) calc(33.333vw - 48px), (min-width: 1024px) calc(50vw - 48px), (min-width: 768px) calc(50vw - 40px), calc(100vw - 32px)"}
      src={poster}
    />
    <span class="sr-only"> (opens a new tab)</span>
  </a>

  <div
    class={clsx(
      "flex flex-col justify-between",
      featured ? "p-7 sm:p-10 lg:p-12" : "pt-6 pb-4",
    )}
  >
    <div>
      <p
        class={clsx(
          "text-xs font-bold uppercase tracking-[0.16em]",
          featured ? "text-orange-300" : "text-orange-700",
        )}
      >
        {featured ? "Featured project" : "Selected work"}
      </p>
      <a
        class="block"
        data-sveltekit-reload
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2
          class={clsx(
            "mt-3 font-bold tracking-tight hover:underline",
            featured
              ? "text-3xl leading-tight text-white sm:text-4xl"
              : "text-2xl leading-tight text-navy-800",
          )}
        >
          {title}
        </h2>
        <p
          class={clsx(
            "mt-4 text-base leading-7",
            featured ? "text-navy-100" : "text-gray-600",
          )}
        >
          {description}
        </p>
        <span class="sr-only"> (opens a new tab)</span>
      </a>
    </div>

    <div class="flex flex-wrap gap-x-6 gap-y-3 items-center mt-7">
      <div>
        <a
          class={clsx(
            "inline-flex gap-2 items-center font-semibold underline decoration-1 underline-offset-4 transition-colors",
            featured
              ? "text-white decoration-blue-300 hover:text-blue-200"
              : "text-blue-700 decoration-blue-300 hover:text-blue-500",
          )}
          data-sveltekit-reload
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            fill="none"
            height="1rem"
            role="presentation"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          {linkText}
          <span class="sr-only"> (opens a new tab)</span>
        </a>
      </div>
      {#if caseStudyLink}
        <div>
          <a
            class={clsx(
              "inline-flex gap-2 items-center font-semibold underline decoration-1 underline-offset-4 transition-colors",
              featured
                ? "text-white decoration-blue-300 hover:text-blue-200"
                : "text-blue-700 decoration-blue-300 hover:text-blue-500",
            )}
            href={caseStudyLink}
          >
            <svg
              fill="none"
              height="1rem"
              role="presentation"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            View Case Study
          </a>
        </div>
      {/if}
    </div>
  </div>
</article>
