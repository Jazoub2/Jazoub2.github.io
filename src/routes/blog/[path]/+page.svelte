<!-- src/routes/devblog/[path]/+page.svelte -->
<script>
  /** @type {import('./$types').PageData} */
import '../../../app.pcss'
  export let data;
</script>

<article>
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-grey">{data.title}</h1>
  <p class="my-4 text-lg text-gray-500">Publicerad: {data.date}</p>
  <svelte:component this={data.content} />
</article>