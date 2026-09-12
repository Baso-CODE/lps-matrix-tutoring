import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarCPNS.css";

const PaketBelajarCPNS = () => {
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
    <section className="paket-belajar-container__cpns">
      <div className="paket-belajar-header__cpns">
        <span className="paket-belajar-eyebrow__cpns">
          <span className="paket-belajar-eyebrow-dot__cpns" />
          Paket Belajar CPNS
        </span>

        <h2 className="title-paket-induk__cpns">
          Pilihan Paket Belajar CPNS Terbaik
        </h2>

        <p className="description-paket-belajar__cpns">
          Paket Belajar CPNS kami dirancang secara komprehensif untuk membantu
          Anda meraih kesuksesan dalam seleksi Calon Pegawai Negeri Sipil
          (CPNS). Setiap paket menawarkan jumlah sesi yang berbeda, disesuaikan
          dengan tingkat persiapan dan kebutuhan belajar Anda. Dengan materi
          terstruktur, latihan soal yang relevan, dan bimbingan dari tenaga
          pengajar berpengalaman, Anda akan dipersiapkan secara optimal untuk
          menghadapi setiap tahapan ujian CPNS. Pilih paket yang paling sesuai
          dengan target dan jadwal belajar Anda untuk memaksimalkan peluang Anda
          menjadi bagian dari Aparatur Sipil Negara.
        </p>
      </div>

      <div className="paket-cards__cpns">
        {packages.map((pkg, index) => (
          <article className="paket-card__cpns" key={pkg.title}>
            <span className="paket-card-specular__cpns" aria-hidden="true" />

            <span className="paket-card-refraction__cpns" aria-hidden="true" />

            <div className="paket-icon-wrapper__cpns">
              <span className="paket-icon-specular__cpns" aria-hidden="true" />

              <img
                loading="lazy"
                src={pkg.icon}
                alt={`${pkg.title} program CPNS`}
                className="paket-icon__cpns"
              />
            </div>

            <span className="paket-number__cpns">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="paket-title__cpns">{pkg.title}</h3>

            <div className="paket-session-box__cpns">
              <span className="paket-session-label__cpns">
                Jumlah Pertemuan
              </span>

              <p className="paket-sesi__cpns">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button__cpns"
              onClick={() => handleCallNow(pkg.message)}>
              <span className="call-button-specular__cpns" aria-hidden="true" />

              <span className="call-button-text__cpns">
                Konsultasi Sekarang
              </span>

              <span className="call-button-orb__cpns" aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarCPNS;
