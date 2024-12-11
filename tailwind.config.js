/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu': "url('/src/assets/background.avif')",
        'header-menu-background': "url('/src/assets/header/header-menu-background.webp')",
      },
      colors: {
        borderCustom: "#333330",
        borderCustomHover: "#4E4C48",
        default: "#EFE7D2",
      },
    },
  },
  plugins: [],
};
