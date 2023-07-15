<template>
	<form
		@input="$emit('inputProvided', (payload = searchShape))"
		class="flex items-center border-2 mt-20 mb-12 focus-within:border-black"
	>
		<input
			class="px-4 py-2 flex-grow focus:outline-none"
			type="text"
			placeholder="Search for your 3D shape..."
			v-model="searchShape"
		/>
		<i class="fa-solid fa-magnifying-glass text-gray-400 px-4"></i>
	</form>
</template>

<script setup>
import { ref } from "vue";
const searchShape = ref("");
</script>
