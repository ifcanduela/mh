<template>
	<MainMenu />

	<div class="flex flex-col gap-4 max-w-4xl w-full mx-auto">
		<PageTitle>
			Monster Hunter Rise
			<template #subtitle>Collectible Tracker</template>
		</PageTitle>

		<div>
			<div v-for="c in checks">
				<CheckItem :check="c" @update="updateCheck(c, $event)" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { type Check } from "~/utils/types"

	useHead({
		title: "Checlist",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"List of collectibles in Monster Hunter Rise and Sunbreak",
			},
		],
	})

	const supabase = useSupabaseClient()

	// Fetch checks from the Supabasse database
	const { data: checks, refresh } = await useAsyncData(
		"monster-scrolls",
		async () => {
			const { data } = await supabase
				.from("checks")
				.select("*")
				.eq("collection", "mhrise.SturdyPadlock")
				.order("title")

			return data as Check[]
		},
	)

	async function updateCheck(check: Check, checked: boolean) {
		const { error } = await supabase
			.from("checks")
			.update({ checked })
			.eq("code", check.code)

		if (error) {
			console.error("Error updating check", error)
		}

		refresh()
	}
</script>
