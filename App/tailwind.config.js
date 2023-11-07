module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos de JavaScript y JSX en tu proyecto
    "./public/index.html", // Archivo HTML principal
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Baloo Regular", "sans"], // Fuente Baloo Regular
        baloo2: ["Baloo 2", "sans"], // Fuente Baloo 2
        poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
