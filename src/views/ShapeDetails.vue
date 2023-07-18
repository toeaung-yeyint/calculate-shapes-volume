<template>
  <IntroSection>
    <div class="mt-20 flex items-center gap-x-8">
      <div class="w-5/12">
        <RouterLink to="/">
          <button class="w-full mb-4 p-1 rounded bg-gray-200 hover:bg-gray-300">
            Back to menu
          </button>
        </RouterLink>
        <img :src="shape.image" alt="" class="border-2 w-full" />
      </div>
      <div class="w-7/12 flex flex-col max-w-xs mx-auto">
        <h1 class="font-bold text-xl text-center mb-4">
          Volume of a {{ shape.label }}
        </h1>
        <div
          v-for="(property, index) in shape.properties"
          :key="index"
          class="flex flex-col"
        >
          <label :for="property">{{ property }}:</label>
          <input
            :id="property"
            type="text"
            class="border-2 flex-grow mt-2 my-4"
          />
        </div>
        <button
          class="w-full bg-blue-500 mb-4 p-1 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
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
    properties: ["Radius", "Height"],
  },
  {
    id: 2,
    label: "Cube",
    image: cube,
    properties: ["Edge"],
  },
  {
    id: 3,
    label: "Cuboid",
    image: cuboid,
    properties: ["Length", "Width", "Height"],
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
