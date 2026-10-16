import { stat } from "node:fs/promises";
import sharp from "sharp";

const input = "public/images/jumbotron_bimbel_lps.webp";
const outputs = [
  {
    path: "public/images/jumbotron_bimbel_lps-mobile-optimized.webp",
    width: 800,
  },
  {
    path: "public/images/jumbotron_bimbel_lps-desktop-optimized.webp",
    width: 1400,
  },
];

const original = await stat(input);
console.log(`Original: ${(original.size / 1024).toFixed(1)} KiB`);

for (const item of outputs) {
  const result = await sharp(input)
    .resize({
      width: item.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
      effort: 6,
    })
    .toFile(item.path);

  console.log(
    `${item.path}: ${result.width}x${result.height} - ${(result.size / 1024).toFixed(1)} KiB`,
  );
}
