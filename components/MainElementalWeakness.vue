<template>
	<Element :element="weakness">
		<img class="w-6 h-6" :src="ElementIcons[weakness]" />
		<span class="hidden sm:inline-block">
			{{ weakness }}
		</span>
	</Element>
</template>

<script setup lang="ts">
	import { ElementalWeakness } from "~/utils/types"
	import ElementIcons from "~/utils/ElementIcons"

	const props = defineProps<{
		weaknesses: ElementalWeakness
	}>()

	const elements = ["fire", "water", "thunder", "ice", "dragon"]

	const weakness = computed(() => {
		let maxLabel = ""
		let maxValue = 0

		for (let w of elements) {
			if (props.weaknesses[w] > maxValue) {
				maxLabel = w
				maxValue = props.weaknesses[w]
			}
		}

		return maxLabel
	})

	const bgClass = computed(() => {
		const classes = {
			fire: "bg-orange-100",
			water: "bg-sky-100",
			ice: "bg-emerald-100",
			thunder: "bg-yellow-100",
			dragon: "bg-purple-100",
		}

		return classes[weakness.value]
	})
</script>
