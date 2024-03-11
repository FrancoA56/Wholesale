/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        tono1: "#26455A",
        tono1b: 'rgb(38, 69, 90, 0.6)',
        tono2: "#335C78",
        tono3: "#5599BF",
        tono4: "#B2B2B2",
        tono5: "#FFFFFF",
      },
      fontSize: {
        parrafo: "1.2rem",
        subtitulo: "1.5rem",
        semititulo: "2.2rem",
        titulo: "3rem",
      },
      fontFamily: {
        gothamB: 'Gotham-Book',
        gothamBI: 'Gotham-BookItalic',
        BodoniB: 'BodoniStd-Book',
        BodoniBI: 'BodoniStd-BookItalic',
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "fondo": "url('/src/media/imagenes/fondoEmily3.jpg')",
        "fondoOoni": "url('/src/media/imagenes/ooni/portada.jpeg')",
        "fondoEmile": "url('/src/media/imagenes/emile/portada.jpeg')",
        "fondoMauviel": "url('/src/media/imagenes/mauviel/portada.jpeg')",
        "fondoBoj": "url('/src/media/imagenes/boj/portada.jpg')",
        "pizita": "url('/src/media/imagenes/ooni/pizita.jpeg')",
        "pizitaCel": "url('/src/media/imagenes/ooni/pizitaCel.jpeg')",
      },
      transitionDuration: {
        'height': '0.5s',
      },
    },
  },
  plugins: [],
};
