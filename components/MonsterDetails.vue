<template>
	<div class="fixed inset-0 bg-white/90 p-3 backdrop-blur-sm overflow-y-auto">
		<button
			class="absolute px-3 p-1 top-2 right-2 bg-gray-50 hover:bg-red-200"
			@click="handleCloseClick"
		>
			&times; close
		</button>
		<h2 class="text-lg font-bold">
			{{ monster.name }} <CampaignBadge :campaign="monster.campaign" />
		</h2>

		<div class="flex justify-start items-center gap-3">
			<MainElementalWeakness
				:weaknesses="monster.elementalWeaknesses.total"
			/>
		</div>

		<div class="flex gap-4 justify-center">
			<div>
				<h2>Materials</h2>
				<div class="grid grid-cols-2 gap-4">
					<div v-for="monsterMaterial in monster.materials">
						<h3 class="font-bold text-orange-950">
							{{ monsterMaterial.name }}
						</h3>

						<table>
							<template v-for="method in methods">
								<tr
									class="border-t border-gray-200"
									v-for="material in monsterMaterial[
										method.key
									]"
								>
									<td class="p-2">
										<span
											class="font-bold italic text-xs uppercase text-gray-500"
											>{{
												monsterMaterial.rank
											}}
											rank</span
										>
									</td>
									<td class="font-bold p-2">
										{{ method.label }}
									</td>
									<td class="p-2">
										{{ material.chance }}%
										<span v-if="material.count > 1"
											>x {{ material.count }}</span
										>
										<span v-if="material.part"
											>&mdash; {{ material.part }}</span
										>
									</td>
								</tr>
							</template>
						</table>
					</div>
				</div>
			</div>
			<!-- <div>
				<h2>Elemental Weaknesses</h2>
				<div></div>
			</div> -->
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Monster } from "~/utils/types"

	const props = defineProps<{
		monster: Monster
	}>()

	const emit = defineEmits(["close"])

	const methods = [
		{ key: "questReward", label: "Hunt" },
		{ key: "captureReward", label: "Capture" },
		{ key: "partBreakReward", label: "Part break" },
		{ key: "carve", label: "Carving" },
		{ key: "drop", label: "Item drop" },
	]

	function handleCloseClick() {
		emit("close")
	}
</script>
