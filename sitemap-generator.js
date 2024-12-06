const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const DOMAIN = "https://www.ws-dyr.com"; // Reemplaza con tu dominio
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 }, // Página de inicio
  { url: "/contacto", changefreq: "monthly", priority: 0.8 }, // Página de contacto
  { url: "/acercaDe", changefreq: "monthly", priority: 0.7 }, // Página acerca de
  { url: "/ooni", changefreq: "weekly", priority: 0.9 }, // Página Ooni
  { url: "/emileHenry", changefreq: "weekly", priority: 0.9 }, // Página Emile Henry
  { url: "/mauviel1830", changefreq: "weekly", priority: 0.9 }, // Página Mauviel 1830
  { url: "/boj", changefreq: "weekly", priority: 0.9 }, // Página Boj
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("Sitemap generado correctamente en ./public/sitemap.xml");
}

generateSitemap().catch((err) => console.error("Error al generar el sitemap:", err));
