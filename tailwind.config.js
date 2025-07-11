/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ⬅️ This line is important for enabling class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}
