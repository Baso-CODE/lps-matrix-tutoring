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
    const finalUrl = `${baseUrl}${message}`;
    window.open(finalUrl, "_blank");
  };

  return (
    <div className="paket-belajar-container__cpns">
      <h1 className="title-paket-induk__cpns">
        Pilihan Paket Belajar CPNS Terbaik
      </h1>
      <p className="description-paket-belajar__cpns">
        Paket Belajar CPNS kami dirancang secara komprehensif untuk membantu
        Anda meraih kesuksesan dalam seleksi Calon Pegawai Negeri Sipil (CPNS).
        Setiap paket menawarkan jumlah sesi yang berbeda, disesuaikan dengan
        tingkat persiapan dan kebutuhan belajar Anda. Dengan materi terstruktur,
        latihan soal yang relevan, dan bimbingan dari tenaga pengajar
        berpengalaman, Anda akan dipersiapkan secara optimal untuk menghadapi
        setiap tahapan ujian CPNS. Pilih paket yang paling sesuai dengan target
        dan jadwal belajar Anda untuk memaksimalkan peluang Anda menjadi bagian
        dari Aparatur Sipil Negara.
      </p>
      <br />

      <div className="paket-cards__cpns">
        {packages.map((pkg, index) => (
          <div className="paket-card__cpns" key={index}>
            <img
              loading="lazy"
              src={pkg.icon}
              alt="paket belajar program cpns"
              className="paket-icon__cpns"
            />
            <h2 className="paket-title__cpns">{pkg.title}</h2>
            <p className="paket-sesi__cpns">{pkg.sessions}</p>
            <button
              className="call-button__cpns"
              onClick={() => handleCallNow(pkg.message)}>
              Call Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaketBelajarCPNS;
