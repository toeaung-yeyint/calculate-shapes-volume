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
		<SearchBar />
		<CardContainer>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/cone.jpg?alt=media&token=ff8f9669-3bb5-4480-b228-b2e82d817175"
				label="Cone"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/cube.jpg?alt=media&token=7da00abc-4ca4-45ba-92ca-3b3f4403194d"
				label="Cube"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/cuboid.jpg?alt=media&token=b7e98bb1-5e63-4c23-b315-c4f5210e756c"
				label="Cuboid"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/cylinder.jpg?alt=media&token=a0353329-fc3c-4c28-844b-d5b526e1ca0d"
				label="Cylinder"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/hexagonal%20prism.jpg?alt=media&token=12d18ba3-df94-44e4-b9ac-a06490fca9cd"
				label="Hexagonal Prism"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/sphere.jpg?alt=media&token=8b01c5f8-c815-481f-8eb2-b58828aa35b2"
				label="Sphere"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/square-based%20pyramid.jpg?alt=media&token=57822014-c13b-4116-a058-f8fadab26d33"
				label="Square-based Pyramid"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/triangle-based%20pyramid.jpg?alt=media&token=7e452b67-9012-4176-b30f-d4cfe39b7fdd"
				label="Triangle-based Pyramid"
			/>
			<Card
				image="https://firebasestorage.googleapis.com/v0/b/shapes-97497.appspot.com/o/triangle-based%20pyramid.jpg?alt=media&token=7e452b67-9012-4176-b30f-d4cfe39b7fdd"
				label="Triangular Prism"
			/>
		</CardContainer>
	</div>
</template>

<script setup>
import CardContainer from "./components/CardContainer.vue";
import Card from "./components/Card.vue";
import SearchBar from "./components/SearchBar.vue";
</script>

<style scoped></style>
