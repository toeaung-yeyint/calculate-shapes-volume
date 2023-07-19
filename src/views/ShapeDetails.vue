<template>
	<IntroSection>
		<RouterLink to="/">
			<button
				class="mt-20 w-full mb-12 py-2 rounded bg-gray-300 hover:bg-gray-400 text-white"
			>
				Return to menu
			</button>
		</RouterLink>
		<div class="flex flex-col sm:flex-row items-center gap-x-8 h-80">
			<div class="w-full sm:w-1/2 h-full relative">
				<img
					:src="shape.image"
					alt=""
					class="border-2 w-full h-full object-contain"
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
						class="border-2 flex-grow w-9/12"
						ref="itemRefs"
						required
					/>
				</div>
				<div class="flex items-center mb-4">
					<label for="unit" class="w-5/12">Unit of measure:</label>
					<select class="border-2" id="unit" v-model="unit" required>
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
	</IntroSection>
</template>

<script setup>
import { ref, onMounted } from "vue";
import IntroSection from "../components/IntroSection.vue";

import cone from "../assets/cone-details.jpg";
import cube from "../assets/cube-details.jpg";
import cuboid from "../assets/cuboid-details.jpg";
import cylinder from "../assets/cylinder-details.jpg";
import hexPrism from "../assets/hexagonal-prism-details.jpg";
import sphere from "../assets/sphere-details.jpg";
import squarePyramid from "../assets/rectangular-pyramid-details.jpg";

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
		properties: ["Length(l)", "Width(w)", "Height(h)"],
	},
	{
		id: 4,
		label: "Cylinder",
		image: cylinder,
		properties: ["Radius(r)", "Height(h)"],
	},
	{
		id: 5,
		label: "Hexagonal Prism",
		image: hexPrism,
		properties: ["Edge(a)", "Height(h)"],
	},
	{
		id: 6,
		label: "Sphere",
		image: sphere,
		properties: ["Radius(r)"],
	},
	{
		id: 7,
		label: "Rectangular Pyramid",
		image: squarePyramid,
		properties: ["Length(l)", "Width(w)", "Height(h)"],
	},
]);

const form = ref(null);
const itemRefs = ref([]);
const unit = ref("");
const volume = ref("");
const showResult = ref(false);

onMounted(() => {
	shape.value = shapes.value.find(
		(shape) => shape.id === Number.parseInt(props.id)
	);
});

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
