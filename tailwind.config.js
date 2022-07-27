module.exports = {
  content: [
    "./src/components/**/*.{tsx,ts}",
    "./src/utils/*.{ts,tsx}",
    "./src/context/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        /**default: "#F3F4F6",
        primary: "#3277a9",
        secondary: "#CBD5E0",
        secondaryDarker: "#c3d0de",
        dark: "#404040",
        darkLighter: "#939696",*/
        default: {
          dark: "gray-700",
          light: "gray-100",
          "light-darker": "gray-300",
          "dark-lighter": "gray-500",
        },
        primary: {
          dark: "sky-400",
          light: "sky-600",
        },

        neutral: {
          dark: "gray-100",
          light: "gray-700",
        },
      },
      width: {
        input: "25rem",
      },
    },
  },
  plugins: [],
};
