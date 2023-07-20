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

const shapes = ref([
  {
    id: 1,
    label: "Cone",
    image: "/calculate-shapes-volume/assets/cone.jpg",
  },
  {
    id: 2,
    label: "Cube",
    image: "/calculate-shapes-volume/assets/cube.jpg",
  },
  {
    id: 3,
    label: "Cuboid",
    image: "/calculate-shapes-volume/assets/cuboid.jpg",
  },
  {
    id: 4,
    label: "Cylinder",
    image: "/calculate-shapes-volume/assets/cylinder.jpg",
  },
  {
    id: 5,
    label: "Hexagonal Prism",
    image: "/calculate-shapes-volume/assets/hexagonal-prism.jpg",
  },
  {
    id: 6,
    label: "Sphere",
    image: "/calculate-shapes-volume/assets/sphere.jpg",
  },
  {
    id: 7,
    label: "Rectangular Pyramid",
    image: "/calculate-shapes-volume/assets/rectangular-pyramid.jpg",
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
