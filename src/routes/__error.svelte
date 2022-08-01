<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }: { error: any; status: number }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script lang="ts">
  export let title: string;
</script>

<div class="relative py-16 bg-white overflow-hidden text-lg leading-8">
  <div class="relative px-4 sm:px-6 lg:px-8 text-center grid gap-y-12">
    <h1
      class="text-3xl leading-9 tracking-tight font-extrabold text-navy-600 sm:text-4xl sm:leading-10"
    >
      Looks like you got lost along the way
    </h1>
    <p>
      {title}
    </p>
  </div>
</div>
