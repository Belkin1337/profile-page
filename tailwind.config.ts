/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        SERVICE_BUTTON: '#F96876',
        MAIN_BACKGROUND: '#030404',
        LIGHT_BACKGROUND: "#4D6666",
        MAIN_TEXT: '#FE7BE5',
        MAIN_SEAWAVE: '#00cdb0',
        LIGHT_SEAWAVE: "#005044",
        MAIN_PINK: '#F7AEF8',
      },
      boxShadow: {
        CARD: "0px 0px 40px -15px #211e35",
        BADGE: "inset 64px 0px 0px 0px #00cdb0"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}