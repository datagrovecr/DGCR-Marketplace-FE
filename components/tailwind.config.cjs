/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textColor: {cta: "var(--color-text-cta)",},
			backgroundColor: {cta: "var(--color-bg-cta)",},
		},
	},
	variants: {
	extend: {},},
	plugins: [],
}
