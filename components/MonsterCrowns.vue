<template>
	<div v-if="crowns" class="flex gap-0.5">
		<button
			@click.stop="updateCrown('mini')"
			class="p-2 bg-yellow-50 hover:bg-orange-100"
		>
			<img
				:class="{ 'opacity-50': !crowns.mini }"
				:src="`images/mini-crown.png`"
				alt="Crown icon"
				class="w-4 h-4"
			/>
		</button>
		<button
			@click.stop="updateCrown('giant')"
			class="p-2 bg-yellow-50 hover:bg-orange-100"
		>
			<img
				:class="{ 'opacity-50': !crowns.giant }"
				:src="`images/giant-crown.png`"
				alt="Crown icon"
				class="w-4 h-4"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		crowns: { mini: boolean; giant: boolean }
	}>()

	const emit = defineEmits(["update"])

	async function updateCrown(type: "mini" | "giant") {
		emit("update", type)
	}
</script>
