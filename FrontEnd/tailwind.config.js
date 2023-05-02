/** @type {import('tailwindcss').Config} */
module.exports = {
  mod: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      c1: "#c9c9c9", //연한색
      c2: "#060606", //
      c3: "#D70202", //빨간색
      c4: "#606060", // 그레이
      bgc1: "#e0ebf8", // 와인 백 칼라 하늘
      barColor: "#A9A9A9",
      main: "#E5D1D1",
      color0: "#7B4848",
      color1: "#AA7373",
      color2: "#E5D1D1",
    },
    extend: {},
  },
  plugins: [],
};
