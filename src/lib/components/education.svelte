<script>
  let { item } = $props();
</script>

<section class="p-6 rounded-lg border border-gray-700">
  <div class="flex justify-between items-baseline">
    <h3 class="font-bold text-lg">{item.title}</h3>
    <p class="text-sm">{item.duration}</p>
  </div>
  <p class="text-md font-medium mt-1">{item.name}</p>
  <ul class="mt-4 list-disc list-inside space-y-2">
    {#each item.details as detail}
      <li>{detail}</li>
    {/each}
  </ul>
</section>

