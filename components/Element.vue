<template>
	<span
		class="text-xs uppercase font-bold tracking-wide flex items-center gap-1 p-2"
		:class="[bgClass]"
	>
		<slot />
	</span>
</template>

<script setup lang="ts">
	const props = defineProps<{
		element: string
	}>()
	const classes = {
		fire: "bg-red-100",
		water: "bg-sky-100",
		ice: "bg-emerald-100",
		thunder: "bg-yellow-100",
		dragon: "bg-purple-100",
	}

	const bgClass = computed(() => {
		return classes[props.element]
	})
</script>
