import "./AsalUniversitasMahasiswa.css";

const AsalUniversitasMahasiswa = () => {
  const universities = [
    "Universitas Indonesia",
    "Universitas Negeri Jakarta",
    "Universitas Pembangunan Nasional “Veteran” Jakarta",
    "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
    "Institut Pertanian Bogor",
    "Politeknik Negeri Jakarta",
    "Politeknik Negeri Media Kreatif",
    "UNIKA Atma Jaya",
    "BINUS",
    "Universitas Trisakti",
    "Universitas Gunadarma",
    "Universitas Mercu Buana",
    "UMUL",
    "UHAMKA",
    "UPH",
    "Universitas Hasanuddin Makassar",
    "Universitas Negeri Lampung",
    "Universitas Sam Ratulangi",
    "Universitas Islam Negeri Alaudin Makassar",
    "Universitas Muslim Indonesia ",
    "Universitas Negeri Makassar",
    "Universitas Mataram ",
    "Universitas Muhammadiyah Palu ",
    "dan universitas lainnya",
  ];

  return (
    <div className="asal-universitas-container">
      <h1 className="asal-universitas-title">
        Asal Universitas Peserta Les Privat Mahasiswa
      </h1>
      <ul className="asal-universitas-list">
        {universities.map((university, index) => (
          <li key={index} className="asal-universitas-item">
            {university}
          </li>
        ))}
      </ul>
      <p className="asal-universitas-note">
        Layanan Les Privat Online untuk Seluruh Wilayah di Indonesia
      </p>
      <h3 className="program-mahasiswa-title-h3">Bimbel Online Mahasiswa</h3>

      <p className="additional-description-mahasiswa">
        Program{" "}
        <span className="color-d2b04c-description">
          Bimbel Online Mahasiswa by LPS Matrix
        </span>{" "}
        adalah kegiatan les privat yang dilaksanakan secara virtual (online)
        menggunakan Zoom, Skype, Google Meet dan aplikasi lain yang siswa
        miliki. Peserta bimbel online by LPS Matrix tidak hanya berasal dari
        Jabodetabek, tetapi juga dari berbagai kota di Indonesia seperti Padang,
        Aceh, Pekanbaru, Semarang, Bandung, Makasar, Surabaya, Malang, Bali, dan
        daerah lainnya di Indonesia. Meski belajar secara online, pembelajaran
        tetap berjalan secara efektif dan maksimal.
      </p>

      <p className="additional-description-mahasiswa">
        Jadwal belajar siswa bimbel online Mahasiswa disesuaikan dengan
        permintaan siswa les. Jadwal les privat dimulai dari hari Senin – Minggu
        mulai pukul 08.00 WIB dan maksimal malam pukul 21.00 WIB. Dengan jadwal
        fleksibel mengikuti permintaan siswa, maka peserta les yang sibuk dengan
        rutinitasnya tetap bisa belajar dengan menyesuaikan waktu luang yang
        dimiliki. Ayo daftarkan dirimu sekarang juga di Program Les Privat
        Mahasiswa by{" "}
        <span className="color-d2b04c-description">LPS Matrix</span> .
      </p>
    </div>
  );
};

export default AsalUniversitasMahasiswa;
