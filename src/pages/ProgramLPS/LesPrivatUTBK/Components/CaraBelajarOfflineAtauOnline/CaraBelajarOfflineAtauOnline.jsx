import "./CaraBelajarOfflineAtauOnline.css";

const CaraBelajarOfflineAtauOnline = () => {
  const features = [
    {
      title: "Guru Les Privat Datang ke Tempat Anda",
      description:
        "Dengan menghadirkan guru privat langsung ke rumah, pembelajaran dapat berlangsung dengan nyaman dan fokus, meminimalkan gangguan serta mengoptimalkan pengalaman belajar. Anda akan mendapat bimbingan yang lebih personal dan suasana belajar yang mendukung hasil yang lebih baik.",
      image: "/images/pilihan/online.webp",
    },
    {
      title: "Guru Berkualitas dari PTN Favorit",
      description:
        "Pengajar profesional dari perguruan tinggi negeri terbaik, memiliki pengalaman dan keahlian dalam membantu siswa memahami materi secara mendalam dan tepat sasaran. Setiap guru berkomitmen untuk menyediakan metode pembelajaran yang inovatif dan relevan, agar siswa lebih siap menghadapi tantangan akademis.",
      image: "/images/pilihan/toga.webp",
    },
    {
      title: "Jadwal Belajar Fleksibel",
      description:
        "Belajar dengan fleksibilitas penuh, memungkinkan Anda untuk menyesuaikan waktu belajar dengan jadwal pribadi atau aktivitas lainnya. Dengan fleksibilitas ini, siswa dapat belajar dalam kondisi paling nyaman tanpa terbebani waktu, sehingga dapat memaksimalkan proses belajar tanpa tekanan.",
      image: "/images/pilihan/jadwal.webp",
    },
    {
      title: "Progress Perkembangan Belajar dan Tryout Online",
      description:
        "Evaluasi yang dilakukan secara berkala melalui berbagai jenis tes dan tryout online memungkinkan siswa untuk melihat kemajuan belajar mereka. Dengan sistem pemantauan yang detail ini, siswa dapat mengetahui area yang perlu ditingkatkan dan strategi belajar yang perlu disesuaikan.",
      image: "/images/pilihan/proses.webp",
    },
    {
      title: "Program Terfavorit bagi Siswa Persiapan Masuk PTN Favorit",
      description:
        "Dirancang untuk siswa yang ingin sukses di ujian seleksi PTN, program ini menawarkan materi pelajaran yang lengkap dan teknik penyelesaian soal yang efektif. Melalui latihan soal yang intensif dan panduan belajar khusus, siswa akan lebih percaya diri dan siap menghadapi ujian.",
      image: "/images/pilihan/tervaforit.webp",
    },
  ];

  return (
    <section className="cara-belajar-container">
      <div className="cara-belajar-header">
        <span className="cara-belajar-eyebrow">
          <span className="cara-belajar-eyebrow-dot" />
          Metode Belajar
        </span>

        <h2 className="cara-belajar-title">
          Pilih Cara Belajar Offline atau Online?
        </h2>
      </div>

      <div className="features-list">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="feature-item"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <span className="feature-item-specular" aria-hidden="true" />

            <span className="feature-item-refraction" aria-hidden="true" />

            <div className="feature-image-wrapper">
              <span className="feature-image-specular" aria-hidden="true" />

              <img
                loading="lazy"
                src={feature.image}
                alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
                className="feature-image"
              />
            </div>

            <div className="feature-text">
              <span className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="feature-title">{feature.title}</h3>

              <p className="feature-description">{feature.description}</p>
            </div>

            <span className="feature-liquid-orb" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaraBelajarOfflineAtauOnline;
