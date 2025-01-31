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
    {
      title: "Taat Prokes Selama Mengajar",
      description:
        "Demi memastikan keamanan dan kenyamanan seluruh pihak, guru kami senantiasa menerapkan protokol kesehatan ketat selama sesi belajar berlangsung. Dari menggunakan masker hingga menjaga jarak aman, komitmen kami pada kesehatan membantu memberikan lingkungan belajar yang tenang dan aman.",
      image: "/images/pilihan/prokes.webp",
    },
  ];

  return (
    <div className="cara-belajar-container">
      <h1 className="cara-belajar-title">
        Pilih Cara Belajar Offline atau Online?
      </h1>
      <div className="features-list">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
            <img
              src={feature.image}
              alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
              className="feature-image"
            />
            <div className="feature-text">
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaraBelajarOfflineAtauOnline;
