/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'timeline-scroll': 'timeline-scroll 1s ease-in-out',
      },
      keyframes: {
        'timeline-scroll': {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}