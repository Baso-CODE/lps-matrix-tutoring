import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const jobs = [
  {
    input: "public/images/program/program-LPS-MAHASISWA.webp",
    output:
      "public/images/program/program-LPS-MAHASISWA-desktop-optimized.webp",
    width: 1280,
    height: 720,
    quality: 80,
  },
  {
    input: "public/images/program/program-LPS-MAHASISWA-mobile.webp",
    output: "public/images/program/program-LPS-MAHASISWA-mobile-optimized.webp",
    width: 750,
    height: 750,
    quality: 80,
  },
];

const formatSize = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

for (const job of jobs) {
  await mkdir(path.dirname(job.output), { recursive: true });

  const original = await stat(job.input);
  const originalMetadata = await sharp(job.input).metadata();

  const result = await sharp(job.input)
    .rotate()
    .resize({
      width: job.width,
      height: job.height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: job.quality,
      effort: 6,
    })
    .toFile(job.output);

  const optimized = await stat(job.output);

  const saving = ((original.size - optimized.size) / original.size) * 100;

  console.log("----------------------------------------");
  console.log(`File: ${path.basename(job.output)}`);
  console.log(
    `Original dimensions: ${originalMetadata.width}x${originalMetadata.height}`,
  );
  console.log(`Optimized dimensions: ${result.width}x${result.height}`);
  console.log(`Original size: ${formatSize(original.size)}`);
  console.log(`Optimized size: ${formatSize(optimized.size)}`);
  console.log(`Saving: ${saving.toFixed(1)}%`);
}

console.log("----------------------------------------");
console.log("Optimasi gambar Mahasiswa selesai.");
