<template>
  <RouterLink
    :to="`/${props.id}`"
    class="w-full cursor-pointer border-2 p-4 rounded-md hover:border-sky-500"
  >
    <img :src="props.image" alt="" class="w-full h-32 object-contain mb-4" />
    <h3 class="text-center font-bold text-lg">
      {{ props.label }}
    </h3>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["id", "image", "label"]);
</script>
