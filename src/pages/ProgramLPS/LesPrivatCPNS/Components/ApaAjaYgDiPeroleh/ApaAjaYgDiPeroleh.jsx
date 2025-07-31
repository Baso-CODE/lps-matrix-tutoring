import "./ApaAjaYgDiPeroleh.css";
const ApaAjaYgDiPeroleh = () => {
  return (
    <div className="jadwal-container">
      <h2 className="jadwal-title">
        Kemudahan yang Diperoleh Siswa LPS Education – Les Privat CPNS:
      </h2>
      <ul className="jadwal-list">
        <li>Asesmen awal untuk mengukur basic kemampuan siswa</li>
        <li>
          Tersedia pilihan paket sesi belajar mulai dari 20, 40, dan 60 sesi
        </li>
        <li>
          Tryout Online SKD CPNS yang disesuaikan dengan paket sesi yang diambil
        </li>
        <li>Tersedia dua program, yaitu Les Privat Offline dan Online</li>
        <li>Modul Bahan Belajar CPNS Prediktif dan Lengkap</li>
        {/* <li>Tutoring Daily Report</li> */}
        <li>Laporan Progress Belajar dan Evaluasi Berkala</li>
        <li>Jadwal Belajar Fleksibel</li>
        <li>Komunikasi les dengan admin khusus penjadwalan</li>
        <li>Pergantian tutor jika siswa merasa tidak cocok</li>
      </ul>
    </div>
  );
};

export default ApaAjaYgDiPeroleh;
