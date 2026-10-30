import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const jobs = [
  {
    input: "public/images/program/program-LPS-SIMAK-UI-KKI.webp",
    output:
      "public/images/program/program-LPS-SIMAK-UI-KKI-desktop-optimized.webp",
    width: 1280,
    quality: 80,
  },
  {
    input: "public/images/program/program-LPS-SIMAK-UI-KKI-mobile.webp",
    output:
      "public/images/program/program-LPS-SIMAK-UI-KKI-mobile-optimized.webp",
    width: 750,
    quality: 80,
  },
];

for (const job of jobs) {
  await mkdir(path.dirname(job.output), {
    recursive: true,
  });

  const originalFile = await stat(job.input);

  const result = await sharp(job.input)
    .rotate()
    .resize({
      width: job.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: job.quality,
      effort: 6,
    })
    .toFile(job.output);

  const optimizedFile = await stat(job.output);

  const saving =
    ((originalFile.size - optimizedFile.size) / originalFile.size) * 100;

  console.log("--------------------------------");

  console.log(`File: ${path.basename(job.output)}`);

  console.log(`Dimensions: ${result.width}x${result.height}`);

  console.log(`Original: ${(originalFile.size / 1024).toFixed(1)} KiB`);

  console.log(`Optimized: ${(optimizedFile.size / 1024).toFixed(1)} KiB`);

  console.log(`Saving: ${saving.toFixed(1)}%`);
}

console.log("Optimasi SIMAK UI & KKI selesai.");
