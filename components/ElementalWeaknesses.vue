<template>
	<div class="flex gap-1">
		<Element v-for="item in items" :element="item.label" :key="item.label">
			<img class="w-6 h-6" :src="ElementIcons[item.label]" />
			<span class="hidden sm:inline-block">{{ item.label }}</span>
			<span class="hidden sm:inline-block opacity-60">{{
				item.value
			}}</span>
		</Element>
	</div>
</template>

<script setup lang="ts">
	import { ElementalWeakness } from "~/utils/types"
	import ElementIcons from "~/utils/ElementIcons"
	import { getSortedWeaknesses } from "~/utils/helpers"

	const props = defineProps<{
		weaknesses: ElementalWeakness
	}>()

	const items = computed(() => {
		const weaknesses = getSortedWeaknesses(props.weaknesses)

		return weaknesses /* .filter((w) => w.value >= max - 15) */
	})
</script>
