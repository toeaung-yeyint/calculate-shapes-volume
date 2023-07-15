<template>
	<div class="max-w-screen-lg my-28 mx-auto px-6">
		<h1 class="uppercase text-center mb-12 text-3xl font-bold">
			calculate-volume-shapes
		</h1>
		<p class="mb-5">
			<strong>Built using: </strong>Vue (Composition API), Vue Router, HTML,
			Tailwind, JavaScript, Vite
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue
			ipsum eleifend tempus eleifend. Nunc eu ante scelerisque, tincidunt leo
			in, ullamcorper nisl. Nulla at consequat urna. Orci varius natoque
			penatibus et magnis dis parturient montes, nascetur ridiculus mus.
			Curabitur venenatis tellus diam. Etiam lobortis et metus et interdum. Sed
			tincidunt risus id lacus mollis, sed scelerisque metus imperdiet. Proin
			est ex, lobortis vitae mauris quis, volutpat aliquam diam. Pellentesque
			porta ex ut scelerisque posuere. Vivamus a urna diam. Sed in lectus est.
			Vestibulum dignissim dignissim tellus vel consequat.
		</p>
		<SearchBar @inputProvided="savedSearchTeam" />
		<CardContainer>
			<Card
				v-for="(shape, index) in filteredShape"
				:key="index"
				:label="shape.label"
				:image="shape.image"
			/>
		</CardContainer>
	</div>
</template>

<script setup>
import CardContainer from "./components/CardContainer.vue";
import Card from "./components/Card.vue";
import SearchBar from "./components/SearchBar.vue";
import { ref, computed } from "vue";
import cone from "./assets/cone.jpg";
import cube from "./assets/cube.jpg";
import cuboid from "./assets/cuboid.jpg";
import cylinder from "./assets/cylinder.jpg";
import hexPrism from "./assets/hexagonal-prism.jpg";
import sphere from "./assets/sphere.jpg";
import squarePyramid from "./assets/square-based-pyramid.jpg";
import triPyramid from "./assets/triangle-based-pyramid.jpg";
import triPrism from "./assets/triangular-prism.jpg";

const shapes = ref([
	{
		label: "Cone",
		image: cone,
	},
	{
		label: "Cube",
		image: cube,
	},
	{
		label: "Cuboid",
		image: cuboid,
	},
	{
		label: "Cylinder",
		image: cylinder,
	},
	{
		label: "Hexagonal Prism",
		image: hexPrism,
	},
	{
		label: "Sphere",
		image: sphere,
	},
	{
		label: "Square-based Pyramid",
		image: squarePyramid,
	},
	{
		label: "Triangle-based Pyramid",
		image: triPyramid,
	},
	{
		label: "Triangular Prism",
		image: triPrism,
	},
]);

const searchShape = ref("");

const savedSearchTeam = (payload) => {
	searchShape.value = payload;
};

const filteredShape = computed(() => {
	return shapes.value.filter((shape) => {
		return shape.label.toLowerCase().includes(searchShape.value.toLowerCase());
	});
});
</script>

<style scoped></style>
