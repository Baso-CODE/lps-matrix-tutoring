import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assets = [
  {
    input: "public/images/visi-misi-lps-logo.webp",
    output: "public/images/visi-misi-lps-logo-optimized.webp",
    width: 96,
  },
  {
    input: "public/images/LOGO2.webp",
    output: "public/images/LOGO2-optimized.webp",
    width: 240,
  },
  {
    input: "public/images/banner-optimized.webp",
    output: "public/images/banner-mobile.webp",
    width: 480,
  },
  {
    input: "public/images/daftar-sekarang.webp",
    output: "public/images/daftar-sekarang-optimized.webp",
    width: 64,
  },
];

for (const asset of assets) {
  await mkdir(path.dirname(asset.output), { recursive: true });

  const original = await sharp(asset.input).metadata();
  const optimized = await sharp(asset.input)
    .resize({ width: asset.width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(asset.output);

  console.log(
    `${path.basename(asset.output)}: ` +
      `${(original.size / 1024).toFixed(1)} KB → ` +
      `${(optimized.size / 1024).toFixed(1)} KB`,
  );
}
