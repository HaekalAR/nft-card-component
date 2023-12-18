/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        cstm: "-1px 23px 10px 10px #0C1729",
      },
      colors: {
        "r-grayishBlue": "hsl(215, 51%, 70%)",
        "r-cyan": "hsl(178, 100%, 50%)",
        "r-darkerCyan": "hsla(178, 100%, 50%, .5)",
        "r-darkerBlueMain": "hsl(217, 54%, 11%)",
        "r-darkBlueCard": "hsl(216, 50%, 16%)",
        "r-slightDarkBlue": "hsl(215, 32%, 27%)",
        "r-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
