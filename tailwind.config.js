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
         "0%": { transform: "translateX(-80rem)", opacity: "0" },
          "5%": { transform: "translateX(-40rem)", opacity: "1" }, 
          "7%": { transform: "translateX(-25rem)", opacity: "1" }, 
          "8%": { transform: "translateX(-20rem)", opacity: "1" }, 
          "9%": { transform: "translateX(-17rem)", opacity: "1" }, 
          "10%": { transform: "translateX(-15rem)", opacity: "1" }, 
          "12%": { transform: "translateX(-12rem)" }, 
          "14%": { transform: "translateX(-9rem)" }, 
          "16%": { transform: "translateX(-6rem)" }, 
          "18%": { transform: "translateX(-3rem)" }, 
          "20%": { transform: "translateX(0vw)" },
          "70%": { transform: "translateX(0vw)" },
          "90%": { transform: "translateX(40rem)" },
          "100%": { transform: "translateX(160rem)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      }
      
      ,
      animation: {
        train: "train s linear infinite",
        fadeIn: "fadeIn 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
