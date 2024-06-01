/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./ui/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"meteor-effect": "meteor 5s linear infinite",
				gradient: "gradient 8s linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				gradient: {
					to: {
						backgroundPosition: "var(--bg-size) 0",
					},
				},
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						opacity: "1"
					},
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
			colors: {
				deluge: {
					50: "#f2f3fb",
					100: "#e7e9f8",
					200: "#d3d5f2",
					300: "#b8bbe9",
					400: "#9d9bde",
					500: "#8c83d1",
					600: "#7a69c2",
					700: "#7161ae",
					800: "#554a89",
					900: "#48406f",
					950: "#2a2640",
				},
				dark: {
					violet_miami: "#8E44AD",
					sea_wave: "#3498DB",
					background: "#2E2E2E",
					text: "#333333",
					accent: "#E74C3C",
				},
				light: {
					violet_miami: "#9B59B6",
					sea_wave: "#2980B9",
					background: "#2C3E50",
					text: "#ECF0F1",
					accent: "#E74C3C",
				},
				unique: {
					violet_miami: "#663399",
					sea_wave: "#4CAF50",
					background: "#FFD700",
					text: "#333333",
					accent: "#FF5733",
				},
				SERVICE_BUTTON: "#F96876",
				MAIN_BACKGROUND: "#030404",
				LIGHT_BACKGROUND: "#4D6666",
				MAIN_TEXT: "#FE7BE5",
				MAIN_PINK: "#F7AEF8",
			},
			boxShadow: {
				CARD: "0px 0px 40px -15px #211e35",
				BADGE: "inset 64px 0px 0px 0px #00cdb0",
			},
			gradient: {
				DARK: "from-gray-950 via-purple-900 to-violet-600",
				LIGHT: "from-gray-200 via-purple-900 to-violet-600",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
			matchUtilities({
					"bg-dot": (value: any) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg 
									xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32" 
                  width="16"
                  height="16"
                  fill="none">
                <circle 
                  fill="${value}" 
                  id="pattern-circle" 
                  cx="10" 
                  cy="10" 
                  r="1.6257413380501518">  
								</circle>
							</svg>`
						)}")`,
					}),
				}, {
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color"
				}
			);
		},
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({ ":root": newVars, });
}