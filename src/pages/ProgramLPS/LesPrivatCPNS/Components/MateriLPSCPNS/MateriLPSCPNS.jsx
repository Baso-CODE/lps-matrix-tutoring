import "./MateriLPSCPNS.css";

const materiCPNS = [
  {
    id: 1,
    icon: "/images/icon/cpns/intelegensi.webp",
    alt: "Ilustrasi Tes Intelegensi Umum, Menguji Kemampuan Analisis, Logika, Numerik, dan Pemahaman Verbal",
    title: "Tes Intelegensi Umum (TIU)",
    description:
      "Menguji kemampuan analisis, logika, numerik, serta pemahaman verbal untuk mengukur kecerdasan umum.",
  },
  {
    id: 2,
    icon: "/images/icon/cpns/globe.webp",
    alt: "Ilustrasi Tes Wawasan Kebangsaan, Mengukur Pengetahuan Tentang Kebangsaan, Sejarah, dan NKRI",
    title: "Tes Wawasan Kebangsaan (TWK)",
    description:
      "Mengukur pengetahuan tentang kebangsaan, sejarah, dan kemampuan memahami konsep dasar NKRI.",
  },
  {
    id: 3,
    icon: "/images/icon/cpns/suitcase.webp",
    alt: "Ilustrasi Tes Karakteristik Pribadi, Mengukur Sikap, Perilaku, dan Kepribadian untuk Pelayanan Publik",
    title: "Tes Karakteristik Pribadi (TKP)",
    description:
      "Melihat sikap, perilaku, dan kepribadian yang relevan dengan kemampuan pelayanan publik.",
  },
];

const MateriLPSCPNS = () => {
  return (
    <section className="materi-container-cpns">
      <div className="materi-header-cpns">
        <span className="materi-eyebrow-cpns">
          <span className="materi-eyebrow-dot-cpns" />
          Materi SKD
        </span>

        <h2 className="materi-title-cpns">
          Materi Ujian SKD CPNS dan Sekolah Kedinasan
        </h2>
      </div>

      <div className="card-group-cpns">
        {materiCPNS.map((materi, index) => (
          <article className="materi-card-cpns" key={materi.id}>
            <span className="materi-card-specular-cpns" aria-hidden="true" />

            <span className="materi-card-refraction-cpns" aria-hidden="true" />

            <div className="card-icon-wrapper-cpns">
              <span className="card-icon-specular-cpns" aria-hidden="true" />

              <div className="card-icon-cpns">
                <img loading="lazy" src={materi.icon} alt={materi.alt} />
              </div>
            </div>

            <span className="materi-number-cpns">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="card-title-cpns">{materi.title}</h3>

            <p className="card-description-cpns">{materi.description}</p>

            <span className="materi-liquid-orb-cpns" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default MateriLPSCPNS;
