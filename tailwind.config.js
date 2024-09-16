/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "dark-blue": "#1b1b32",
        "light-blue": "#f0f0f0",
      
      },
      
    },
    
  },
  plugins: [],
}

