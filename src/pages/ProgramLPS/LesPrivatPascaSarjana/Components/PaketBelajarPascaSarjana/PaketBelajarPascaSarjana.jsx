import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarPascaSarjana.css";

const PaketBelajarPascaSarjana = () => {
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
    <section className="paket-belajar-container__pasca-sarjana">
      <div className="paket-belajar-header__pasca-sarjana">
        <h2 className="title-paket-induk__pasca-sarjana">
          Paket Sesi Belajar Privat Intensif Ujian Masuk Pascasarjana
        </h2>

        <div className="description-wrapper__pasca-sarjana">
          <p className="description-paket-belajar__pasca-sarjana">
            Program Privat Intensif Pascasarjana dirancang khusus untuk
            membimbing siswa yang akan mengikuti Ujian Masuk Jenjang
            Profesi/S2/S3 maupun PPDS. Layanan ini mencakup belajar materi dan
            soal-soal TPA dan Bahasa Inggris yang biasanya diujikan pada Ujian
            Masuk Pascasarjana.
          </p>

          <p className="description-paket-belajar__pasca-sarjana">
            Setiap paket sesi belajar menawarkan fleksibilitas sesuai kebutuhan
            individu, memungkinkan intensitas belajar yang sesuai untuk mencapai
            tujuan akademis yang diinginkan. Dengan dukungan tutor berpengalaman
            dan berkompeten, mahasiswa akan mendapatkan bimbingan yang maksimal
            untuk meraih kesuksesan di Ujian Masuk Pascasarjana yang diikuti.
          </p>
        </div>
      </div>

      <div className="paket-cards__pasca-sarjana">
        {packages.map((pkg) => (
          <article className="paket-card__pasca-sarjana" key={pkg.title}>
            <span
              className="paket-card-specular__pasca-sarjana"
              aria-hidden="true"
            />

            <span
              className="paket-card-refraction__pasca-sarjana"
              aria-hidden="true"
            />

            <div className="paket-icon-area__pasca-sarjana">
              <div className="paket-icon-wrapper__pasca-sarjana">
                <span
                  className="paket-icon-specular__pasca-sarjana"
                  aria-hidden="true"
                />

                <img
                  loading="lazy"
                  src={pkg.icon}
                  alt={`Paket belajar ${pkg.title} program Pascasarjana`}
                  className="paket-icon__pasca-sarjana"
                />
              </div>
            </div>

            <h3 className="paket-title__pasca-sarjana">{pkg.title}</h3>

            <div className="paket-session-box__pasca-sarjana">
              <span className="paket-session-label__pasca-sarjana">
                Jumlah Pertemuan
              </span>

              <p className="paket-sesi__pasca-sarjana">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button__pasca-sarjana"
              onClick={() => handleCallNow(pkg.message)}>
              <span
                className="call-button-specular__pasca-sarjana"
                aria-hidden="true"
              />

              <span className="call-button-text__pasca-sarjana">
                Konsultasi Sekarang
              </span>

              <span
                className="call-button-orb__pasca-sarjana"
                aria-hidden="true"
              />
            </button>

            <span
              className="paket-liquid-orb__pasca-sarjana"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketBelajarPascaSarjana;
