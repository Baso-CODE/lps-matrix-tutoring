import "./FasilitasOSN.css";

const fasilitasOSNData = [
  {
    title: "Fasilitas",
    icon: "/images/icon/fasilitas/optimized/fasilitas.webp",
    alt: "Icon Fasilitas",
    items: [
      "Mapping kebutuhan belajar siswa",
      "Kegiatan belajar privat terprogram & intensif",
      "Pengajar yang berkualitas dari UI & PTN Terbaik",
      "Bimbingan dan arahan strategi belajar efektif",
      "Progress report & evaluasi belajar secara berkala",
    ],
  },
  {
    title: "Target Belajar",
    icon: "/images/icon/fasilitas/optimized/target.webp",
    alt: "Icon Target Belajar",
    items: [
      "Implementasi efektif model belajar berdasarkan hasil dari mapping kebutuhan siswa",
      "Penguasaan materi-materi Olimpiade tingkat nasional dan internasional secara sistematis dan mendalam",
      "Peningkatan keterampilan berpikir kritis, logis, dan kreatif dalam menyelesaikan soal-soal kompleks",
      "Strategi penyelesaian soal cepat dan tepat untuk kompetisi OSN, IMO, ISO, dan SEAMO",
      "Siswa siap berkompetisi dengan percaya diri di ajang Olimpiade nasional maupun internasional",
      "Siswa meraih prestasi unggul dan membawa nama baik sekolah dan Indonesia di kancah global",
    ],
  },
  {
    title: "Scheduling",
    icon: "/images/icon/fasilitas/optimized/schedulling.webp",
    alt: "Icon Scheduling",
    items: [
      "Penjadwalan dihandle langsung oleh admin Scheduling.",
      "Jadwal belajar dapat disesuaikan dengan ketersediaan waktu siswa.",
      "Perubahan atau cancel jadwal bisa langsung dikomunikasikan dengan admin Scheduling.",
      "Durasi belajar setiap sesinya adalah 1,5 - 2 jam.",
      "Frekuensi belajar (jumlah sesi pertemuan) dapat direncanakan bersama.",
      "Pergantian guru jika merasa kurang cocok bisa dikomunikasikan dengan admin Scheduling.",
      "Fokus kami: efektivitas kegiatan belajar dan ketercapaian target belajar.",
    ],
  },
];

const FasilitasOSN = () => {
  return (
    <section className="fasilitas-osn-container">
      <div className="fasilitas-osn-cards">
        {fasilitasOSNData.map((item, index) => (
          <article className="fasilitas-osn-card" key={item.title}>
            <span className="fasilitas-osn-card-specular" aria-hidden="true" />

            <span
              className="fasilitas-osn-card-refraction"
              aria-hidden="true"
            />

            <div className="fasilitas-osn-icon-wrapper">
              <span
                className="fasilitas-osn-icon-specular"
                aria-hidden="true"
              />

              <img
                src={item.icon}
                alt={item.alt}
                className="fasilitas-osn-icon"
                loading="lazy"
                decoding="async"
              />
            </div>

            <span className="fasilitas-osn-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="fasilitas-osn-title">{item.title}</h2>

            <ul className="fasilitas-osn-list">
              {item.items.map((text) => (
                <li key={text}>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="fasilitas-osn-card">
          <span className="fasilitas-osn-card-specular" aria-hidden="true" />

          <span className="fasilitas-osn-card-refraction" aria-hidden="true" />

          <div className="fasilitas-osn-icon-wrapper">
            <span className="fasilitas-osn-icon-specular" aria-hidden="true" />

            <img
              loading="lazy"
              src="/images/icon/fasilitas/optimized/location.webp"
              alt="Icon Lokasi Belajar"
              className="fasilitas-osn-icon"
              decoding="async"
            />
          </div>

          <span className="fasilitas-osn-index">04</span>

          <h2 className="fasilitas-osn-title">Lokasi Belajar</h2>

          <div className="fasilitas-osn-location-grid">
            <div className="fasilitas-osn-location-card">
              <span
                className="fasilitas-osn-location-specular"
                aria-hidden="true"
              />

              <div className="fasilitas-osn-location-header">
                <span className="fasilitas-osn-location-dot" />

                <h3>Privat Offline</h3>
              </div>

              <ul className="fasilitas-osn-list">
                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Belajar dengan sistem tatap muka langsung</span>
                </li>

                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Guru privat datang ke rumah</span>
                </li>

                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                    Bekasi, dan sekitarnya.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fasilitas-osn-location-card">
              <span
                className="fasilitas-osn-location-specular"
                aria-hidden="true"
              />

              <div className="fasilitas-osn-location-header">
                <span className="fasilitas-osn-location-dot" />

                <h3>Privat Online</h3>
              </div>

              <ul className="fasilitas-osn-list">
                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Belajar dengan guru privat secara Online menggunakan Zoom,
                    Google Meet atau aplikasi lain.
                  </span>
                </li>

                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-osn-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Area Jangkauan: seluruh wilayah di Indonesia dan Luar
                    Negeri.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FasilitasOSN;
