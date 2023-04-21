/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      c1: "#c9c9c9", //연한색
      c2: "#060606", //
      c3: "#D70202", //빨간색
      barColor: "#A9A9A9",
      main: "#E5D1D1",
    },
    extend: {},
  },
  plugins: [],
};
