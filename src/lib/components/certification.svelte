<script>
  import { ExternalLinkIcon } from "@lucide/svelte";

  let { item } = $props();
</script>

<div class="p-6 rounded-lg border border-gray-700">
  <div class="flex justify-between items-baseline">
    <h3 class="font-bold text-lg">{item.title}</h3>
    <p class="text-sm">{item.durationStart} - {item.durationEnd}</p>
  </div>
  <div class="flex items-center gap-2">
    <p class="text-md font-medium mt-1">{item.publisher}</p>
    <a
      href={item.credential}
      class="flex items-center gap-2 text-sm"
      target="_blank"
      rel="noopener noreferrer"
      ><span>Credential</span> <ExternalLinkIcon size={16} />
    </a>
  </div>
  <ul class="mt-4 list-disc list-inside space-y-2">
    {#each item.skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>
