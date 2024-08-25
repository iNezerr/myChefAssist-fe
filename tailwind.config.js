/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular:['Regular'],
        primaryBold:['Bold'],
        primaryMedium:['Medium'],
        'roboto': ["Roboto, San-serif"],
      },
    },
  },
  plugins: [],
}

