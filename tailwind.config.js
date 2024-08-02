/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'glow': '0 0 2px #8d8d8d, 0 0 4px #8d8d8d, 0 0 6px #8d8d8d, 0 0 8px #8d8d8d',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        space: "#021631",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "glow-scale": "glow 0.3s ease-in-out",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        glow: {
          "0%": { transform: "scale(1)", boxShadow: "0 0 2px #8d8d8d, 0 0 4px #8d8d8d, 0 0 6px #8d8d8d, 0 0 8px #8d8d8d" },
          "100%": { transform: "scale(1.1)", boxShadow: "0 0 6px #8d8d8d, 0 0 8px #8d8d8d, 0 0 10px #8d8d8d, 0 0 12px #8d8d8d" },
        },
      },
    },
  },

  plugins: [require("tailwindcss-textshadow")],
};
