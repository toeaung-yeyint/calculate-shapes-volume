<template>
  <IntroSection>
    <RouterLink to="/">
      <button
        class="mt-20 w-full mb-12 py-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        Back to menu
      </button>
    </RouterLink>
    <div class="flex items-center gap-x-8 h-80">
      <div class="w-1/2 h-full">
        <img
          :src="shape.image"
          alt=""
          class="border-2 w-full h-full object-contain"
        />
      </div>
      <div class="w-1/2 flex flex-col max-w-xs mx-auto">
        <h1 class="font-bold text-xl text-center mb-4">
          Volume of a {{ shape.label }}
        </h1>
        <div
          v-for="(property, index) in shape.properties"
          :key="index"
          class="flex items-center mb-4"
        >
          <label :for="property" class="w-3/12">{{ property }}:</label>
          <input
            :id="property"
            type="number"
            class="border-2 flex-grow w-9/12"
          />
        </div>
        <div class="flex items-center mb-4">
          <label for="unit" class="w-3/12">Unit:</label>
          <select class="border-2" name="unit" id="unit">
            <option value="">-</option>
            <option value="in">in³</option>
            <option value="ft">ft³</option>
            <option value="cm">cm³</option>
            <option value="m">m³</option>
          </select>
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

import cone from "../assets/cone-details.jpg";
import cube from "../assets/cube-details.jpg";
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
    properties: ["Height(h)", "Radius(r)"],
  },
  {
    id: 2,
    label: "Cube",
    image: cube,
    properties: ["Edge(a)"],
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
