/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#1C1C1C",
          2: "#4E4E4E",
        },
        light:{
          1: "#EAEAEA"
        }
      },
      boxShadow: {
        hug: "0 23px 35px 0 rgba(30, 30, 30, 0.09)",
      },
    },
  },
  plugins: [],
};
