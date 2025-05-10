import "./PaketLPSMahasiswa.css";

const PaketLPSMahasiswa = () => {
  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Linda%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20tanya%20tentang%20program%20belajar:%0A`;

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
    <div className="paket-belajar-container__osn">
      <h2 className="title-paket-induk__osn">Paket LPS Mahasiswa</h2>
      <p className="description-paket-belajar__osn">
        PAKET didasarkan pada jumlah sesi yang akan diambil oleh siswa. Siswa
        dapat memilih komposisi sesi berdasarkan pada prioritas berapa lama
        siswa ingin belajar. Program dapat disesuaikan dan Anda dapat
        berkonsultasi lebih detail untuk mendapatkan arahan dan rekomendasi sesi
        terbaik.
      </p>

      <div className="paket-cards__osn">
        {packages.map((pkg, index) => (
          <div className="paket-card__sd_smp_sma" key={index}>
            <img
              loading="lazy"
              src={pkg.icon}
              alt={`Icon Paket ${pkg.title} - Menunjukkan jumlah sesi dan komposisi program`}
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

export default PaketLPSMahasiswa;
