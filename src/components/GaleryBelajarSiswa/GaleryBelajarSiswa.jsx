/* eslint-disable react/prop-types */
import { useState } from "react";
import "./GaleryBelajarSiswa.css";

const GALLERY_DATA = {
  offline: [
    "/images/gallery-belajar/les-cpns-offline.webp",
    "/images/gallery-belajar/les-cpns-pppk-offline.webp",
    "/images/gallery-belajar/les-utbk-offline-matematika.webp",
    "/images/gallery-belajar/les-utbk-offline.webp",
  ],
  online: [
    "/images/gallery-belajar/les-privat-online-komputer-cpns.webp",
    "/images/gallery-belajar/les-privat-online-osn.webp",
    "/images/gallery-belajar/les-privat-online-sd-smp-sma.webp",
    "/images/gallery-belajar/les-privat-online-utbk.webp",
  ],
};

const GaleryBelajarSiswa = ({ title, description }) => {
  const [currentMode, setCurrentMode] = useState("offline");

  const initialImages = GALLERY_DATA[currentMode] || [];
  const [previewImage, setPreviewImage] = useState(initialImages[0] || "");
  const [thumbnails, setThumbnails] = useState(initialImages.slice(1));

  const handleModeChange = (mode) => {
    setCurrentMode(mode);

    const images = GALLERY_DATA[mode] || [];

    if (images.length > 0) {
      setPreviewImage(images[0]);
      setThumbnails(images.slice(1));
    } else {
      setPreviewImage("");
      setThumbnails([]);
    }
  };

  const handlePreviewChange = (img) => {
    const clickedIndex = thumbnails.findIndex((thumbnail) => thumbnail === img);

    if (clickedIndex !== -1) {
      const newThumbnails = [...thumbnails];

      newThumbnails[clickedIndex] = previewImage;

      setPreviewImage(img);
      setThumbnails(newThumbnails);
    }
  };

  return (
    <section className="gallery-belajar-section">
      <div className="gallery_belajar_lps-container">
        <div className="alumni-lps-header">
          <h2>{title || "Gallery Belajar Siswa LPS Education"}</h2>
        </div>

        <p className="description-gallery-belajar-lps">
          {description ||
            `Di LPS Education, kami percaya bahwa proses belajar yang interaktif
            dan didampingi oleh mentor berkualitas adalah kunci kesuksesan siswa
            dalam meraih capaian dan target belajar. Melalui galeri ini, kami
            memperlihatkan momen-momen berharga di mana siswa kami terlibat dalam
            pembelajaran yang penuh semangat dan bimbingan intensif dari para
            tutor terbaik.`}
        </p>
      </div>

      <div className="galery-container">
        <div className="button-container">
          <button
            type="button"
            className={`mode-button ${
              currentMode === "offline" ? "active" : ""
            }`}
            onClick={() => handleModeChange("offline")}>
            <span className="mode-button-specular" aria-hidden="true" />
            <span className="mode-button-dot offline-dot" aria-hidden="true" />
            <span className="mode-button-text">Offline</span>
          </button>

          <button
            type="button"
            className={`mode-button ${
              currentMode === "online" ? "active" : ""
            }`}
            onClick={() => handleModeChange("online")}>
            <span className="mode-button-specular" aria-hidden="true" />
            <span className="mode-button-dot online-dot" aria-hidden="true" />
            <span className="mode-button-text">Online</span>
          </button>
        </div>

        <div className="gallery-layout">
          <div className="preview-glass">
            <span className="preview-specular" aria-hidden="true" />

            <div className="preview">
              {previewImage && (
                <img
                  loading="lazy"
                  src={previewImage}
                  alt={`Gambar utama untuk mode ${currentMode}, menampilkan kegiatan siswa di LPS Education yang sedang belajar dengan bimbingan tutor profesional, di mana siswa mendapatkan perhatian penuh untuk memastikan pemahaman maksimal dan kemajuan akademis yang signifikan.`}
                />
              )}
            </div>
          </div>

          <div className="thumbnail-container">
            {thumbnails.map((img, index) => (
              <button
                key={`${img}-${index}`}
                type="button"
                className="thumbnail-glass"
                onClick={() => handlePreviewChange(img)}
                aria-label={`Tampilkan gambar ${index + 1}`}>
                <span className="thumbnail-specular" aria-hidden="true" />

                <img
                  loading="lazy"
                  src={img}
                  alt={`Thumbnail ${
                    index + 1
                  } yang menunjukkan kegiatan siswa di mode ${currentMode}. Gambar ini menggambarkan suasana pembelajaran di LPS Education, baik secara offline maupun online, di mana siswa terlibat aktif dalam pembelajaran bersama mentor dari kampus ternama seperti UI, ITB, dan UGM.`}
                  className="thumbnail"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GaleryBelajarSiswa;
