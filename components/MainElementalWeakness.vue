<template>
	<Element :element="weakness.label">
		<img class="w-6 h-6" :src="ElementIcons[weakness.label]" />
		<span class="hidden sm:inline-block">
			{{ weakness.label }}
		</span>
	</Element>
</template>

<script setup lang="ts">
	import { ElementalWeakness } from "~/utils/types"
	import ElementIcons from "~/utils/ElementIcons"

	const props = defineProps<{
		weaknesses: ElementalWeakness
	}>()

	const weakness = computed(() => {
		const sorted = getSortedWeaknesses(props.weaknesses)

		return sorted[0]
	})

	const bgClass = computed(() => {
		const classes = {
			fire: "bg-orange-100",
			water: "bg-sky-100",
			ice: "bg-emerald-100",
			thunder: "bg-yellow-100",
			dragon: "bg-purple-100",
		}

		return classes[weakness.value.label]
	})
</script>
