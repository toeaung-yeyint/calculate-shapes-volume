<template>
  <form
    @submit.prevent
    @input="$emit('inputProvided', (payload = searchShape))"
    class="flex items-center border-2 mb-12 focus-within:border-sky-500"
  >
    <input
      class="px-2 md:px-4 py-2 flex-grow focus:outline-none dark:bg-gray-900"
      type="text"
      placeholder="Search for your 3D shape..."
      v-model="searchShape"
    />
    <i class="fa-solid fa-magnifying-glass text-gray-400 px-2 md:px-4"></i>
  </form>
</template>

<script setup>
import { ref } from "vue";
const searchShape = ref("");
</script>
