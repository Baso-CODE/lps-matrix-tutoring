import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const images = [
  ...[
    "matematilka",
    "fisika",
    "kimia",
    "biologi",
    "pengetahuan-sosial",
    "pengetahuan-alam",
  ].map((name) => ({
    input: `public/images/osn-curiculum/${name}.webp`,
    output: `public/images/osn-curiculum/optimized/${name}.webp`,
    width: 160,
  })),
  ...["silver", "gold", "platinum"].map((name) => ({
    input: `public/images/icon/paket/${name}.webp`,
    output: `public/images/icon/paket/optimized/${name}.webp`,
    width: 128,
  })),
  {
    input: "public/images/slider/desktop-1.webp",
    output: "public/images/slider/desktop-1-optimized.webp",
    width: 1600,
  },
  {
    input: "public/images/slider/desktop-2.webp",
    output: "public/images/slider/desktop-2-optimized.webp",
    width: 1600,
  },
  {
    input: "public/images/slider/desktop-3.webp",
    output: "public/images/slider/desktop-3-optimized.webp",
    width: 1600,
  },
];

for (const item of images) {
  await mkdir(path.dirname(item.output), { recursive: true });

  const original = await sharp(item.input).metadata();
  const result = await sharp(item.input)
    .resize({ width: item.width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(item.output);

  console.log(
    `${path.basename(item.output)}: ` +
      `${(original.size / 1024).toFixed(1)} KB → ` +
      `${(result.size / 1024).toFixed(1)} KB`,
  );
}
