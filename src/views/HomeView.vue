<template>
  <div class="max-w-screen-lg mx-auto mb-16 px-4">
    <NavigationBar />
    <IntroSection />
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
  </div>
</template>

<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import IntroSection from "../components/IntroSection.vue";
import CardContainer from "../components/CardContainer.vue";
import Card from "../components/Card.vue";
import SearchBar from "../components/SearchBar.vue";
import { ref, computed } from "vue";

const shapes = ref([
  {
    id: 1,
    label: "Cone",
    image: "/calculate-shapes-volume/assets/cone.png",
  },
  {
    id: 2,
    label: "Cube",
    image: "/calculate-shapes-volume/assets/cube.png",
  },
  {
    id: 3,
    label: "Cuboid",
    image: "/calculate-shapes-volume/assets/cuboid.png",
  },
  {
    id: 4,
    label: "Cylinder",
    image: "/calculate-shapes-volume/assets/cylinder.png",
  },
  {
    id: 5,
    label: "Hexagonal Prism",
    image: "/calculate-shapes-volume/assets/hexagonal-prism.png",
  },
  {
    id: 6,
    label: "Sphere",
    image: "/calculate-shapes-volume/assets/sphere.png",
  },
  {
    id: 7,
    label: "Rectangular Pyramid",
    image: "/calculate-shapes-volume/assets/rectangular-pyramid.png",
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
