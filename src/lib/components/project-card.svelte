<script>
  import { ExternalLinkIcon } from "@lucide/svelte";
  let { project } = $props();
  let showErrorFallback = $state(false);

  function handleImageError() {
    showErrorFallback = true;
  }
</script>

<div
  class="rounded-lg border border-gray-700 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500 transition-all duration-300 overflow-hidden flex flex-col"
>
  <!-- Image/Fallback Container -->
  <div
    class="aspect-video bg-gray-900 flex items-center justify-center relative"
  >
    {#if project.screenshot && !showErrorFallback}
      <!-- If a screenshot URL exists and hasn't failed, show the image -->
      <img
        src={project.screenshot}
        alt="{project.title} screenshot"
        class="w-full h-full object-cover"
        onerror={handleImageError}
      />
    {:else}
      <!-- Otherwise, show the fallback UI -->
      <div
        class="absolute inset-0 bg-gradient-to-tr from-neutral-100 to-teal-100 flex items-center justify-center"
      >
        <h4 class="text-xl font-bold text-center px-4">
          {project.title}
        </h4>
      </div>
    {/if}
  </div>

  <!-- Card Content -->
  <div class="p-6 flex flex-col flex-grow">
    <h3 class="text-xl font-semibold">{project.title}</h3>
    <p class="mt-2 text-base/relaxed">{project.description}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      {#each project.technologies as tech}
        <span
          class="inline-blocktext-xs text-sm border font-medium px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      {/each}
    </div>
    {#if project.link}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 font-semibold hover:text-pink-800 transition-colors flex items-center gap-2"
      >
        <span>View Project</span>
        <ExternalLinkIcon size={16} />
      </a>
    {/if}
  </div>
</div>
