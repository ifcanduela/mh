<template>
	<MainMenu />

	<div class="flex flex-col gap-4 max-w-4xl w-full mx-auto">
		<PageTitle>
			Monster Hunter Rise
			<template #subtitle>Hunting Companion</template>
		</PageTitle>

		<menu class="flex gap-4">
			<div class="grow relative">
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
			</div>
			<div>
				<RadioToggle v-model="gameFilter" :options="gameOptions" />
			</div>
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

	const supabase = useSupabase()

	const response = await supabase
		.from("checks")
		.select()
		.like("code", `crowns.%`)
		.order("code")

	response.data.forEach((row) => {
		const code = row.code.split(".")
		const monsterSlug = code[1]
		const size = code[2]
		const monsterIndex = monsterData.findIndex(
			(m) => m.name.replaceAll(" ", "") === monsterSlug,
		)
		const monster = monsterData[monsterIndex]

		if (!monster.crowns) {
			monster.crowns = { mini: false, giant: false }
		}

		monster.crowns[size] = row.checked
	}, {})

	const selectedMonster = ref<Monster | null>(null)
	const gameFilter = useState("gameFilter", () => "")
	const gameOptions = [
		{ label: "All", value: "" },
		{ label: "Rise", value: "rise" },
		{ label: "Sunbreak", value: "sunbreak" },
	]

	const filter = useState("monsters.filter", () => "")

	const filteredMonsters = computed(() => {
		let result = monsterData.slice()

		if (gameFilter.value) {
			result = result.filter((m) => m.campaign === gameFilter.value)
		}

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
