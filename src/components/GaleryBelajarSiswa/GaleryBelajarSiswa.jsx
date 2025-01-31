/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./GaleryBelajarSiswa.css";

const GaleryBelajarSiswa = () => {
  const [currentMode, setCurrentMode] = useState("offline");
  const [previewImage, setPreviewImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  // Data gambar offline dan online
  const images = {
    offline: [
      "/images/galler-belajar/rumah1.webp",
      "/images/galler-belajar/rumah2.webp",
      "/images/galler-belajar/rumah3.webp",
      "/images/galler-belajar/rumah4.webp",
    ],
    online: [
      "/images/galler-belajar/online1.webp",
      "/images/galler-belajar/online2.webp",
      "/images/galler-belajar/online3.webp",
      "/images/galler-belajar/online4.webp",
    ],
  };

  // Set gambar awal untuk preview dan thumbnails
  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    setPreviewImage(images[mode][0]);
    setThumbnails(images[mode].slice(1));
  };

  // Handle klik gambar kecil
  const handlePreviewChange = (img, index) => {
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = previewImage; // Ganti thumbnail dengan gambar preview sebelumnya
    setPreviewImage(img); // Ganti preview dengan gambar thumbnail yang diklik
    setThumbnails(newThumbnails); // Update thumbnail array
  };

  // Inisialisasi gambar awal
  React.useEffect(() => {
    handleModeChange("offline");
  }, []);

  return (
    <div>
      <div className="gallery_belajar_lps-container">
        <div className="alumni-lps-header">
          <h2>Gallery Belajar Siswa LPS</h2>
        </div>
        <p className="additional-description-about__us">
          Di LPS Matrix, kami percaya bahwa proses belajar yang interaktif dan
          didampingi oleh mentor berkualitas adalah kunci kesuksesan siswa dalam
          meraih impian akademisnya. Melalui galeri ini, kami memperlihatkan
          momen-momen berharga di mana siswa kami terlibat dalam pembelajaran
          yang penuh semangat dan bimbingan intensif dari para tutor terbaik.
          Dengan mentor yang terdiri dari mahasiswa dan alumni UI, ITB, UGM,
          STAN, STIS, serta kampus ternama lainnya, LPS berkomitmen untuk
          menjadi mitra belajar yang mendukung siswa mencapai PTN favorit mereka
          di seluruh Indonesia.
        </p>
      </div>
      <div className="galery-container">
        <div className="button-container">
          <button
            className={`mode-button ${
              currentMode === "offline" ? "active" : ""
            }`}
            onClick={() => handleModeChange("offline")}>
            Offline
          </button>
          <button
            className={`mode-button ${
              currentMode === "online" ? "active" : ""
            }`}
            onClick={() => handleModeChange("online")}>
            Online
          </button>
        </div>

        <div className="gallery-layout">
          <div className="preview">
            <img
              src={previewImage}
              alt={`Gambar utama untuk mode ${currentMode}, menampilkan kegiatan siswa di LPS Matrix yang sedang belajar dengan bimbingan tutor profesional, di mana siswa mendapatkan perhatian penuh untuk memastikan pemahaman maksimal dan kemajuan akademis yang signifikan.`}
            />
          </div>
          <div className="thumbnail-container">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${
                  index + 1
                } yang menunjukkan kegiatan siswa di mode ${currentMode}. Gambar ini menggambarkan suasana pembelajaran di LPS Matrix, baik secara offline maupun online, di mana siswa terlibat aktif dalam pembelajaran bersama mentor dari kampus ternama seperti UI, ITB, dan UGM.`}
                className="thumbnail"
                onClick={() => handlePreviewChange(img, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaleryBelajarSiswa;
