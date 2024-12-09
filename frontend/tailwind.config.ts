import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				redaccent: "rgba(var(--color-redaccent),<alpha-value>)",
				greenaccent: "rgba(var(--color-greenaccent),<alpha-value>)",
				yellowaccent: "rgba(var(--color-yellowaccent),<alpha-value>)",
				primary: "rgba(var(--color-primary),<alpha-value>)",
				secondary: "rgba(var(--color-secondary),<alpha-value>)",
				bgColor: "rgba(var(--color-bgColor),<alpha-value>)",
				bgColorFade: "rgba(var(--color-bgColorFade),<alpha-value>)",
				textColor: "rgba(var(--color-textColor),<alpha-value>)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
