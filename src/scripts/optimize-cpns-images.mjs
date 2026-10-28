import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  {
    input: "public/images/program/program-LPS-CPNS.webp",
    output: "public/images/program/program-LPS-CPNS-desktop-optimized.webp",
    width: 1280,
    quality: 80,
  },
  {
    input: "public/images/program/program-LPS-CPNS-mobile.webp",
    output: "public/images/program/program-LPS-CPNS-mobile-optimized.webp",
    width: 750,
    quality: 80,
  },
];

for (const image of images) {
  await mkdir(path.dirname(image.output), {
    recursive: true,
  });

  const original = await sharp(image.input).metadata();

  const result = await sharp(image.input)
    .rotate()
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(image.output);

  const optimizedFile = await stat(image.output);

  console.log("--------------------------------");

  console.log(`File: ${path.basename(image.output)}`);

  console.log(`Original: ${original.width}x${original.height}`);

  console.log(`Optimized: ${result.width}x${result.height}`);

  console.log(`Before: ${(original.size / 1024).toFixed(1)} KiB`);

  console.log(`After: ${(optimizedFile.size / 1024).toFixed(1)} KiB`);

  console.log(
    `Saving: ${(
      ((original.size - optimizedFile.size) / original.size) *
      100
    ).toFixed(1)}%`,
  );
}

console.log("Optimasi gambar CPNS selesai.");
