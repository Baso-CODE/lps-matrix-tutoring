import { stat } from "node:fs/promises";
import sharp from "sharp";

const jobs = [
  {
    input: "public/images/program/program-LPS-TKA.webp",
    output: "public/images/program/program-LPS-TKA-desktop-optimized.webp",
    width: 1280,
    height: 720,
    fit: "cover",
    quality: 82,
  },
  {
    input: "public/images/program/program-LPS-TKA-mobile.webp",
    output: "public/images/program/program-LPS-TKA-mobile-optimized.webp",
    width: 750,
    height: 750,
    fit: "cover",
    quality: 82,
  },
  {
    input: "public/images/program/TKA-SUBHERO.webp",
    output: "public/images/program/TKA-SUBHERO-optimized.webp",
    width: 900,
    quality: 80,
  },
];

for (const job of jobs) {
  const before = await stat(job.input);

  let pipeline = sharp(job.input).resize({
    width: job.width,
    height: job.height,
    fit: job.fit || "inside",
    withoutEnlargement: true,
  });

  const result = await pipeline
    .webp({
      quality: job.quality || 80,
      effort: 6,
    })
    .toFile(job.output);

  console.log({
    input: job.input,
    output: job.output,
    beforeKB: `${(before.size / 1024).toFixed(1)} KB`,
    afterKB: `${(result.size / 1024).toFixed(1)} KB`,
    width: result.width,
    height: result.height,
  });
}
