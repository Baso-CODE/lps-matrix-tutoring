import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  {
    input: "public/images/banner.webp",
    output: "public/images/banner-optimized.webp",
    width: 800,
  },
  {
    input: "public/images/program/program-LPS-OLIMPIADE-mobile.webp",
    output: "public/images/program/program-LPS-OLIMPIADE-mobile-optimized.webp",
    width: 750,
  },
  {
    input: "public/images/slider/mobile-1.webp",
    output: "public/images/slider/mobile-1-optimized.webp",
    width: 800,
  },
  {
    input: "public/images/slider/mobile-2.webp",
    output: "public/images/slider/mobile-2-optimized.webp",
    width: 800,
  },
  {
    input: "public/images/slider/mobile-3.webp",
    output: "public/images/slider/mobile-3-optimized.webp",
    width: 800,
  },
];

for (const item of images) {
  await mkdir(path.dirname(item.output), { recursive: true });
  const { width, height, size } = await sharp(item.input)
    .resize({
      width: item.width,
      withoutEnlargement: true,
    })
    .webp({ quality: 82, effort: 6 })
    .toFile(item.output);

  console.log(
    `${item.output} | ${width}x${height} | ${(size / 1024).toFixed(1)} KB`,
  );
}

console.log("Optimasi gambar selesai.");
