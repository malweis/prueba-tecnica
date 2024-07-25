/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app.json",
    "./app.config.js",
    "./tailwind.config.js", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

