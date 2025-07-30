import "./OsnWinnerBenefits.css";

const OsnWinnerBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Jalur Khusus Masuk PTN",
      icon: "/images/benefit-osn/university.webp", // Ganti dengan path ikon universitas
      description:
        "Kesempatan diterima di Perguruan Tinggi Negeri (PTN) favorit melalui jalur prestasi olimpiade tanpa tes yang ketat.",
    },

    {
      id: 2,
      title: "Jaringan Intelektual Luas",
      icon: "/images/benefit-osn/networking.webp", // Ganti dengan path ikon networking
      description:
        "Bertemu dan berinteraksi dengan siswa-siswa cerdas, guru, dan ilmuwan terkemuka dari seluruh Indonesia.",
    },

    {
      id: 3,
      title: "Pengembangan Berpikir Kritis",
      icon: "/images/benefit-osn/critical-thinking.webp", // Ganti dengan path ikon berpikir kritis
      description:
        "Mengasah kemampuan analisis, pemecahan masalah kompleks, dan berpikir logis yang sangat berharga di masa depan.",
    },
    {
      id: 4,
      title: "Pengakuan Nasional & Internasional",
      icon: "/images/benefit-osn/recognition.webp", // Ganti dengan path ikon pengakuan
      description:
        "Mendapatkan pengakuan dan apresiasi dari pemerintah, institusi pendidikan, dan komunitas ilmiah di tingkat nasional bahkan internasional.",
    },
    {
      id: 5,
      title: "Peluang Beasiswa Eksklusif",
      icon: "/images/benefit-osn/scholarship.webp", // Ganti dengan path ikon beasiswa
      description:
        "Akses ke berbagai beasiswa bergengsi untuk melanjutkan pendidikan tinggi di universitas terbaik, baik di dalam maupun luar negeri.",
    },

    {
      id: 6,
      title: "Portofolio Akademik Gemilang",
      icon: "/images/benefit-osn/portfolio.webp", // Ganti dengan path ikon portofolio
      description:
        "Menambah nilai luar biasa pada portofolio akademik Anda, membuka pintu untuk berbagai kesempatan di masa depan.",
    },
  ];

  return (
    <section className="osn-winner-benefits-section">
      <div className="container-general">
        <h2 className="osn-winner-benefits-title">
          Raih <span>Manfaat Luar Biasa</span> Menjadi Juara OSN!
        </h2>
        <p className="osn-winner-benefits-subtitle">
          Kemenangan di Olimpiade Sains Nasional bukan hanya tentang medali,
          tapi juga investasi masa depan Anda. Berikut adalah keuntungan yang
          menanti para juara:
        </p>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon-wrapper">
                <img src={benefit.icon} alt={benefit.title} loading="lazy" />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OsnWinnerBenefits;
