/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          "100": "#70f4dd",
          "200": "#08f3e4",
        },
        white: "#fff",
        lightseagreen: "#00bfb3",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "bebas-neue": "'Bebas Neue'",
        "playfair-display": "'Playfair Display'",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
