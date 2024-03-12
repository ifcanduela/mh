// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: false },
	devServer: {
		port: 3020,
	},
	modules: [
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"@nuxtjs/google-fonts",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"@vueuse/nuxt",
		"nuxt-icon",
		"@nuxt/content",
	],
	colorMode: {
		classSuffix: "",
	},
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			Inter: [400, 700],
		},
	},
	image: {},
})
