<template>
	<div class="bg-white/90 p-3 cursor-pointer hover:bg-emerald-50">
		<h2 class="mb-2 font-bold">{{ monster.name }}</h2>

		<div class="flex justify-between items-center">
			<CampaignBadge :campaign="monster.campaign" />
			<MainElementalWeakness
				:weaknesses="monster.elementalWeaknesses.total"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Monster } from "~/utils/types"

	const props = defineProps<{
		monster: Monster
	}>()
</script>
