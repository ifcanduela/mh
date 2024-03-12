<template>
	<td
		class="text-center p-1"
		:class="[state ? 'bg-green-300/50' : 'bg-red-300/50']"
	>
		{{ status ? "ye" : "nah" }}
	</td>
</template>

<script setup lang="ts">
	const props = defineProps<{
		state: any
	}>()

	const status = computed(() => {
		return props.state ? true : false
	})
</script>
