const PaketBelajarPascaSarjana = () => {
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
    <div className="paket-belajar-container__osn">
      <h2 className="title-paket-induk__osn">Paket LPS Pasca Sarjana</h2>
      <p className="description-paket-belajar__osn">
        Program LPS Pasca Sarjana dirancang khusus untuk mendukung mahasiswa
        dalam menjalani studi pasca sarjana dengan lebih optimal. Program ini
        mencakup berbagai materi dan sesi yang terstruktur untuk membantu
        mahasiswa mendalami bidang studi pilihan mereka, mengembangkan kemampuan
        riset, dan mempersiapkan diri menghadapi tantangan akademik dan
        profesional di tingkat lanjut. Setiap paket menawarkan fleksibilitas
        sesuai kebutuhan individu, memungkinkan intensitas belajar yang sesuai
        untuk mencapai tujuan akademis yang diinginkan. Dengan dukungan tutor
        berpengalaman dan kurikulum yang komprehensif, mahasiswa akan
        mendapatkan bimbingan yang maksimal untuk meraih kesuksesan di tingkat
        pasca sarjana.
      </p>

      <div className="paket-cards__osn">
        {packages.map((pkg, index) => (
          <div className="paket-card" key={index}>
            <img
              loading="lazy"
              src={pkg.icon}
              alt="paket belajar program osn"
              className="paket-icon"
            />
            <h3 className="paket-title">{pkg.title}</h3>
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

export default PaketBelajarPascaSarjana;
