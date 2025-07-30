import { useCallback, useEffect, useState } from "react";
import "./GaleryBelajarSiswa.css";
import { getGalleryBelajarByKet } from "../../api/galleryBelajar/getGalleryBelajarByKet";

const GaleryBelajarSiswa = () => {
  const [currentMode, setCurrentMode] = useState("offline");
  const [previewImage, setPreviewImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  const fetchGalleryData = useCallback(async (keterangan) => {
    try {
      const response = await getGalleryBelajarByKet(keterangan);
      const galleryItems = response.data || [];

      if (galleryItems.length > 0) {
        setPreviewImage(galleryItems[0].link_image);
        setThumbnails(galleryItems.slice(1).map((item) => item.link_image));
      } else {
        setPreviewImage("");
        setThumbnails([]);
      }
    } catch (err) {
      console.error("Error fetching gallery data:", err);
      setPreviewImage("");
      setThumbnails([]);
    }
  }, []);

  useEffect(() => {
    fetchGalleryData(currentMode);
  }, [currentMode, fetchGalleryData]);

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  // Handle klik gambar kecil (thumbnail)
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
    <div>
      <div className="gallery_belajar_lps-container">
        <div className="alumni-lps-header">
          <h2>Gallery Belajar Siswa LPS Education</h2>
        </div>
        <p className="additional-description-about__us">
          Di LPS Education, kami percaya bahwa proses belajar yang interaktif
          dan didampingi oleh mentor berkualitas adalah kunci kesuksesan siswa
          dalam meraih impian akademisnya. Melalui galeri ini, kami
          memperlihatkan momen-momen berharga di mana siswa kami terlibat dalam
          pembelajaran yang penuh semangat dan bimbingan intensif dari para
          tutor terbaik. Dengan mentor yang terdiri dari mahasiswa dan alumni
          UI, ITB, UGM, STAN, STIS, serta kampus ternama lainnya, LPS Education
          berkomitmen untuk menjadi mitra belajar yang mendukung siswa mencapai
          PTN favorit mereka di seluruh Indonesia.
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
              loading="lazy"
              src={previewImage}
              alt={`Gambar utama untuk mode ${currentMode}, menampilkan kegiatan siswa di LPS Education yang sedang belajar dengan bimbingan tutor profesional, di mana siswa mendapatkan perhatian penuh untuk memastikan pemahaman maksimal dan kemajuan akademis yang signifikan.`}
            />
          </div>
          <div className="thumbnail-container">
            {thumbnails.map((img, index) => (
              <img
                loading="lazy"
                key={index}
                src={img}
                alt={`Thumbnail ${
                  index + 1
                } yang menunjukkan kegiatan siswa di mode ${currentMode}. Gambar ini menggambarkan suasana pembelajaran di LPS Education, baik secara offline maupun online, di mana siswa terlibat aktif dalam pembelajaran bersama mentor dari kampus ternama seperti UI, ITB, dan UGM.`}
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
