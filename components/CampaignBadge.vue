<template>
	<span
		class="text-xs px-1 py-0.5 rounded text-white"
		:class="[campaign === 'rise' ? 'bg-sky-300' : 'bg-red-400']"
		>{{ campaign }}</span
	>
</template>

<script setup lang="ts">
	defineProps<{
		campaign: string
	}>()
</script>
