<template>
  <div class="max-w-screen-lg mx-auto mb-16 px-4">
    <NavigationBar />
    <IntroSection />
    <RouterLink to="/">
      <button
        class="w-full mb-12 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white"
      >
        Return to menu
      </button>
    </RouterLink>
    <div class="flex flex-col sm:flex-row items-center gap-x-8">
      <div class="w-full sm:w-1/2 relative">
        <img
          :src="shape.image"
          alt=""
          class="border-2 w-full h-80 object-contain"
        />
        <h1
          class="font-bold text-2xl text pl-3 pt-2 text-gray-600 absolute top-0 left-0"
        >
          {{ shape.label }}
        </h1>
      </div>
      <form
        @submit.prevent="calculateVolume"
        class="w-full sm:w-1/2 flex flex-col max-w-xs mx-auto self-start mt-4"
        ref="form"
      >
        <div
          v-for="(property, index) in shape.properties"
          :key="index"
          class="flex items-center mb-4"
        >
          <label :for="property" class="w-3/12">{{ property }}:</label>
          <input
            :id="property"
            type="number"
            step="any"
            class="border-2 flex-grow w-9/12 px-2 dark:bg-gray-900"
            ref="itemRefs"
            required
            placeholder="enter a number value"
          />
        </div>
        <div class="flex items-center mb-4">
          <label for="unit" class="w-5/12">Unit of measure:</label>
          <select
            class="border-2 dark:bg-gray-900"
            id="unit"
            v-model="unit"
            required
          >
            <option value="">-</option>
            <option value="in³">in</option>
            <option value="ft³">ft</option>
            <option value="cm³">cm</option>
            <option value="m³">m</option>
          </select>
        </div>
        <button
          class="w-full bg-blue-500 p-1 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        <p v-if="showResult" class="font-bold text-2xl mt-6">
          Volume: {{ volume }} {{ unit }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavigationBar from "../components/NavigationBar.vue";
import IntroSection from "../components/IntroSection.vue";

const props = defineProps(["id"]);
const shape = ref("");
const shapes = ref([
  {
    id: 1,
    label: "Cone",
    image: "/calculate-shapes-volume/assets/cone-details.png",
    properties: ["Height(h)", "Radius(r)"],
  },
  {
    id: 2,
    label: "Cube",
    image: "/calculate-shapes-volume/assets/cube-details.png",
    properties: ["Edge(a)"],
  },
  {
    id: 3,
    label: "Cuboid",
    image: "/calculate-shapes-volume/assets/cuboid-details.png",
    properties: ["Length(l)", "Width(w)", "Height(h)"],
  },
  {
    id: 4,
    label: "Cylinder",
    image: "/calculate-shapes-volume/assets/cylinder-details.png",
    properties: ["Radius(r)", "Height(h)"],
  },
  {
    id: 5,
    label: "Hexagonal Prism",
    image: "/calculate-shapes-volume/assets/hexagonal-prism-details.png",
    properties: ["Edge(a)", "Height(h)"],
  },
  {
    id: 6,
    label: "Sphere",
    image: "/calculate-shapes-volume/assets/sphere-details.png",
    properties: ["Radius(r)"],
  },
  {
    id: 7,
    label: "Rectangular Pyramid",
    image: "/calculate-shapes-volume/assets/rectangular-pyramid-details.png",
    properties: ["Length(l)", "Width(w)", "Height(h)"],
  },
]);

const form = ref(null);
const itemRefs = ref([]);
const unit = ref("");
const volume = ref("");
const showResult = ref(false);

shape.value = shapes.value.find(
  (shape) => shape.id === Number.parseInt(props.id)
);

const calculateVolume = () => {
  switch (props.id) {
    case "1":
      const [heightCone, radiusCone] = itemRefs.value;
      volume.value = (Math.PI * radiusCone.value ** 2 * heightCone.value) / 3;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "2":
      const [edgeCube] = itemRefs.value;
      volume.value = edgeCube.value ** 3;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "3":
      showResult.value = false;
      const [lengthCuboid, widthCuboid, heightCuboid] = itemRefs.value;
      volume.value =
        lengthCuboid.value * widthCuboid.value * heightCuboid.value;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "4":
      showResult.value = false;
      const [radiusCylinder, heightCylinder] = itemRefs.value;
      volume.value = Math.PI * radiusCylinder.value ** 2 * heightCylinder.value;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "5":
      showResult.value = false;
      const [edgeHexaPrism, heightHexaPrism] = itemRefs.value;
      volume.value =
        ((3 * Math.sqrt(3)) / 2) *
        edgeHexaPrism.value ** 2 *
        heightHexaPrism.value;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "6":
      showResult.value = false;
      const [radiusSphere] = itemRefs.value;
      volume.value = (4 / 3) * Math.PI * radiusSphere.value ** 3;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
    case "7":
      showResult.value = false;
      const [lengthPyramid, widthPyramid, heightPyramid] = itemRefs.value;
      volume.value =
        (lengthPyramid.value * widthPyramid.value * heightPyramid.value * 1) /
        3;
      volume.value = Math.round(volume.value * 100) / 100;
      showResult.value = true;
      break;
  }
};
</script>

<style></style>
