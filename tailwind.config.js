/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        },
        //barvy ze sablony
        //https://visme.co/blog/wp-content/uploads/2016/09/website27.jpg
        custom1Primary: {
          DEFAULT: "#86C232" //JASNE ZELENA
        },
        custom1Secondary: {
          DEFAULT: "#61892F", // TMAVSI ZELENA
          // 500: "#39521b"
        },
        custom1Accent: {
          DEFAULT: "#6B6E70" // SVETLE SEDA
        },
        custom1Muted: {
          DEFAULT: "#474B4F" // TMAVSI SEDA
        },
        custom1Dark: {
          DEFAULT: "#222629" // SEDOCERNA
        },
        customPrimary: {
          DEFAULT: "#66FCF1" //JASNE modra
        },
        customSecondary: {
          DEFAULT: "#45A29E", // TMAVSI modra
          500: "#36807C"
        },
        customAccent: {
          DEFAULT: "#C5C6C7" // SVETLE KREMOVA
        },
        customMuted: {
          DEFAULT: "#1F2833" // TMAVSI SEDA
        },
        customDark: {
          DEFAULT: "#0B0C10" // SEDOCERNA
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },

      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.5s forwards',
      },
    },
  },
  plugins: [],
}