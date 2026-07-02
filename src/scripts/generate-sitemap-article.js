import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { allArticles } from "../data/article/index.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateArticleSitemap() {
  const baseUrl = "https://apps.lesprivatmasukptn.com/blog";

  const sitemapRows = allArticles
    .map((article) => {
      const safeTitle = (article.title || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");

      const safeCoverImage = article.coverImage
        ? article.coverImage.replace(/&/g, "&amp;")
        : "";

      return `
    <url>
        <loc>${baseUrl}/${article.slug}</loc>
        <lastmod>${article.publishedAt || new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        ${
          article.coverImage
            ? `
        <image:image>
            <image:loc>${safeCoverImage}</image:loc>
            <image:title>${safeTitle}</image:title>
        </image:image>`
            : ""
        }
    </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${sitemapRows}
</urlset>`;
}

try {
  const xmlContent = generateArticleSitemap();

  const outputPath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "sitemap-article.xml",
  );

  fs.writeFileSync(outputPath, xmlContent, "utf8");
  console.log(
    "\x1b[32m%s\x1b[0m",
    "✓ sitemap-article.xml berhasil dibuat di folder /public!",
  );
} catch (error) {
  console.error("Gagal membuat sitemap:", error);
}
