import { useState } from "react";
import "./BenefitLolosCPNS.css";

const BenefitLolosCPNS = () => {
  const benefits = [
    {
      id: 1,
      title: "Penghasilan Stabil & Menjamin",
      icon: "/images/icon/cpns/benefits/salary.webp",
      description:
        "Nikmati keamanan finansial dengan gaji dan tunjangan yang stabil, menjamin kehidupan Anda di masa depan.",
    },
    {
      id: 2,
      title: "Jaminan Pensiun & Hari Tua",
      icon: "/images/icon/cpns/benefits/pension.webp",
      description:
        "Masa tua yang tenang dengan jaminan pensiun dan tunjangan hari tua, memberikan ketenangan pikiran bagi Anda dan keluarga.",
    },
    {
      id: 3,
      title: "Kesempatan Pengembangan Karir",
      icon: "/images/icon/cpns/benefits/career-growth.webp",
      description:
        "Berbagai peluang untuk meningkatkan kompetensi melalui diklat, pelatihan, dan jenjang karir yang jelas di instansi pemerintah.",
    },
    {
      id: 4,
      title: "Asuransi Kesehatan & Jaminan Sosial",
      icon: "/images/icon/cpns/benefits/health.webp",
      description:
        "Perlindungan kesehatan lengkap untuk Anda dan keluarga melalui BPJS Kesehatan serta berbagai jaminan sosial lainnya.",
    },
    {
      id: 5,
      title: "Tunjangan Kinerja & Fasilitas",
      icon: "/images/icon/cpns/benefits/allowance.webp",
      description:
        "Mendapatkan tunjangan kinerja, tunjangan kemahalan, dan fasilitas lain yang meningkatkan kesejahteraan.",
    },
    {
      id: 6,
      title: "Pengabdian untuk Negeri",
      icon: "/images/icon/cpns/benefits/service.webp",
      description:
        "Kesempatan mulia untuk berkontribusi langsung dalam pembangunan negara dan melayani masyarakat Indonesia.",
    },
  ];

  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="cpns-benefit-section">
      <div className="cpns-benefit-container">
        <div className="cpns-benefit-header">
          <span className="cpns-benefit-eyebrow">
            <span className="cpns-benefit-eyebrow-dot" />
            Benefit Menjadi PNS
          </span>

          <h2 className="cpns-benefit-title">
            Raih <span>Keuntungan Besar</span> Menjadi PNS!
          </h2>

          <p className="cpns-benefit-subtitle">
            Menjadi Pegawai Negeri Sipil (PNS) bukan sekadar pekerjaan, ini
            adalah karir dengan beragam jaminan dan kesempatan emas. Berikut
            adalah keuntungan yang menanti Anda:
          </p>
        </div>

        <div className="cpns-benefit-grid">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.id}
              className={`cpns-benefit-card ${
                hoveredCardId !== null && hoveredCardId !== benefit.id
                  ? "blurred"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCardId(benefit.id)}
              onMouseLeave={() => setHoveredCardId(null)}>
              <span className="cpns-benefit-card-specular" aria-hidden="true" />

              <span
                className="cpns-benefit-card-refraction"
                aria-hidden="true"
              />

              <div className="cpns-benefit-icon-wrapper">
                <span
                  className="cpns-benefit-icon-specular"
                  aria-hidden="true"
                />

                <img src={benefit.icon} alt={benefit.title} loading="lazy" />
              </div>

              <span className="cpns-benefit-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="cpns-benefit-card-title">{benefit.title}</h3>

              <p className="cpns-benefit-card-description">
                {benefit.description}
              </p>

              <span className="cpns-benefit-liquid-orb" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitLolosCPNS;
