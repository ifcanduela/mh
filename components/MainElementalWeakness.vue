<template>
	<span
		class="text-xs uppercase font-bold tracking-wide flex items-center gap-1 p-2"
		:class="[bgClass]"
	>
		<img class="w-6 h-6" :src="ElementIcons[weakness]" />
		{{ weakness }}</span
	>
</template>

<script setup lang="ts">
	import { ElementalWeakness } from "~/utils/types"
	import fireIcon from "~/assets/images/fire.png"
	import waterIcon from "~/assets/images/water.png"
	import iceIcon from "~/assets/images/ice.png"
	import thunderIcon from "~/assets/images/thunder.png"
	import dragonIcon from "~/assets/images/dragon.png"

	const ElementIcons = {
		fire: fireIcon,
		water: waterIcon,
		ice: iceIcon,
		thunder: thunderIcon,
		dragon: dragonIcon,
	}

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
