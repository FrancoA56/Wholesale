import React from "react";
import ReactDOM from "react-dom";
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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
