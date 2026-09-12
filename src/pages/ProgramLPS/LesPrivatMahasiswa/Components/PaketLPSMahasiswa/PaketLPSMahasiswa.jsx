import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketLPSMahasiswa.css";

const PaketLPSMahasiswa = () => {
  const contactData = useAppSelector(selectContactCsData);

  const baseUrl =
    Array.isArray(contactData) && contactData.length > 0
      ? contactData[0]?.link_cta
      : "https://wa.me/6282258689993?text=";

  const packages = [
    {
      icon: "/images/icon/paket/silver.webp",
      title: "Silver Package",
      sessions: "20 sesi",
      message: `Paket: Silver Package%0ASesi: 20 sesi`,
    },
    {
      icon: "/images/icon/paket/gold.webp",
      title: "Gold Package",
      sessions: "40 sesi",
      message: `Paket: Gold Package%0ASesi: 40 sesi`,
    },
    {
      icon: "/images/icon/paket/platinum.webp",
      title: "Platinum Package",
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
    <section className="paket-belajar-container__lps-mahasiswa">
      <div className="paket-belajar-header__lps-mahasiswa">
        <h2 className="title-paket-induk__lps-mahasiswa">
          Paket LPS Education Mahasiswa
        </h2>

        <p className="description-paket-belajar__lps-mahasiswa">
          PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
          dapat memilih komposisi sesi berdasarkan pada prioritas berapa lama
          siswa ingin belajar. Program dapat disesuaikan dan Anda dapat
          berkonsultasi lebih detail untuk mendapatkan arahan dan rekomendasi
          sesi terbaik.
        </p>
      </div>

      <div className="paket-cards__lps-mahasiswa">
        {packages.map((pkg) => (
          <article className="paket-card__lps-mahasiswa" key={pkg.title}>
            <span
              className="paket-card-specular__lps-mahasiswa"
              aria-hidden="true"
            />

            <span
              className="paket-card-refraction__lps-mahasiswa"
              aria-hidden="true"
            />

            <div className="paket-icon-area__lps-mahasiswa">
              <div className="paket-icon-wrapper__lps-mahasiswa">
                <span
                  className="paket-icon-specular__lps-mahasiswa"
                  aria-hidden="true"
                />

                <img
                  loading="lazy"
                  src={pkg.icon}
                  alt={`Icon Paket ${pkg.title} - Menunjukkan jumlah sesi dan komposisi program`}
                  className="paket-icon__lps-mahasiswa"
                />
              </div>
            </div>

            <h3 className="paket-title__lps-mahasiswa">{pkg.title}</h3>

            <div className="paket-session-box__lps-mahasiswa">
              <span className="paket-session-label__lps-mahasiswa">
                Jumlah Pertemuan
              </span>

              <p className="paket-sesi__lps-mahasiswa">{pkg.sessions}</p>
            </div>

            <button
              type="button"
              className="call-button__lps-mahasiswa"
              onClick={() => handleCallNow(pkg.message)}>
              <span
                className="call-button-specular__lps-mahasiswa"
                aria-hidden="true"
              />

              <span className="call-button-text__lps-mahasiswa">
                Konsultasi Sekarang
              </span>

              <span
                className="call-button-orb__lps-mahasiswa"
                aria-hidden="true"
              />
            </button>

            <span
              className="paket-liquid-orb__lps-mahasiswa"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default PaketLPSMahasiswa;
