/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        train: {
          "0%": { transform: "translateX(-32rem)" },
          "12.5%": { transform: "translateX(-32rem)" },
          "25%": { transform: "translateX(calc(40vw - 15.5rem))" },
          "37.5%": { transform: "translateX(calc(50vw - 15.5rem))" },
          "50%": { transform: "translateX(calc(50vw - 15.5rem))" },
          "62.5": { transform: "translateX(calc(50vw - 15.5rem))" },
          "75%": { transform: "translateX(60vw)" },
          "87.5%": { transform: "translateX(calc(100vw + 32rem))" },
          "100%": { transform: "translateX(calc(100vw + 32rem))" },
        },
      },
      animation: {
        train: "train 24s linear infinite",
      },
    },
  },
  plugins: [],
};
