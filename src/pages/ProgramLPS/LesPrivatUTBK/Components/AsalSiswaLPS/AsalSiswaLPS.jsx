import "./AsalSiswaLPS.css";

const AsalSiswaLPS = () => {
  const cities = [
    "Jakarta Pusat",
    "Jakarta Utara",
    "Jakarta Selatan",
    "Jakarta Timur",
    "Jakarta Barat",
    "Bogor",
    "Depok",
    "Tangerang",
    "Tangerang Selatan",
    "Bekasi",
    "BSD",
    "Samarinda, Kaltim",
    "Jayapura, Papua",
    "Sorong, Papua Barat",
    "Karawang, Jawa Barat",
    "NTT",
    "Sukabumi, Jawa Barat",
    "Merauke, Papua",
    "Cianjur, Jawa Barat",
    "Bengkulu",
    "Garut, Jawa Barat",
    "Balikpapan, Kaltim",
    "Badung, Bali",
    "Palangka Raya, Kalimantan Tengah",
    "Kebumen, Jawa Tengah",
    "Bandung, Jawa Barat",
    "Medan, Sumatera Utara",
    "Cikarang, Jawa Barat",
    "Palembang, Sumsel",
    "Semarang, Jawa Tengah",
    "Pekanbaru, Riau",
    "Banjarmasin, Kalsel",
    "Pare-pare, Sulsel",
    "Denpasar, Bali",
    "Lombok, NTB",
    "Pontianak, Kalbar",
    "Lampung",
    "Purwakarta, Jawa Barat",
    "Banda Aceh, Aceh",
    "Kutai Timur, Kalteng",
    "Polewali Mandar, Sulbar",
    "Makassar, Sulsel",
    "Buleleng, Bali",
    "Mimika, Papua",
    "Surabaya, Jawa Timur",
    "Padang, Sumatera Barat",
    "Binjai, Sumatera Utara",
    "Bandar Lampung",
    "Batam, Kepulauan Riau",
    "Pangkal Pinang, Kepulauan Bangka Belitung",
    "Sungailiat, Kepulauan Bangka Belitung",
    "Cilegon, Banten",
    "Serang, Banten",
    "Tegal, Jawa Tengah",
    "Kendal, Jawa Tengah",
    "Banjarnegara, Jateng",
    "Magelang, Jawa Tengah",
    "Sleman, DIY",
    "Malang, Jawa Timur",
    "Jombang, Jawa Timur",
    "Magetan, Jawa Timur",
    "Pamekasan, Jawa Timur",
    "Banyuwangi, Jawa Timur",
    "Gianyar, Bali",
    "dan daerah lain",
  ];

  return (
    <div className="asal-siswa-container">
      <h2 className="asal-siswa-title">
        Siswa Kami berasal dari berbagai daerah di Indonesia
      </h2>
      <ul className="asal-siswa-list">
        {cities.map((city, index) => (
          <li key={index} className="asal-siswa-item">
            {city}
          </li>
        ))}
      </ul>
      <p className="asal-siswa-note">
        Les Privat untuk Seluruh Wilayah di Indonesia
      </p>
    </div>
  );
};

export default AsalSiswaLPS;
