import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const BASE_DIR = "public/images/program";

const programs = ["SD", "SMP", "SMA"];

const jobs = programs.flatMap((program) => [
  {
    input: `${BASE_DIR}/program-LPS-${program}.webp`,
    output: `${BASE_DIR}/program-LPS-${program}-desktop-optimized.webp`,
    width: 1280,
    height: 720,
    quality: 80,
  },
  {
    input: `${BASE_DIR}/program-LPS-${program}-mobile.webp`,
    output: `${BASE_DIR}/program-LPS-${program}-mobile-optimized.webp`,
    width: 750,
    height: 750,
    quality: 80,
  },
]);

const formatSize = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;

async function optimizeImage(job) {
  await mkdir(path.dirname(job.output), {
    recursive: true,
  });

  const original = await stat(job.input);

  const metadata = await sharp(job.input).metadata();

  // Mempertahankan rasio asli.
  // Tidak menggunakan crop supaya desain gambar tidak terpotong.
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

  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  console.log(`Optimized dimensions: ${result.width}x${result.height}`);

  console.log(`Original size: ${formatSize(original.size)}`);
  console.log(`Optimized size: ${formatSize(optimized.size)}`);
  console.log(`Saving: ${saving.toFixed(1)}%`);
}

async function main() {
  console.log("OPTIMASI GAMBAR LPS SD SMP SMA");

  for (const job of jobs) {
    await optimizeImage(job);
  }

  console.log("----------------------------------------");
  console.log("Semua gambar berhasil dioptimalkan.");
}

main().catch((error) => {
  console.error("Gagal optimasi gambar:", error);
  process.exitCode = 1;
});
