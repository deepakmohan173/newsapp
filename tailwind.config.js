/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        euclid_bold: ["Euclid-Bold"],
        euclid_medium: ["Euclid-Medium"],
        euclid_regular: ["Euclid-Regular"],
        euclid_light: ["Euclid-Light"],
        euclid_thin: ["Euclid-Thin"],
      },
    },
  },
  plugins: [],
};
