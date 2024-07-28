/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#454545',
        secondary:'#FF6F19',
        tertiary:'#FFA559',
        light:'#FFE6C7',
        dark: '#000036',
      },
      screens: {
        sm: "640px", // Small screens (e.g., iPhone SE)
        md: "768px", // Medium screens (e.g., iPhone 6/7/8)
        lg: "1024px", // Large screens (e.g., iPhone 6/7/8 Plus)
        xl: "1280px", // Extra-large screens
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  
}

