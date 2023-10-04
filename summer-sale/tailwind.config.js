const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        "light-yellow": "#F9F6E2",
        yellow: "#FFC107",
        pink: "#E527B2",
        gray: "rgba(17, 17, 17, 0.05)",
        "dark-gray": "rgba(17, 17, 17, 0.50)",
      },
      fontFamily: {
        work: ["'Work Sans', sans-serif", ...defaultThemes.fontFamily.sans],
      },
      fontSize: {
        "5.5xl": "58px",
      },
    },
  },
  plugins: [require("daisyui")],
};
