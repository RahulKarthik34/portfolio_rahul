/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0F172A',
        cardDark: '#1E293B',
        cardDarkElevated: '#111827',
        primaryAccent: '#2563EB',
        primaryHover: '#1D4ED8',
        successAccent: '#10B981',
        textDark: '#F1F5F9',
        textMutedDark: '#94A3B8',
        textLight: '#1E293B',
        textMutedLight: '#64748B',
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
