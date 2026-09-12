import "./FasilitasPascaSarjana.css";

const fasilitasPascaData = [
  {
    id: 1,
    title: "Fasilitas",
    icon: "/images/icon/fasilitas/fasilitas.webp",
    items: [
      "Mapping kebutuhan belajar siswa",
      "Kegiatan belajar privat terprogram & intensif",
      "Pengajar yang berkualitas dari UI & PTN Terbaik",
      "Modul Belajar Prediktif",
      "Bimbingan dan arahan strategi belajar efektif",
      "Progress report & evaluasi belajar secara berkala",
    ],
  },
  {
    id: 2,
    title: "Target Belajar",
    icon: "/images/icon/fasilitas/target.webp",
    items: [
      "Implementasi model belajar yang efektif berdasarkan hasil pemetaan kebutuhan siswa",
      "Penguasaan strategi menjawab soal TPA dan Bahasa Inggris sesuai standar Ujian Masuk Pascasarjana",
      "Peningkatan kemampuan berpikir kritis dan analitis dalam waktu yang efisien",
      "Siswa siap menghadapi berbagai jenis ujian masuk Pascasarjana (SIMAK UI, Ujian Mandiri, dll.)",
      "Siswa berhasil lolos Seleksi Masuk Pascasarjana sesuai dengan program studi impian",
    ],
  },
  {
    id: 3,
    title: "Scheduling",
    icon: "/images/icon/fasilitas/schedulling.webp",
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

const FasilitasPascaSarjana = () => {
  return (
    <section className="fasilitas-pasca-container">
      <div className="fasilitas-pasca-cards">
        {fasilitasPascaData.map((item, index) => (
          <article key={item.id} className="fasilitas-pasca-card">
            <span
              className="fasilitas-pasca-card-specular"
              aria-hidden="true"
            />

            <span
              className="fasilitas-pasca-card-refraction"
              aria-hidden="true"
            />

            <div className="fasilitas-pasca-icon-area">
              <div className="fasilitas-pasca-icon-wrapper">
                <span
                  className="fasilitas-pasca-icon-specular"
                  aria-hidden="true"
                />

                <img
                  src={item.icon}
                  alt={`Icon ${item.title}`}
                  className="fasilitas-pasca-icon"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="fasilitas-pasca-heading">
              <span className="fasilitas-pasca-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="fasilitas-pasca-title">{item.title}</h2>
            </div>

            <ul className="fasilitas-pasca-list">
              {item.items.map((listItem) => (
                <li key={listItem}>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span className="fasilitas-pasca-list-text">{listItem}</span>
                </li>
              ))}
            </ul>

            <span className="fasilitas-pasca-liquid-orb" aria-hidden="true" />
          </article>
        ))}

        <article className="fasilitas-pasca-card fasilitas-pasca-location-card">
          <span className="fasilitas-pasca-card-specular" aria-hidden="true" />

          <span
            className="fasilitas-pasca-card-refraction"
            aria-hidden="true"
          />

          <div className="fasilitas-pasca-icon-area">
            <div className="fasilitas-pasca-icon-wrapper">
              <span
                className="fasilitas-pasca-icon-specular"
                aria-hidden="true"
              />

              <img
                loading="lazy"
                src="/images/icon/fasilitas/location.webp"
                alt="Icon Lokasi Belajar"
                className="fasilitas-pasca-icon"
              />
            </div>
          </div>

          <div className="fasilitas-pasca-heading">
            <span className="fasilitas-pasca-index">04</span>

            <h2 className="fasilitas-pasca-title">Lokasi Belajar</h2>
          </div>

          <div className="fasilitas-pasca-location-grid">
            <div className="fasilitas-pasca-location-box">
              <span
                className="fasilitas-pasca-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-pasca-location-title">Privat Offline</h3>

              <ul className="fasilitas-pasca-location-list">
                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>Belajar dengan sistem tatap muka langsung</span>
                </li>

                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>Guru privat datang ke rumah</span>
                </li>

                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>
                    Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                    Bekasi, dan sekitarnya.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fasilitas-pasca-location-box">
              <span
                className="fasilitas-pasca-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-pasca-location-title">Privat Online</h3>

              <ul className="fasilitas-pasca-location-list">
                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>
                    Belajar dengan guru privat secara Online menggunakan Zoom,
                    Google Meet atau aplikasi lain.
                  </span>
                </li>

                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-pasca-check">✓</span>

                  <span>
                    Area Jangkauan: seluruh wilayah di Indonesia dan Luar
                    Negeri.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <span className="fasilitas-pasca-liquid-orb" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
};

export default FasilitasPascaSarjana;
