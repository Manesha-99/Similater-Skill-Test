/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              "primary-dark": "#1E1E1E"
          },
          container: {
              center: true,
              padding: "2rem"
          }
      }
  },
  plugins: []
}
