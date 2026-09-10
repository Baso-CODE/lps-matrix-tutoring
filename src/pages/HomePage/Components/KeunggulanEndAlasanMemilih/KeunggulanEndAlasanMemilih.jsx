import "./KeunggulanEndAlasanMemilih.css";

const KeunggulanEndAlasanMemilih = () => {
  const keunggulanItems = [
    "Telah berpengalaman sejak tahun 2010 sebagai lembaga privat dengan sistem manajemen profesional dan terpercaya.",
    "Guru privat di LPS Education berasal dari UI, ITB, UGM, IPB, Undip, UNJ, UIN Jkt, UPI, Unpad dan PTN terbaik lainnya.",
    "Program terlengkap, tersedia berbagai jenis les privat disesuaikan dengan kebutuhan.",
    "Tersedia juga berbagai paket sesi belajar yang bisa dipilih.",
    "Melalui Program Spesialis Persiapan Masuk PTN, setiap tahun ratusan siswa LPS Education berhasil masuk PTN favorit.",
    "Tersedia tiga pilihan program: Les Privat Offline, Les Privat Online, dan Bimbel Karantina.",
    "Program Spesialis Persiapan Masuk PTN di antaranya Les Privat SNBT/UTBK, Simak UI/KKI, dan Ujian Mandiri PTN.",
    "Program Reguler berupa Les Privat SD, SMP, SMA, Mahasiswa, TOEFL/IELTS, CPNS, Akpol, dan Olimpiade.",
    "Area jangkauan layanan les privat meliputi seluruh wilayah Indonesia.",
    "LPS Education telah menerima review Google bintang 5.",
    "Tryout Online progresif untuk siswa program masuk PTN.",
    "Pembimbingan siswa program PTN hingga berhasil masuk PTN.",
    "Bantuan dalam proses pendaftaran ujian masuk PTN seperti UTBK, Simak UI, dan lainnya.",
    "Info terupdate jalur masuk PTN terbaik seperti UI, UGM, ITB, Unpad, dan lainnya.",
    "Program jangka panjang untuk Les Privat SBMPTN/UTBK hingga persiapan ujian mandiri.",
    "Laporan progress perkembangan belajar siswa setiap bulan dikirim kepada wali siswa.",
  ];

  return (
    <section className="container-keunggulan-lps">
      <div className="keunggulan-glass">
        <span className="keunggulan-specular" aria-hidden="true" />

        <h2 className="title">Keunggulan dan Alasan Memilih LPS Education</h2>

        <ul className="keunggulan-list">
          {keunggulanItems.map((item, index) => (
            <li key={index}>
              <span className="keunggulan-bullet" aria-hidden="true">
                ✓
              </span>

              <span className="keunggulan-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeunggulanEndAlasanMemilih;
