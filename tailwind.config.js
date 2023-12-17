/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cstm': '-1px 23px 10px 10px #0C1729'
      }
    },
  },
  plugins: [],
}