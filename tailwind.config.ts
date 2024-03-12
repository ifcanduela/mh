import defaultTheme from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss"

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	darkMode: "class",
}
