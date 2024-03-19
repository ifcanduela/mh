// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
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
		// key: process.env.SUPABASE_KEY,
		// url: process.env.SUPABASE_URL,
		url: "https://piumxcungvlrwbwuzomy.supabase.co",
		key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdW14Y3VuZ3Zscndid3V6b215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU5MTk0MzIsImV4cCI6MjAyMTQ5NTQzMn0.GpxlaUSR7GDv_J9Y7S_5VkDKGQHc9gSxm35aCEFhhK8",
	},
})
