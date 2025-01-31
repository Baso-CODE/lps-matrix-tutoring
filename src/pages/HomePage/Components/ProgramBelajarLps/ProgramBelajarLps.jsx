import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProgramBelajarLps.css";

const ProgramBelajarLps = () => {
  const [activeIndex, setActiveIndex] = useState([0]);

  const toggleDetails = (index) => {
    setActiveIndex((prevIndex) => {
      // Jika index sudah ada di array, hapus untuk menutupnya
      if (prevIndex.includes(index)) {
        return prevIndex.filter((i) => i !== index);
      }
      // Jika index belum ada, tambahkan untuk membukanya
      return [...prevIndex, index];
    });
  };

  return (
    <div className="program-belajar-container">
      <h1 className="program-belajar-title">Program Belajar LPS</h1>

      <div className="program-list">
        {/* Privat Offline */}
        <div className="program-item">
          <button
            className="program-title-button"
            onClick={() => toggleDetails(0)}>
            🏠 Privat Offline
            <span className={`arrow ${activeIndex.includes(0) ? "open" : ""}`}>
              ▼
            </span>
          </button>
          <AnimatePresence>
            {activeIndex.includes(0) && (
              <motion.div
                className="program-details"
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto" }} // Ganti tinggi sesuai kebutuhan
                exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p>Berlaku untuk semua jenjang pendidikan dan kebutuhan.</p>
                <ul>
                  <li>
                    <strong>Lesprivat Offline:</strong> Guru privat datang ke
                    rumah.
                  </li>
                  <li>
                    <strong>Area Jangkauan:</strong> Jabodetabek dan sekitarnya.
                  </li>
                  <li>
                    <strong>Jenjang Pendidikan:</strong> Tersedia untuk semua
                    tingkat pendidikan, mulai dari TK hingga SMA.
                  </li>
                  <li>
                    <strong>Bidang Studi:</strong> Mata pelajaran lengkap
                    termasuk Matematika, Bahasa Indonesia, Bahasa Inggris, dan
                    Sains.
                  </li>
                  <li>
                    <strong>Jadwal Fleksibel:</strong> Sesi dapat disesuaikan
                    dengan waktu siswa dan guru.
                  </li>
                  <li>
                    <strong>Konsultasi Awal:</strong> Sesi konsultasi gratis
                    untuk mendiskusikan kebutuhan dan tujuan belajar siswa.
                  </li>
                  <li>
                    <strong>Metode Pengajaran:</strong> Pendekatan belajar yang
                    interaktif dan menyenangkan, disesuaikan dengan gaya belajar
                    siswa.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Privat Online */}
        <div className="program-item">
          <button
            className="program-title-button"
            onClick={() => toggleDetails(1)}>
            💻 Privat Online
            <span className={`arrow ${activeIndex.includes(1) ? "open" : ""}`}>
              ▼
            </span>
          </button>
          <AnimatePresence>
            {activeIndex.includes(1) && (
              <motion.div
                className="program-details"
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p>Berlaku untuk semua jenjang pendidikan dan kebutuhan.</p>
                <ul>
                  <li>
                    <strong>Lesprivat Online:</strong> Belajar via Zoom/Google
                    Meet dengan jadwal yang fleksibel.
                  </li>
                  <li>
                    <strong>Area Jangkauan:</strong> Seluruh wilayah Indonesia,
                    memungkinkan pembelajaran dari mana saja.
                  </li>
                  <li>
                    <strong>Fasilitas:</strong> Materi dan soal latihan yang
                    dapat diakses secara digital, serta rekaman sesi untuk
                    referensi belajar ulang.
                  </li>
                  <li>
                    <strong>Pilihan Tutor:</strong> Pilihan tutor sesuai
                    preferensi jenjang pendidikan dan bidang studi.
                  </li>
                  <li>
                    <strong>Durasi Sesi:</strong> Sesi belajar berdurasi 1-2
                    jam, disesuaikan dengan kebutuhan siswa.
                  </li>
                  <li>
                    <strong>Program Tambahan:</strong> Konsultasi akademik
                    mingguan untuk mengevaluasi perkembangan belajar.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Supercamp */}
        <div className="program-item">
          <button
            className="program-title-button"
            onClick={() => toggleDetails(2)}>
            🏕️ Supercamp
            <span className={`arrow ${activeIndex.includes(2) ? "open" : ""}`}>
              ▼
            </span>
          </button>
          <AnimatePresence>
            {activeIndex.includes(2) && (
              <motion.div
                className="program-details"
                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <p>Program Spesialis Bimbel Karantina Masuk PTN.</p>
                <ul>
                  <li>
                    <strong>Supercamp:</strong> Siswa menginap di apartemen.
                  </li>
                  <li>
                    <strong>Sistem Belajar:</strong> One-on-one tutoring.
                  </li>
                  <li>
                    <strong>Waktu Pelaksanaan:</strong> 1 bulan menjelang UTBK.
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProgramBelajarLps;
