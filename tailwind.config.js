/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        lightGrayishCyanBg: "hsl(180, 52%, 96%)",
        lightGrayishCyanFilter: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      },
      fontFamily: {
        custom: ["league spartan", "sans-serif"],
      },
      fontSize: {
        default: ".9375rem",
      },
      backgroundImage: {
        mobile: "url('/src/components/assets/bg-header-mobile.svg')",
        desktop: "url('/src/components/assets/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
