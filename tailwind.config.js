/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0ch" },
          "100%": { width: "10ch" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
      },
      animation: {
        typewriter: "typewriter 1s steps(12, end) forwards",
        blink: "blink 0.8s step-end infinite",
        "typewriter-cursor": "typewriter 1s steps(10, end) forwards, blink 1s  step-end infinite 2s",
      },
    },
  },
  plugins: [],
};
