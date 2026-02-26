import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./ProgramBelajarLps.css";

const ProgramBelajarLps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const programsData = [
    {
      id: 0,
      title: "🏠 Privat Offline",
      details: (
        <>
          <p>Berlaku untuk semua jenjang pendidikan dan kebutuhan.</p>
          <ul>
            <li>
              <strong>Les Privat Offline:</strong> Guru privat datang ke rumah.
            </li>
            <li>
              <strong>Area Jangkauan:</strong> Jakarta, Bogor, Depok, Tangerang,
              Tangsel, Bekasi, dan sekitarnya
            </li>
            <li>
              <strong>Jenjang Pendidikan:</strong> Tersedia untuk semua jenjang
              pendidikan mulai dari SD hingga Mahasiswa.
            </li>
            <li>
              <strong>Mata Pelajaran:</strong> Semua mata pelajaran dan
              kebutuhan belajar tingkat SD SMP SMA Mahasiswa, persiapan TKA,
              UTBK SNBT, dan Ujian Mandiri PTN Reguler dan IUP (Kelas
              Internasional), serta Persiapan Tes TOEFL, CPNS, dan Kedinasan.
            </li>
            <li>
              <strong>Kurikulum:</strong> Tersedia untuk semua Kurikulum baik
              Kurikulum Nasional (Kurikulum Merdeka, Kurikulum 2013), Nasional
              Plus, dan Internasional (IB, Cambridge, Singapore), dan lainnya
            </li>
            <li>
              <strong>Jadwal Fleksibel:</strong> Waktu belajar menyesuaikan
              dengan permintaan dan kebutuhan siswa
            </li>
            <li>
              <strong>Konsultasi Awal:</strong> Sesi konsultasi gratis untuk
              mendiskusikan kebutuhan dan tujuan belajar siswa.
            </li>
            <li>
              <strong>Metode Pengajaran:</strong> Pendekatan belajar yang
              interaktif dan menyenangkan, disesuaikan dengan gaya belajar
              siswa.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 1,
      title: "💻 Privat Online",
      details: (
        <>
          <p>Berlaku untuk semua jenjang pendidikan dan kebutuhan.</p>
          <ul>
            <li>
              <strong>Les Privat Online:</strong> Belajar via Zoom/Google Meet
              dengan jadwal yang fleksibel.
            </li>
            <li>
              <strong>Area Jangkauan:</strong> Seluruh wilayah Indonesia,
              memungkinkan pembelajaran dari mana saja.
            </li>
            <li>
              <strong>Preferensi Tutor/Guru:</strong> Preferensi tutor dan
              kriterianya disesuaikan dengan permintaan orangtua/siswa yang
              belajar.
            </li>
            <li>
              <strong>Durasi belajar:</strong> Sesi belajar berdurasi 1,5 - 2
              jam untuk setiap sesinya dan disesuaikan dengan kebutuhan siswa.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "🏕️ Supercamp",
      details: (
        <>
          <p>Program Spesialis Bimbel Karantina Masuk PTN.</p>
          <ul>
            <li>
              <strong>Supercamp:</strong> Program Intensif menginap selama 4
              minggu yang dirancang khusus untuk persiapan UTBK SNBT.
            </li>
            <li>
              <strong>Lokasi & Durasi:</strong>
              <br />
              Lokasi: Depok & Yogyakarta {""}
              <br />
              Durasi: 4 minggu (1 bulan sebelum UTBK).
            </li>
            <li>
              <strong>Pilihan Sistem Pembelajaran:</strong>
              <ul>
                <li>Belajar Kelompok 1 kelas terdiri dari 5–6 siswa</li>
                <li>Belajar Privat One on One Tutoring (1 siswa – 1 guru).</li>
              </ul>
            </li>
            <li>
              <strong>Sistem Belajar:</strong>
              <ul>
                <li>Intensif belajar 5 sesi per hari (Senin–Sabtu)</li>
                <li>
                  Hari Minggu untuk Konsultasi Progress Belajar & siswa bertemu
                  keluarga
                </li>
              </ul>
            </li>
            <li>
              <strong>Fasilitas lengkap:</strong>
              <ul>
                <li>Makan + Snack</li>
                <li>Free Laundry</li>
                <li>Bahan ajar lengkap</li>
                <li>Drilling Latihan Soal</li>
                <li>Tryout Online UTBK setiap minggu</li>
                <li>Monitoring progres belajar mingguan</li>
                <li>Free Biaya Pendaftaran UTBK</li>
                <li>Antar jemput ke Lokasi Ujian UTBK</li>
              </ul>
            </li>
          </ul>
          <p>S&K berlaku</p>
        </>
      ),
    },
  ];

  return (
    <div className="program-belajar-container-v2">
      <h1 className="program-belajar-title-v2">
        Program Belajar LPS Education
      </h1>

      <div className="program-list-v2">
        {programsData.map((program) => {
          const isOpen = activeIndex === program.id;
          const buttonId = `program-button-${program.id}`;
          const panelId = `program-panel-${program.id}`;

          return (
            <div className="program-item-v2" key={program.id}>
              <button
                id={buttonId}
                className="program-title-button-v2"
                onClick={() => handleToggleClick(program.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={`${program.title} ${
                  isOpen ? "ditutup" : "dibuka"
                }`}>
                {program.title}
                <span
                  className={`arrow-v2 ${isOpen ? "open-v2" : ""}`}
                  aria-hidden="true">
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="program-details-v2"
                    initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    {program.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramBelajarLps;
