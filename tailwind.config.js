module.exports = {
  content: ["./src/components/**/*.{tsx,ts}", "./src/utils/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        default: "#F3F4F6",
        primary: "#3277a9",
        secondary: "#CBD5E0",
        secondaryDarker: "#c3d0de",
        dark: "#404040",
        darkLighter: "#939696",
      },
      width: {
        input: "25rem",
      },
    },
  },
  plugins: [],
};
