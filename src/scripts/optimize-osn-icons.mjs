import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = "public/images/icon/fasilitas";
const outputDir = "public/images/icon/fasilitas/optimized";

const files = [
  "fasilitas.webp",
  "target.webp",
  "schedulling.webp",
  "location.webp",
];

await mkdir(outputDir, { recursive: true });

for (const file of files) {
  const input = path.join(sourceDir, file);
  const output = path.join(outputDir, file);

  await sharp(input)
    .resize({
      width: 128,
      height: 128,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80, effort: 6 })
    .toFile(output);

  console.log(`Optimized: ${file}`);
}

console.log("All OSN icons optimized.");
