const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const DOMAIN = "https://www.ws-dyr.com"; // Reemplaza con tu dominio
const routes = [
  { url: "/", changefreq: "monthly", priority: 1.0 }, // Página de inicio
  { url: "/ar", changefreq: "daily", priority: 1.0 }, // Página de inicio
  { url: "/uy", changefreq: "daily", priority: 1.0 }, // Página de inicio
  { url: "/ar/contacto", changefreq: "monthly", priority: 0.8 }, // Página de contacto
  { url: "/uy/contacto", changefreq: "monthly", priority: 0.8 }, // Página de contacto
  { url: "/ar/preguntas", changefreq: "monthly", priority: 0.8 }, // Página de contacto
  { url: "/uy/preguntas", changefreq: "monthly", priority: 0.8 }, // Página de contacto
  { url: "/ar/nosotros", changefreq: "monthly", priority: 0.7 }, // Página acerca de
  { url: "/uy/nosotros", changefreq: "monthly", priority: 0.7 }, // Página acerca de
  { url: "/ar/ooni", changefreq: "monthly", priority: 1.0 }, // Página Ooni
  { url: "/ar/emileHenry", changefreq: "monthly", priority: 1.0 }, // Página Emile Henry
  { url: "/uy/emileHenry", changefreq: "monthly", priority: 1.0 }, // Página Emile Henry
  { url: "/ar/mauviel1830", changefreq: "monthly", priority: 1.0 }, // Página Mauviel 1830
  { url: "/uy/mauviel1830", changefreq: "monthly", priority: 1.0 }, // Página Mauviel 1830
  { url: "/ar/boj", changefreq: "monthly", priority: 1.0 }, // Página Boj
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("Sitemap generado correctamente en ./public/sitemap.xml");
}

generateSitemap().catch((err) =>
  console.error("Error al generar el sitemap:", err)
);
