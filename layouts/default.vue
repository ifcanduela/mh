<template>
	<div class="layout min-h-screen">
		<NuxtLoadingIndicator />

		<main class="p-4">
			<slot></slot>
		</main>
	</div>
</template>

<style>
	body {
		background-image: url("~/assets/images/bg.svg");
	}
</style>
