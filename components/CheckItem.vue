<template>
	<label class="flex gap-2">
		<div>
			<input type="checkbox" :value="check.uuid" :checked="check.checked" @change="handleChangeEvent" />
		</div>

		<div class="flex flex-col gap-1">
			<div>{{ check.title }}</div>
			<code>{{ check.checked }}</code>
			<div>
				{{ check.description }}
			</div>
		</div>
	</label>
</template>

<script setup lang="ts">
	import { type Check } from "~/utils/types"

	defineProps<{
		check: Check
	}>()

	const emit = defineEmits(["update"])

	function handleChangeEvent($event: Event) {
		emit("update", $event.target.checked)
	}
</script>
