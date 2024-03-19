// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: false },
	app: {
		baseURL: "/mh/",
	},
	$development: {
		app: {
			baseURL: "/",
		},
	},
	devServer: {
		port: 3020,
	},
	modules: [
		"@nuxtjs/google-fonts",
		"@nuxtjs/tailwindcss",
		"@vueuse/nuxt",
		"@nuxtjs/supabase",
	],
	googleFonts: {
		display: "swap",
		download: true,
		families: {
			Inter: [400, 700],
		},
	},
	supabase: {
		redirect: false,
		url: "",
		key: "",
	},
})
