/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070E",
        ink2: "#080C18",
        panel: "#0E1528",
        panel2: "#121B33",
        blue: "#1E63FF",
        blueBright: "#3B82F6",
        cyan: "#22D3EE",
        neon: "#38E1FF",
        metal: "#8A94A6",
        ice: "#EAF1FF",
      },
      fontFamily: {
        display: ['"Chakra Petch"', "sans-serif"],
        body: ['"Sora"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
