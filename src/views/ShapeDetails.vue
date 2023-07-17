<template>
	<IntroSection>
		<div class="mt-20 flex items-center gap-x-8">
			<div class="w-4/12">
				<RouterLink to="/">
					<button
						class="w-full bg-blue-500 mb-4 p-2 text-white rounded hover:bg-blue-600"
					>
						Back to menu
					</button>
				</RouterLink>
				<img :src="shape.image" alt="" class="border-2 w-full" />
			</div>
			<div class="w-8/12 self-start">
				<h1 class="font-bold text-xl my-4">{{ shape.label }}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius harum
					quia porro cumque culpa? Quae ipsa voluptate magni deserunt dolore
					quibusdam officia possimus similique natus illo, eligendi et deleniti
					dolores.
				</p>
			</div>
		</div>
	</IntroSection>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroSection from "../components/IntroSection.vue";

import cone from "../assets/cone.jpg";
import cube from "../assets/cube.jpg";
import cuboid from "../assets/cuboid.jpg";
import cylinder from "../assets/cylinder.jpg";
import hexPrism from "../assets/hexagonal-prism.jpg";
import sphere from "../assets/sphere.jpg";
import squarePyramid from "../assets/square-based-pyramid.jpg";
import triPyramid from "../assets/triangle-based-pyramid.jpg";
import triPrism from "../assets/triangular-prism.jpg";

const props = defineProps(["id"]);
const shape = ref("");
const shapes = ref([
	{
		id: 1,
		label: "Cone",
		image: cone,
	},
	{
		id: 2,
		label: "Cube",
		image: cube,
	},
	{
		id: 3,
		label: "Cuboid",
		image: cuboid,
	},
	{
		id: 4,
		label: "Cylinder",
		image: cylinder,
	},
	{
		id: 5,
		label: "Hexagonal Prism",
		image: hexPrism,
	},
	{
		id: 6,
		label: "Sphere",
		image: sphere,
	},
	{
		id: 7,
		label: "Square-based Pyramid",
		image: squarePyramid,
	},
	{
		id: 8,
		label: "Triangle-based Pyramid",
		image: triPyramid,
	},
	{
		id: 9,
		label: "Triangular Prism",
		image: triPrism,
	},
]);

onMounted(() => {
	shape.value = shapes.value.find(
		(shape) => shape.id === Number.parseInt(props.id)
	);
});
</script>

<style></style>
