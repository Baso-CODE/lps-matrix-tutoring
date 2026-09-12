import "./FasilitasMahasiswa.css";

const fasilitasMahasiswaData = [
  {
    id: 1,
    title: "Fasilitas",
    icon: "/images/icon/fasilitas/fasilitas.webp",
    items: [
      "Mapping kebutuhan belajar siswa",
      "Kegiatan belajar privat terprogram & intensif",
      "Pengajar yang berkualitas dari UI & PTN Terbaik",
      "Bimbingan dan arahan strategi belajar efektif",
      "Progress report & evaluasi belajar secara berkala",
    ],
  },
  {
    id: 2,
    title: "Target Belajar",
    icon: "/images/icon/fasilitas/target.webp",
    items: [
      "Implementasi model belajar efektif berdasarkan mapping kebutuhan akademik mahasiswa",
      "Penguasaan materi perkuliahan secara mendalam dan terstruktur",
      "Peningkatan kemampuan analisis, berpikir kritis, dan pemecahan masalah sesuai bidang studi",
      "Persiapan optimal menghadapi ujian tengah dan akhir semester",
      "Mahasiswa mampu mencapai IPK yang ditargetkan atau lebih tinggi",
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

const FasilitasMahasiswa = () => {
  return (
    <section className="fasilitas-mahasiswa-container">
      <div className="fasilitas-mahasiswa-cards">
        {fasilitasMahasiswaData.map((item, index) => (
          <article key={item.id} className="fasilitas-mahasiswa-card">
            <span
              className="fasilitas-mahasiswa-card-specular"
              aria-hidden="true"
            />

            <span
              className="fasilitas-mahasiswa-card-refraction"
              aria-hidden="true"
            />

            <div className="fasilitas-mahasiswa-icon-area">
              <div className="fasilitas-mahasiswa-icon-wrapper">
                <span
                  className="fasilitas-mahasiswa-icon-specular"
                  aria-hidden="true"
                />

                <img
                  src={item.icon}
                  alt={`Icon ${item.title}`}
                  className="fasilitas-mahasiswa-icon"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="fasilitas-mahasiswa-heading">
              <span className="fasilitas-mahasiswa-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="fasilitas-mahasiswa-title">{item.title}</h2>
            </div>

            <ul className="fasilitas-mahasiswa-list">
              {item.items.map((listItem) => (
                <li key={listItem}>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span className="fasilitas-mahasiswa-list-text">
                    {listItem}
                  </span>
                </li>
              ))}
            </ul>

            <span
              className="fasilitas-mahasiswa-liquid-orb"
              aria-hidden="true"
            />
          </article>
        ))}

        <article className="fasilitas-mahasiswa-card fasilitas-mahasiswa-location-card">
          <span
            className="fasilitas-mahasiswa-card-specular"
            aria-hidden="true"
          />

          <span
            className="fasilitas-mahasiswa-card-refraction"
            aria-hidden="true"
          />

          <div className="fasilitas-mahasiswa-icon-area">
            <div className="fasilitas-mahasiswa-icon-wrapper">
              <span
                className="fasilitas-mahasiswa-icon-specular"
                aria-hidden="true"
              />

              <img
                loading="lazy"
                src="/images/icon/fasilitas/location.webp"
                alt="Icon Lokasi Belajar"
                className="fasilitas-mahasiswa-icon"
              />
            </div>
          </div>

          <div className="fasilitas-mahasiswa-heading">
            <span className="fasilitas-mahasiswa-index">04</span>

            <h2 className="fasilitas-mahasiswa-title">Lokasi Belajar</h2>
          </div>

          <div className="fasilitas-mahasiswa-location-grid">
            <div className="fasilitas-mahasiswa-location-box">
              <span
                className="fasilitas-mahasiswa-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-mahasiswa-location-title">
                Privat Offline
              </h3>

              <ul className="fasilitas-mahasiswa-location-list">
                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>Belajar dengan sistem tatap muka langsung</span>
                </li>

                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>Guru privat datang ke rumah</span>
                </li>

                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>
                    Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                    Bekasi, dan sekitarnya.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fasilitas-mahasiswa-location-box">
              <span
                className="fasilitas-mahasiswa-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-mahasiswa-location-title">
                Privat Online
              </h3>

              <ul className="fasilitas-mahasiswa-location-list">
                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>
                    Belajar dengan guru privat secara Online menggunakan Zoom,
                    Google Meet atau aplikasi lain.
                  </span>
                </li>

                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-mahasiswa-check">✓</span>

                  <span>
                    Area Jangkauan: seluruh wilayah di Indonesia dan Luar
                    Negeri.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <span className="fasilitas-mahasiswa-liquid-orb" aria-hidden="true" />
        </article>
      </div>
    </section>
  );
};

export default FasilitasMahasiswa;
