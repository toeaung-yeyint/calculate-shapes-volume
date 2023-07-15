<template>
	<div
		class="w-full cursor-pointer border-2 p-4 rounded-md hover:border-sky-500"
	>
		<img :src="image" alt="" class="w-full h-32 object-contain mb-4" />
		<h3 class="text-center font-bold text-lg">
			{{ label }}
		</h3>
	</div>
</template>

<script setup>
defineProps({
	image: {
		type: String,
	},
	label: {
		type: String,
	},
});
</script>
