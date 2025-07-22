import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/input.css";
import "./fonts.css";
import App from "./App";
import ReactPixel from 'react-facebook-pixel';
import { createRoot } from "react-dom/client";

ReactPixel.init('950854793879926'); // Reemplaza con tu ID de Pixel

// Opcional: Rastrea una página vista inicial
ReactPixel.pageView();

const fontFiles = [
  "BodoniStd-Book.otf",
  "BodoniStd-BookItalic.otf",
  "Gotham-Book.otf",
  "Gotham-BookItalic.otf",
];

fontFiles.forEach((fontFile) => {
  const link = document.createElement("link");
  link.href = `../media/fonts${fontFile}`;
  link.rel = "stylesheet";
  document.head.appendChild(link);
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);