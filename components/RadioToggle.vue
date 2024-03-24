<template>
	<div class="flex gap-2 p-1 rounded bg-white/90">
		<button
			class="rounded bg-orange-50 hover:bg-orange-100 px-4 py-1"
			v-for="option in options"
			@click="select(option)"
		>
			{{ option.label }}
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		modelValue: string
		options: { label: string; value: string }[]
	}>()

	const emit = defineEmits(["update:modelValue"])

	function select(option: { label: string; value: string }) {
		emit("update:modelValue", option.value)
	}
</script>
