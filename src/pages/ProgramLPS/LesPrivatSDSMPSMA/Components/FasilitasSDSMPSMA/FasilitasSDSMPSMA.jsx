import "./FasilitasSDSMPSMA.css";

const fasilitasData = [
  {
    title: "Fasilitas",
    icon: "/images/icon/fasilitas/fasilitas.webp",
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
    icon: "/images/icon/fasilitas/target.webp",
    alt: "Icon Target Belajar",
    items: [
      "Implementasi model belajar yang efektif berdasarkan hasil dari pemetaan kebutuhan dan kemampuan siswa.",
      "Penguasaan strategi belajar untuk memaksimalkan pemahaman dan performa akademik.",
      "Peningkatan kemampuan dalam mengerjakan soal-soal secara cepat, tepat, dan terstruktur.",
      "Siswa siap menghadapi PR, Ulangan Harian, Ujian Tengah dan Akhir Semester, Ujian Kenaikan Kelas, TKA, dan Ujian masuk jenjang berikutnya.",
    ],
    targetItems: [
      "Nilai rapor yang optimal",
      "Masuk ke Sekolah Impian",
      "Meraih Prestasi Akademik yang memuaskan",
    ],
  },
  {
    title: "Scheduling",
    icon: "/images/icon/fasilitas/schedulling.webp",
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

const FasilitasSDSMPSMA = () => {
  return (
    <section className="fasilitas-sd-smp-sma-container">
      <div className="fasilitas-sd-smp-sma-cards">
        {fasilitasData.map((item, index) => (
          <article className="fasilitas-sd-smp-sma-card" key={item.title}>
            <span
              className="fasilitas-sd-smp-sma-card-specular"
              aria-hidden="true"
            />

            <span
              className="fasilitas-sd-smp-sma-card-refraction"
              aria-hidden="true"
            />

            <div className="fasilitas-sd-smp-sma-icon-wrapper">
              <span
                className="fasilitas-sd-smp-sma-icon-specular"
                aria-hidden="true"
              />

              <img
                src={item.icon}
                alt={item.alt}
                className="fasilitas-sd-smp-sma-icon"
                loading="lazy"
              />
            </div>

            <span className="fasilitas-sd-smp-sma-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="fasilitas-sd-smp-sma-title">{item.title}</h2>

            <ul className="fasilitas-sd-smp-sma-list">
              {item.items.map((text) => (
                <li key={text}>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {item.targetItems && (
              <div className="fasilitas-sd-smp-sma-target-box">
                <span
                  className="fasilitas-sd-smp-sma-target-specular"
                  aria-hidden="true"
                />

                <h3 className="fasilitas-sd-smp-sma-target-title">
                  Target Akademik
                </h3>

                <ul className="fasilitas-sd-smp-sma-sub-list">
                  {item.targetItems.map((target) => (
                    <li key={target}>
                      <span
                        className="fasilitas-sd-smp-sma-sub-check"
                        aria-hidden="true">
                        ✓
                      </span>

                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}

        <article className="fasilitas-sd-smp-sma-card">
          <span
            className="fasilitas-sd-smp-sma-card-specular"
            aria-hidden="true"
          />

          <span
            className="fasilitas-sd-smp-sma-card-refraction"
            aria-hidden="true"
          />

          <div className="fasilitas-sd-smp-sma-icon-wrapper">
            <span
              className="fasilitas-sd-smp-sma-icon-specular"
              aria-hidden="true"
            />

            <img
              loading="lazy"
              src="/images/icon/fasilitas/location.webp"
              alt="Icon Lokasi Belajar"
              className="fasilitas-sd-smp-sma-icon"
            />
          </div>

          <span className="fasilitas-sd-smp-sma-index">04</span>

          <h2 className="fasilitas-sd-smp-sma-title">Lokasi Belajar</h2>

          <div className="fasilitas-sd-smp-sma-location-grid">
            <div className="fasilitas-sd-smp-sma-location-card">
              <span
                className="fasilitas-sd-smp-sma-location-specular"
                aria-hidden="true"
              />

              <div className="fasilitas-sd-smp-sma-location-header">
                <span className="fasilitas-sd-smp-sma-location-dot" />

                <h3>Privat Offline</h3>
              </div>

              <ul className="fasilitas-sd-smp-sma-list">
                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>Belajar dengan sistem tatap muka langsung</span>
                </li>

                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>Guru privat datang ke rumah</span>
                </li>

                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                    Bekasi, dan sekitarnya.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fasilitas-sd-smp-sma-location-card">
              <span
                className="fasilitas-sd-smp-sma-location-specular"
                aria-hidden="true"
              />

              <div className="fasilitas-sd-smp-sma-location-header">
                <span className="fasilitas-sd-smp-sma-location-dot" />

                <h3>Privat Online</h3>
              </div>

              <ul className="fasilitas-sd-smp-sma-list">
                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Belajar dengan guru privat secara Online menggunakan Zoom,
                    Google Meet atau aplikasi lain.
                  </span>
                </li>

                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span
                    className="fasilitas-sd-smp-sma-check"
                    aria-hidden="true">
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

export default FasilitasSDSMPSMA;
