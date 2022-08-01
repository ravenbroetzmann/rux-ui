const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/components/**/*.{tsx,ts}",
    "./src/utils/*.{ts,tsx}",
    "./src/context/*.{ts,tsx}",
    "./.storybook/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        default: {
          dark: colors.gray[700],
          light: colors.gray[200],
          "light-darker": colors.gray[300],
          "dark-lighter": colors.gray[600],
        },
        primary: {
          dark: colors.sky[400],
          light: colors.sky[600],
        },

        neutral: {
          dark: colors.gray[200],
          light: colors.gray[700],
        },
      },
      width: {
        input: "25rem",
      },
    },
  },
  plugins: [],
};
