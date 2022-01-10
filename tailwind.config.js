module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  //most credit to Tailwind Labs https://www.youtube.com/channel/UCOe-8z68tgw9ioqVvYM4ddQ
  plugins: [require("@tailwindcss/typography")],
};
