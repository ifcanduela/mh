<template>
	<div class="text-center flex flex-col gap-1 justify-center">
		<h1 class="text-3xl font-bold text-orange-900/75">
			<slot />
		</h1>
		<div class="text-sm font-bold uppercase tracking-wide text-black/75">
			<slot name="subtitle" />
		</div>
	</div>
</template>
