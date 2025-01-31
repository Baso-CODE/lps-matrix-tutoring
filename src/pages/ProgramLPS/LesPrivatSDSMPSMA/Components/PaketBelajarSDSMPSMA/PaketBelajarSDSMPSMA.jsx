import "./PaketBelajarSDSMPSMA.css";
const PaketBelajarSDSMPSMA = () => {
  const phone = "6285694563970"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Adel%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20tanya%20tentang%20program%20belajar:%0A`;

  const packages = [
    {
      icon: "/images/icon/paket/silver.webp",
      title: "Silver Package",
      sessions: "100 sesi",
      message: `Paket: Silver Package%0ASesi: 100 sesi`,
    },
    {
      icon: "/images/icon/paket/gold.webp",
      title: "Gold Package",
      sessions: "150 sesi",
      message: `Paket: Gold Package%0ASesi: 150 sesi`,
    },
    {
      icon: "/images/icon/paket/platinum.webp",
      title: "Platinum Package",
      sessions: "200 sesi",
      message: `Paket: Platinum Package%0ASesi: 200 sesi`,
    },
  ];
  const handleCallNow = (message) => {
    const finalUrl = `${baseUrl}${message}`;
    window.open(finalUrl, "_blank");
  };
  return (
    <div className="paket-belajar-container__sd_smp_sma">
      <h2 className="title-paket-induk__osn">Paket Belajar LPS SD SMP SMA</h2>
      <p className="description-paket-belajar__osn">
        PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
        dapat memilih komposisi sesi berdasarkan pada prioritas Ujian Masuk PTN
        yang akan diambil. Apakah fokus pada Simak UI saja, atau ada kombinasi
        sesi dengan Ujian lainnya. Program dapat disesuaikan dan Anda dapat
        berkonsultasi lebih detail untuk mendapatkan arahan dan rekomendasi sesi
        terbaik.
      </p>

      <div className="paket-cards__sd_smp_sma">
        {packages.map((pkg, index) => (
          <div className="paket-card__sd_smp_sma" key={index}>
            <img
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
