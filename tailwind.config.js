/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            primary: {
                purple: "#5E17EB",
                dark: "#2A0F5F"
            },
            secondary: {
                pink: "#FF00C7"
            },
        },
      },
    },
    plugins: [],
  };