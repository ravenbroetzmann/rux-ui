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
        warning: {
          red: {
            dark: colors.red[500],
            light: colors.red[600],
          },
        },
        disabled: {
          primary: {
            dark: colors.slate[600],
            light: colors.slate[400],
          },
          neutral: {
            dark: colors.slate[600],
            light: colors.slate[400],
          },
          default: {
            dark: colors.slate[600],
            light: colors.slate[400],
          },
        },
      },
      width: {
        input: "25rem",
      },
    },
  },
  plugins: [],
};
