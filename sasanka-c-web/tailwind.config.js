/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./assets/img/main-image.jpg')",
        "hero-image-sm": "url('./assets/img/main-image-mobile.jpg')",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
