import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarSimakUI.css";

const PaketBelajarSimakUI = () => {
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
    <section className="paket-belajar-container">
      <div className="paket-belajar-header">
        <h2 className="title-paket-induk_simak-ui">Paket Belajar SIMAK UI</h2>

        <p className="description-paket-belajar-simak-ui">
          PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
          dapat memilih komposisi sesi berdasarkan pada prioritas Ujian Masuk
          PTN yang akan diambil. Apakah fokus pada Simak UI saja, atau ada
          kombinasi sesi dengan Ujian lainnya. Program dapat disesuaikan dan
          Anda dapat berkonsultasi lebih detail untuk mendapatkan arahan dan
          rekomendasi sesi terbaik.
        </p>
      </div>

      <div className="paket-cards">
        {packages.map((pkg, index) => (
          <article
            className={`paket-card paket-card-${index + 1}`}
            key={pkg.title}>
            <span className="paket-card-specular" aria-hidden="true" />

            <span className="paket-card-refraction" aria-hidden="true" />

            <div className="paket-icon-wrapper">
              <span className="paket-icon-specular" aria-hidden="true" />

              <img
                loading="lazy"
                src={pkg.icon}
                alt={`${pkg.title} SIMAK UI`}
                className="paket-icon"
              />
            </div>

            <span className="paket-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="paket-title">{pkg.title}</h3>

            <div className="paket-sesi-wrapper">
              <span className="paket-sesi-label">Jumlah Pertemuan</span>

              <p className="paket-sesi">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button"
              onClick={() => handleCallNow(pkg.message)}>
              <span className="call-button-specular" aria-hidden="true" />

              <span className="call-button-text">Konsultasi Sekarang</span>

              <span className="call-button-liquid-orb" aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarSimakUI;
