<template>
	<div
		class="fixed inset-0 bg-white/90 p-3 backdrop-blur-sm overflow-y-auto p-4"
	>
		<button
			class="absolute px-3 p-1 top-2 right-2 bg-gray-50 hover:bg-red-200"
			@click="handleCloseClick"
		>
			&times; close
		</button>

		<h2 class="flex items-center gap-4 mb-4">
			<span class="font-bold text-xl">{{ monster.name }}</span>
			<CampaignBadge expand :campaign="monster.campaign" />
		</h2>

		<div class="flex justify-start items-center gap-3 mb-4">
			<ElementalWeaknesses
				:weaknesses="monster.elementalWeaknesses.total"
			/>
		</div>

		<div class="mb-4">
			<div class="flex gap-1">
				<span
					class="px-2 py-1 bg-yellow-200 text-yellow-700 uppercase"
					:class="[crowns.miniCrown ? 'opacity-90' : 'opacity-20']"
					>mini</span
				>
				<span
					class="px-2 py-1 bg-yellow-200 text-yellow-700 uppercase"
					:class="[crowns.largeCrown ? 'opacity-90' : 'opacity-20']"
					>giant</span
				>
			</div>
			<div v-for="(q, t) in crowns.quests" v-show="q" class="text-sm">
				<span class="opacity-50">{{ t }}</span> {{ q }}
			</div>
		</div>

		<div class="flex flex-col gap-4 justify-center">
			<menu class="my-4 relative">
				<input
					type="text"
					placeholder="Filter by material"
					v-model="materialFilter"
					class="grow border border-gray-200 rounded p-2 w-full"
				/>
				<button
					v-show="materialFilter.length"
					@click="materialFilter = ''"
					class="absolute right-0 h-full bg-orange-200 rounded aspect-square text-xs"
				>
					&times;
				</button>
			</menu>

			<div>
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				>
					<div v-for="monsterMaterial in filteredMaterials">
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
										<span>{{ material.chance }}%</span>
										<span v-if="material.count > 1"
											>&nbsp;&times;{{
												material.count
											}}</span
										>
										<span v-if="material.part"
											>&nbsp;&mdash;&nbsp;{{
												material.part
											}}</span
										>
									</td>
								</tr>
							</template>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { Monster } from "~/utils/types"
	import crownData from "~/data/crowns.json" with { type: "json" }

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

	const materialFilter = ref("")

	function handleCloseClick() {
		emit("close")
	}

	const crowns = computed(() => {
		const n = props.monster.name
		const c = crownData.find((c) => c.monster === n)

		return c
	})

	const filteredMaterials = computed(() => {
		let result = props.monster.materials.slice()

		if (materialFilter.value) {
			const rx = new RegExp(materialFilter.value, "i")

			result = result.filter((m) => rx.test(m.name))
		}

		return result
	})
</script>
