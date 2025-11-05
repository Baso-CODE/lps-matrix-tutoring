import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./PaketBelajarSDSMPSMA.css";
const PaketBelajarSDSMPSMA = () => {
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
    <div className="paket-belajar-container__sd_smp_sma">
      <h2 className="title-paket-induk__osn">Paket Sesi Belajar SD SMP SMA</h2>
      <p className="description-paket-belajar__osn">
        PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
        dapat memilih komposisi sesi berdasarkan prioritas kebutuhan belajarnya.
        Apakah fokus pada Akademik Sekolah, atau ada kombinasi sesi dengan
        persiapan Ujian seperti TKA, persiapan masuk Sekolah Unggulan atau PTN
        Impian. Program dapat disesuaikan dan Anda dapat berkonsultasi lebih
        detail untuk mendapatkan arahan dan rekomendasi sesi terbaik.
      </p>
      <br />
      <div className="paket-cards__sd_smp_sma">
        {packages.map((pkg, index) => (
          <div className="paket-card__sd_smp_sma" key={index}>
            <img
              loading="lazy"
              src={pkg.icon}
              alt="paket belajar program osn"
              className="paket-icon"
            />
            <h2 className="paket-title__sd_smp_sma">{pkg.title}</h2>
            <p className="paket-sesi">{pkg.sessions}</p>
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

export default PaketBelajarSDSMPSMA;
