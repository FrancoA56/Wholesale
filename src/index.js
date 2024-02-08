import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/input.css";
import "./fonts.css";
import App from "./App";

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

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
