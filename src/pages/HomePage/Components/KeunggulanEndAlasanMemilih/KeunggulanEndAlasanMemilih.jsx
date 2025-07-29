import "./KeunggulanEndAlasanMemilih.css";

const KeunggulanEndAlasanMemilih = () => {
  const keunggulanItems = [
    "Telah berpengalaman sejak tahun 2010 sebagai lembaga privat dengan sistem manajemen profesional dan terpercaya.",
    "Guru privat di LPS berasal dari UI, ITB, UGM, IPB, Undip, UNJ, UIN Jkt, UPI, Unpad dan PTN terbaik lainnya.",
    "Program terlengkap, tersedia berbagai jenis les privat disesuaikan dengan kebutuhan.",
    "Tersedia juga berbagai paket sesi belajar yang bisa dipilih.",
    "Melalui Program Spesialis Persiapan Masuk PTN, setiap tahun ratusan siswa LPS berhasil masuk PTN favorit.",
    "Tersedia tiga pilihan program: Les Privat Offline, Les Privat Online, dan Bimbel Karantina.",
    "Program Spesialis Persiapan Masuk PTN di antaranya Les Privat SNBT/UTBK, Simak UI/KKI, dan Ujian Mandiri PTN.",
    "Program Reguler berupa Les Privat SD, SMP, SMA, Mahasiswa, TOEFL/IELTS, CPNS, Akpol, dan Olimpiade.",
    "Area jangkauan layanan les privat meliputi seluruh wilayah Indonesia.",
    "LPS telah menerima review Google bintang 5.",
    "Tryout Online progresif untuk siswa program masuk PTN.",
    "Pembimbingan siswa program PTN hingga berhasil masuk PTN.",
    "Bantuan dalam proses pendaftaran ujian masuk PTN seperti UTBK, Simak UI, dan lainnya.",
    "Info terupdate jalur masuk PTN terbaik seperti UI, UGM, ITB, Unpad, dan lainnya.",
    "Program jangka panjang untuk Les Privat SBMPTN/UTBK hingga persiapan ujian mandiri.",
    "Laporan progress perkembangan belajar siswa setiap bulan dikirim kepada wali siswa.",
  ];

  return (
    <div className="container-keunggulan-lps">
      <h1 className="title">Keunggulan dan Alasan Memilih LPS</h1>
      <ul className="keunggulan-list">
        {keunggulanItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeunggulanEndAlasanMemilih;
