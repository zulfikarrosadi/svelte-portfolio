<script>
  let { title, children, id } = $props();
</script>

<section id={id} class="min-h-screen mb-4 md:mb-16">
  <h2 class="text-center mb-4 md:mb-8 text-3xl font-bold tracking-tight  sm:text-4xl">
    {title}
  </h2>
  <div class="relative flex justify-center w-10/12 items-center gap-12 mx-auto">
    {#if children}
      {@render children()}
    {/if}
  </div>
</section>
