// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// ssr: false,
	devtools: { enabled: false },
	app: {
		baseURL: "/mh",
	},
	$development: {
		app: {
			baseURL: "",
		},
	},
	nitro: {
		prerender: {
			ignore: ["/games"],
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
		key: process.env.SUPABASE_KEY,
		url: process.env.SUPABASE_URL,
	},
})
