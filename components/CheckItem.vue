<template>
	<label class="flex p-2 gap-2 bg-white rounded">
		<div>
			<input
				type="checkbox"
				:value="check.uuid"
				:checked="check.checked"
				@change="handleChangeEvent"
			/>
		</div>

		<div class="flex flex-col gap-1">
			<div>{{ check.title }}</div>

			<div v-show="check.description">
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
