const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#ffffff",
            foreground: "#000000",
          },
        },
        dark: {
          colors: {
            background: "#0a0a0a",
            foreground: "#ffffff",
            secondary: {
              DEFAULT: "#8b5cf6",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};