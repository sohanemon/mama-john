/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "single-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        mySpin: "single-spin 1s ease-out 1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("tailwind-scrollbar")],
};
