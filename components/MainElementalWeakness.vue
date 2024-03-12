<template>
	<span class="text-sm uppercase">{{ weakness }}</span>
</template>

<script setup lang="ts">
	import { ElementalWeakness } from "~/utils/types"

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
</script>
