import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  {
    input: "public/images/program/program-LPS-UTBK-SNBT-mobile.webp",
    output: "public/images/program/program-LPS-UTBK-SNBT-mobile-optimized.webp",
    width: 750,
  },
];

for (const image of images) {
  await mkdir(path.dirname(image.output), { recursive: true });

  const original = await sharp(image.input).metadata();

  const result = await sharp(image.input)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: 78,
      effort: 6,
    })
    .toFile(image.output);

  console.log(
    `${path.basename(image.input)}: ${(original.size / 1024).toFixed(1)} KB`,
  );
  console.log(
    `${path.basename(image.output)}: ${(result.size / 1024).toFixed(1)} KB`,
  );
}

console.log("Optimasi hero UTBK selesai.");
