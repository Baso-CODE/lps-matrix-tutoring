import "./FasilitasSimakUI.css";

const fasilitasData = [
  {
    title: "Fasilitas",
    image: "/images/icon/fasilitas/fasilitas.webp",
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
    title: "Target Belajar",
    image: "/images/icon/fasilitas/target.webp",
    items: [
      "Implementasi efektif model belajar berdasarkan hasil dari mapping kebutuhan siswa",
      "Penguasaan strategi belajar efektif Simak UI",
      "Peningkatan kemampuan mengerjakan soal secara cepat & tepat",
      "Siswa siap menghadapi Simak UI",
      "Siswa sukses masuk UI sesuai dengan jurusan yang diinginkan",
    ],
  },
  {
    title: "Scheduling",
    image: "/images/icon/fasilitas/schedulling.webp",
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

const FasilitasSimakUI = () => {
  return (
    <section className="fasilitas-simak-ui-container">
      <div className="fasilitas-simak-ui-cards">
        {fasilitasData.map((item, index) => (
          <article key={item.title} className="fasilitas-simak-ui-card">
            <span className="fasilitas-card-specular" aria-hidden="true" />

            <span className="fasilitas-card-refraction" aria-hidden="true" />

            <div className="fasilitas-icon-wrapper">
              <span className="fasilitas-icon-specular" aria-hidden="true" />

              <img
                src={item.image}
                alt={`Icon ${item.title}`}
                className="fasilitas-icon"
                loading="lazy"
              />
            </div>

            <span className="fasilitas-index">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h2 className="fasilitas-title">{item.title}</h2>

            <ul className="fasilitas-list">
              {item.items.map((text) => (
                <li key={text}>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}

        <article className="fasilitas-simak-ui-card">
          <span className="fasilitas-card-specular" aria-hidden="true" />

          <span className="fasilitas-card-refraction" aria-hidden="true" />

          <div className="fasilitas-icon-wrapper">
            <span className="fasilitas-icon-specular" aria-hidden="true" />

            <img
              loading="lazy"
              src="/images/icon/fasilitas/location.webp"
              alt="Icon Lokasi Belajar"
              className="fasilitas-icon"
            />
          </div>

          <span className="fasilitas-index">04</span>

          <h2 className="fasilitas-title">Lokasi Belajar</h2>

          <div className="fasilitas-location-grid">
            <div className="fasilitas-location-box">
              <span
                className="fasilitas-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-location-title">Privat Offline</h3>

              <ul className="fasilitas-list">
                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Belajar dengan sistem tatap muka langsung</span>
                </li>

                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>Guru privat datang ke rumah</span>
                </li>

                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Area jangkauan: Jakarta, Bogor, Depok, Tangerang, Tangsel,
                    Bekasi, dan sekitarnya.
                  </span>
                </li>
              </ul>
            </div>

            <div className="fasilitas-location-box">
              <span
                className="fasilitas-location-specular"
                aria-hidden="true"
              />

              <h3 className="fasilitas-location-title">Privat Online</h3>

              <ul className="fasilitas-list">
                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Belajar dengan guru privat secara Online menggunakan Zoom,
                    Google Meet atau aplikasi lain.
                  </span>
                </li>

                <li>
                  <span className="fasilitas-check" aria-hidden="true">
                    ✓
                  </span>

                  <span>
                    Sistem belajar One on One Tutoring (Privat 1 siswa)
                  </span>
                </li>

                <li>
                  <span className="fasilitas-check" aria-hidden="true">
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

export default FasilitasSimakUI;
