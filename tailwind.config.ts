/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      colors: {
        dark: {
          violet_miami: '#8E44AD',
          sea_wave: '#3498DB',
          background: '#2E2E2E',
          text: '#333333',
          accent: '#E74C3C'
        },
        light: {
          violet_miami: '#9B59B6',
          sea_wave: '#2980B9',
          background: '#2C3E50',
          text: '#ECF0F1',
          accent: '#E74C3C'
        },
        unique: {
          violet_miami: '#663399',
          sea_wave: '#4CAF50',
          background: '#FFD700',
          text: '#333333',
          accent: '#FF5733'
        },
        SERVICE_BUTTON: '#F96876',
        MAIN_BACKGROUND: '#030404',
        LIGHT_BACKGROUND: "#4D6666",
        MAIN_TEXT: '#FE7BE5',
        MAIN_PINK: '#F7AEF8',
      },
      boxShadow: {
        CARD: "0px 0px 40px -15px #211e35",
        BADGE: "inset 64px 0px 0px 0px #00cdb0"
      },
      gradient: {
        DARK: "from-gray-950 via-purple-900 to-violet-600",
        LIGHT: "from-gray-200 via-purple-900 to-violet-600"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}