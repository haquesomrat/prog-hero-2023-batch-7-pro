const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        garamond: ["EB Garamond", ...defaultTheme.fontFamily.serif],
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gold: "#B68C5A",
        black: "#414040",
        "light-black": "#707070",
      },
      spacing: {
        4.5: "18px",
        7.5: "30px",
      },
      fontSize: {
        "2.5rem": "40px",
      },
    },
  },
  plugins: [require("daisyui")],
};
