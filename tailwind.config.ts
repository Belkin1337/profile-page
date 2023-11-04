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
        'servical-button': '#F96876',
        basicBackground: '#030404',
        basicText: '#FE7BE5',
        sea: '#00cdb0',
        pink: '#F7AEF8',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#030404",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        generalCard: {
          DEFAULT: "hsl(var(--card))",
        },
      },
      boxShadow: {
        card: "0px 0px 40px -15px #211e35",
        badge: "inset 64px 0px 0px 0px #00cdb0"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}