import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarSDSMPSMA.css";

const PaketBelajarSDSMPSMA = () => {
  const contactData = useAppSelector(selectContactCsData);

  const baseUrl =
    Array.isArray(contactData) && contactData.length > 0
      ? contactData[0]?.link_cta
      : "https://wa.me/6282258689993?text=";

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
    <section className="paket-belajar-container__sd_smp_sma">
      <div className="paket-belajar-header__sd_smp_sma">
        <h2 className="title-paket-induk__sd_smp_sma">
          Paket Sesi Belajar SD SMP SMA
        </h2>

        <p className="description-paket-belajar__sd_smp_sma">
          PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
          dapat memilih komposisi sesi berdasarkan prioritas kebutuhan
          belajarnya. Apakah fokus pada Akademik Sekolah, atau ada kombinasi
          sesi dengan persiapan Ujian seperti TKA, persiapan masuk Sekolah
          Unggulan atau PTN Impian. Program dapat disesuaikan dan Anda dapat
          berkonsultasi lebih detail untuk mendapatkan arahan dan rekomendasi
          sesi terbaik.
        </p>
      </div>

      <div className="paket-cards__sd_smp_sma">
        {packages.map((pkg, index) => (
          <article className="paket-card__sd_smp_sma" key={pkg.title}>
            <span
              className="paket-card-specular__sd_smp_sma"
              aria-hidden="true"
            />

            <span
              className="paket-card-refraction__sd_smp_sma"
              aria-hidden="true"
            />

            <div className="paket-icon-wrapper__sd_smp_sma">
              <span
                className="paket-icon-specular__sd_smp_sma"
                aria-hidden="true"
              />

              <img
                loading="lazy"
                src={pkg.icon}
                alt={`${pkg.title} SD SMP SMA`}
                className="paket-icon__sd_smp_sma"
              />
            </div>

            <span className="paket-number__sd_smp_sma">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="paket-title__sd_smp_sma">{pkg.title}</h3>

            <div className="paket-session-box__sd_smp_sma">
              <span className="paket-session-label__sd_smp_sma">
                Jumlah Pertemuan
              </span>

              <p className="paket-sesi__sd_smp_sma">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button__sd_smp_sma"
              onClick={() => handleCallNow(pkg.message)}>
              <span
                className="call-button-specular__sd_smp_sma"
                aria-hidden="true"
              />

              <span className="call-button-text__sd_smp_sma">
                Konsultasi Sekarang
              </span>

              <span
                className="call-button-orb__sd_smp_sma"
                aria-hidden="true"
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarSDSMPSMA;
