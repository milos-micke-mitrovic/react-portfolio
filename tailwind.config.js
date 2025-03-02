/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4db5ff",
        primaryVariant: "rgba(77, 181, 255, 0.4)",
        bgColor: "#1f1f38",
        bgVariant: "#2c2c6c",
        light: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "600px",
        md: "1024px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
