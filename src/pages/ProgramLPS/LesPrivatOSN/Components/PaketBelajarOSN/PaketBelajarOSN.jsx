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
    const finalUrl = `${baseUrl}${message}`;
    window.open(finalUrl, "_blank");
  };

  return (
    <div className="paket-belajar-container__osn">
      <h1 className="title-paket-induk__osn">Paket Belajar OSN ISO IMO </h1>
      <p className="description-paket-belajar__osn">
        Paket Belajar OSN dirancang khusus untuk membantu siswa mempersiapkan
        diri menghadapi kompetisi sains dan matematika, baik tingkat nasional
        seperti OSN (Olimpiade Sains Nasional) maupun internasional seperti ISO
        (International Science Olympiads) dan IMO (International Mathematical
        Olympiad). Setiap paket menawarkan berbagai sesi yang dapat disesuaikan
        sesuai kebutuhan siswa, sehingga fokus dan intensitas belajar dapat
        diatur berdasarkan bidang olimpiade yang diinginkan dan tujuan kompetisi
        yang hendak dicapai. Dengan bimbingan profesional dan kurikulum yang
        mendalam, siswa akan didukung secara optimal dalam mencapai prestasi
        tertinggi.
      </p>

      <div className="paket-cards__osn">
        {packages.map((pkg, index) => (
          <div className="paket-card__osn" key={index}>
            <img
              src={pkg.icon}
              alt="paket belajar program osn"
              className="paket-icon__osn"
            />
            <h2 className="paket-title">{pkg.title}</h2>
            <p className="paket-sesi__osn">{pkg.sessions}</p>
            <button
              className="call-button"
              onClick={() => handleCallNow(pkg.message)}>
              Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaketBelajarOSN;
