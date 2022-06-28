module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./assets/**/*.vue",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.vue",
    ".nuxt/dist/server/server.mjs",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#21BF73",
        "hover-primary-green": "#1E9C5F",
        "primary-red": "#FF5555",
        "hover-primary-red": "#eb2f2f",
        "primary-gray": "#163A5F",
        "primary-light-gray": "#5B758E",
      },
      fontSize: {
        "text-sm": "12px",
        "text-md": "14px",
        "text-lg": "16px",
        "text-xl": "18px",
      },
    },
  },
  plugins: [],
};
