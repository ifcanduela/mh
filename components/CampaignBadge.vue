<template>
	<span
		:title="campaign"
		class="text-xs px-1 py-0.5 rounded text-white"
		:class="[
			campaign === 'rise' ? 'bg-sky-300' : 'bg-red-400',
			expand ? '' : 'aspect-square',
		]"
		>{{ expand ? campaign : "" }}</span
	>
</template>

<script setup lang="ts">
	withDefaults(
		defineProps<{
			campaign: string
			expand?: boolean
		}>(),
		{
			expand: false,
		},
	)
</script>
