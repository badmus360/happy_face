/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamiy: {
        jua: ['Jua'],
        schoolbell: ['Schoolbell'],
        butterfly: ['Butterfly Kids'],
      },
    },
  },
  plugins: [],
}