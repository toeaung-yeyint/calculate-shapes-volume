<template>
	<IntroSection>
		<SearchBar @inputProvided="saveSearchShape" />
		<CardContainer>
			<Card
				v-for="(shape, index) in filteredShape"
				:key="index"
				:id="shape.id"
				:label="shape.label"
				:image="shape.image"
			/>
		</CardContainer>
	</IntroSection>
</template>

<script setup>
import IntroSection from "../components/IntroSection.vue";
import CardContainer from "../components/CardContainer.vue";
import Card from "../components/Card.vue";
import SearchBar from "../components/SearchBar.vue";
import { ref, computed } from "vue";

import cone from "../assets/cone.jpg";
import cube from "../assets/cube.jpg";
import cuboid from "../assets/cuboid.jpg";
import cylinder from "../assets/cylinder.jpg";
import hexPrism from "../assets/hexagonal-prism.jpg";
import sphere from "../assets/sphere.jpg";
import squarePyramid from "../assets/rectangular-pyramid.jpg";

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
		label: "Rectangular Pyramid",
		image: squarePyramid,
	},
]);

const searchShape = ref("");

const saveSearchShape = (payload) => {
	searchShape.value = payload;
};

const filteredShape = computed(() => {
	return shapes.value.filter((shape) => {
		return shape.label.toLowerCase().includes(searchShape.value.toLowerCase());
	});
});
</script>

<style></style>
