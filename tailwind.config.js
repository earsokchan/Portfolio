/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4261c",
        ink: "#141010",
        cream: "#fff3e6",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Bricolage Grotesque"', "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "30px",
        section: "56px",
      },
      lineHeight: {
        tightest: "0.98",
      },
      letterSpacing: {
        editorial: "-0.045em",
      },
    },
  },
  plugins: [],
}

