import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarOSN.css";

const PaketBelajarOSN = () => {
  const contactData = useAppSelector(selectContactCsData);
  const baseUrl = contactData?.link_cta;

  const packages = [
    {
      icon: "/images/icon/paket/silver.webp",
      title: "Silver Paket",
      sessions: "20 sesi",
      message: `Paket: Silver Package%0ASesi: 20 sesi`,
    },
    {
      icon: "/images/icon/paket/gold.webp",
      title: "Gold Paket",
      sessions: "40 sesi",
      message: `Paket: Gold Package%0ASesi: 40 sesi`,
    },
    {
      icon: "/images/icon/paket/platinum.webp",
      title: "Platinum Paket",
      sessions: "60 sesi",
      message: `Paket: Platinum Package%0ASesi: 60 sesi`,
    },
  ];

  const handleCallNow = (message) => {
    if (!baseUrl) return;

    const finalUrl = `${baseUrl}${message}`;

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="paket-belajar-container__osn">
      <div className="paket-belajar-header__osn">
        <h2 className="title-paket-induk__osn">Paket Belajar OSN ISO IMO</h2>

        <div className="description-wrapper__osn">
          <p className="description-paket-belajar__osn">
            Paket Belajar OSN dirancang khusus untuk membantu siswa
            mempersiapkan diri menghadapi kompetisi sains dan matematika, baik
            tingkat nasional seperti OSN (Olimpiade Sains Nasional) maupun
            internasional seperti ISO (International Science Olympiads), IMO
            (International Mathematical Olympiad) dan SEAMO (South East Asia
            Mathematical Olympiad).
          </p>

          <p className="description-paket-belajar__osn">
            Setiap paket menawarkan berbagai sesi yang dapat disesuaikan sesuai
            kebutuhan siswa, sehingga fokus dan intensitas belajar dapat diatur
            berdasarkan bidang olimpiade yang diinginkan dan tujuan kompetisi
            yang hendak dicapai. Dengan bimbingan profesional dan kurikulum yang
            mendalam, siswa akan didukung secara optimal dalam mencapai prestasi
            tertinggi.
          </p>
        </div>
      </div>

      <div className="paket-cards__osn">
        {packages.map((pkg, index) => (
          <article className="paket-card__osn" key={pkg.title}>
            <span className="paket-card-specular__osn" aria-hidden="true" />

            <span className="paket-card-refraction__osn" aria-hidden="true" />

            <div className="paket-icon-wrapper__osn">
              <span className="paket-icon-specular__osn" aria-hidden="true" />

              <img
                loading="lazy"
                src={pkg.icon}
                alt={`${pkg.title} untuk program OSN`}
                className="paket-icon__osn"
              />
            </div>

            <span className="paket-number__osn">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="paket-title__osn">{pkg.title}</h3>

            <div className="paket-session-box__osn">
              <span className="paket-session-label__osn">Jumlah Pertemuan</span>

              <p className="paket-sesi__osn">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button__osn"
              onClick={() => handleCallNow(pkg.message)}>
              <span className="call-button-specular__osn" aria-hidden="true" />

              <span className="call-button-text__osn">Konsultasi Sekarang</span>

              <span className="call-button-orb__osn" aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarOSN;
