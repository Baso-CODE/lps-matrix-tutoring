import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";

const PaketBelajarPascaSarjana = () => {
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
      <h2 className="title-paket-induk__osn">
        Paket Sesi Belajar Privat Intensif Ujian Masuk Pascasarjana
      </h2>
      <p className="description-paket-belajar__osn">
        Program Privat Intensif Pascasarjana dirancang khusus untuk membimbing
        siswa yang akan mengikuti Ujian Masuk Jenjang Profesi/S2/S3 maupun PPDS.
        Layanan ini mencakup belajar materi dan soal-soal TPA dan Bahasa Inggris
        yang biasanya diujikan pada Ujian Masuk Pascasarjana.
      </p>
      <br />
      <p className="description-paket-belajar__osn">
        Setiap paket sesi belajar menawarkan fleksibilitas sesuai kebutuhan
        individu, memungkinkan intensitas belajar yang sesuai untuk mencapai
        tujuan akademis yang diinginkan. Dengan dukungan tutor berpengalaman dan
        berkompeten, mahasiswa akan mendapatkan bimbingan yang maksimal untuk
        meraih kesuksesan di Ujian Masuk Pascasarjana yang diikuti.
      </p>
      <br />
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
