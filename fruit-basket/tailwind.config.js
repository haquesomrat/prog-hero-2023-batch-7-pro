const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["*"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: "#121212",
        "black-8": "rgba(18, 18, 18, 0.80)",
        "black-7": "rgba(18, 18, 18, 0.70)",
        "black-6": "rgba(18, 18, 18, 0.60)",
        "black-4": "rgba(18, 18, 18, 0.40)",
        "black-1": "rgba(18, 18, 18, 0.10)",
        "black-0": "rgba(18, 18, 18, 0.0)",
        "soft-red": "#F85559",
      },
      spacing: {
        "0.5625rem": "9px",
        "1.125rem": "18px",
        "1.875rem": "30px",
        "3.125rem": "50px",
        "3.375rem": "54px",
        "3.75rem": "60px",
        "4.375rem": "70px",
        "1/10": "10%",
      },
    },
  },
  plugins: [require("daisyui")],
};
