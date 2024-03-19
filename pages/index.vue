<template>
	<MainMenu />

	<div class="flex flex-col gap-4 max-w-4xl w-full mx-auto">
		<PageTitle>
			Monster Hunter Rise
			<template #subtitle>Hunting Companion</template>
		</PageTitle>

		<menu class="flex gap-4 relative">
			<input
				type="text"
				placeholder="Filter by name or material"
				v-model="filter"
				class="grow border border-gray-200 rounded p-2 w-full"
			/>
			<button
				v-show="filter.length"
				@click="filter = ''"
				class="absolute right-0 h-full bg-orange-200 rounded aspect-square text-xs"
			>
				&times;
			</button>
		</menu>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			<MonsterCard
				v-for="m in filteredMonsters"
				:monster="m"
				@click="openDetails(m)"
			/>
		</div>
	</div>

	<Teleport to="body">
		<MonsterDetails
			v-if="selectedMonster"
			:monster="selectedMonster"
			@close="selectedMonster = null"
		/>
	</Teleport>
</template>

<script setup lang="ts">
	import { Monster } from "~/utils/types"
	import monsterData from "~/data/monster-data.json" with { type: "json" }

	const selectedMonster = ref<Monster | null>(null)

	useHead({
		title: "Monsters",
		meta: [
			{
				hid: "description",
				name: "description",
				content: "List of monsters in Monster Hunter Rise and Sunbreak",
			},
		],
	})

	const filter = useState("monsters.filter", () => "")

	const filteredMonsters = computed(() => {
		let result = monsterData.slice()

		if (filter.value.length) {
			const rx = new RegExp(filter.value, "i")

			result = result.filter((m) => {
				let str =
					m.name + " " + m.materials.map((m) => m.name).join(" ")
				return rx.test(str)
			})
		}

		result.sort((a, b) => a.name.localeCompare(b.name))

		return result
	})

	function openDetails(monster) {
		selectedMonster.value = monster
	}
</script>
