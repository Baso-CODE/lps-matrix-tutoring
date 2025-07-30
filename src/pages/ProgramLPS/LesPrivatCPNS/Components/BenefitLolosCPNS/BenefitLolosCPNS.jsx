import { useState } from "react";

const BenefitLolosCPNS = () => {
  const benefits = [
    {
      id: 1,
      title: "Penghasilan Stabil & Menjamin",
      icon: "/images/icon/cpns/benefits/salary.webp", // Ganti dengan path ikon gaji stabil
      description:
        "Nikmati keamanan finansial dengan gaji dan tunjangan yang stabil, menjamin kehidupan Anda di masa depan.",
    },
    {
      id: 2,
      title: "Jaminan Pensiun & Hari Tua",
      icon: "/images/icon/cpns/benefits/pension.webp", // Ganti dengan path ikon pensiun
      description:
        "Masa tua yang tenang dengan jaminan pensiun dan tunjangan hari tua, memberikan ketenangan pikiran bagi Anda dan keluarga.",
    },
    {
      id: 3,
      title: "Kesempatan Pengembangan Karir",
      icon: "/images/icon/cpns/benefits/career-growth.webp", // Ganti dengan path ikon pengembangan karir
      description:
        "Berbagai peluang untuk meningkatkan kompetensi melalui diklat, pelatihan, dan jenjang karir yang jelas di instansi pemerintah.",
    },
    {
      id: 4,
      title: "Asuransi Kesehatan & Jaminan Sosial",
      icon: "/images/icon/cpns/benefits/health.webp", // Ganti dengan path ikon kesehatan
      description:
        "Perlindungan kesehatan lengkap untuk Anda dan keluarga melalui BPJS Kesehatan serta berbagai jaminan sosial lainnya.",
    },
    {
      id: 5,
      title: "Tunjangan Kinerja & Fasilitas",
      icon: "/images/icon/cpns/benefits/allowance.webp", // Ganti dengan path ikon tunjangan
      description:
        "Mendapatkan tunjangan kinerja, tunjangan kemahalan, dan fasilitas lain yang meningkatkan kesejahteraan.",
    },
    {
      id: 6,
      title: "Pengabdian untuk Negeri",
      icon: "/images/icon/cpns/benefits/service.webp", // Ganti dengan path ikon pengabdian
      description:
        "Kesempatan mulia untuk berkontribusi langsung dalam pembangunan negara dan melayani masyarakat Indonesia.",
    },
  ];
  const [hoveredCardId, setHoveredCardId] = useState(null);
  return (
    <section className="osn-curriculum-overview-section">
      <div className="container-general">
        <h2 className="osn-curriculum-overview-title">
          Raih <span>Keuntungan Besar</span> Menjadi PNS!
        </h2>
        <p className="osn-curriculum-overview-subtitle">
          Menjadi Pegawai Negeri Sipil (PNS) bukan sekadar pekerjaan, ini adalah
          karir dengan beragam jaminan dan kesempatan emas. Berikut adalah
          keuntungan yang menanti Anda:
        </p>
        <div className="subjects-grid">
          {benefits.map((subject) => (
            <div
              key={subject.id}
              className={`subject-card ${
                hoveredCardId !== null && hoveredCardId !== subject.id
                  ? "blurred"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCardId(subject.id)} // Atur ID kartu saat kursor masuk
              onMouseLeave={() => setHoveredCardId(null)} // Setel kembali ke null saat kursor keluar
            >
              <div className="subject-icon-wrapper">
                <img src={subject.icon} alt={subject.title} loading="lazy" />
              </div>
              <h3 className="subject-name">{subject.title}</h3>
              <p className="subject-description">{subject.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitLolosCPNS;
