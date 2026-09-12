import "./ApaAjaYgDiPeroleh.css";

const benefits = [
  "Asesmen awal untuk mengukur basic kemampuan siswa",
  "Tersedia pilihan paket sesi belajar mulai dari 20, 40, dan 60 sesi",
  "Tryout Online SKD CPNS yang disesuaikan dengan paket sesi yang diambil",
  "Tersedia dua program, yaitu Les Privat Offline dan Online",
  "Modul Bahan Belajar CPNS Prediktif dan Lengkap",
  "Laporan Progress Belajar dan Evaluasi Berkala",
  "Jadwal Belajar Fleksibel",
  "Komunikasi les dengan admin khusus penjadwalan",
  "Pergantian tutor jika siswa merasa tidak cocok",
];

const ApaAjaYgDiPeroleh = () => {
  return (
    <section className="kemudahan-cpns-container">
      <article className="kemudahan-cpns-glass">
        <span className="kemudahan-cpns-specular" aria-hidden="true" />

        <span className="kemudahan-cpns-refraction" aria-hidden="true" />

        <div className="kemudahan-cpns-header">
          <h2 className="kemudahan-cpns-title">
            Kemudahan yang Diperoleh Siswa LPS Education – Les Privat CPNS
          </h2>
        </div>

        <ul className="kemudahan-cpns-list">
          {benefits.map((item) => (
            <li key={item} className="kemudahan-cpns-item">
              <span
                className="kemudahan-cpns-item-specular"
                aria-hidden="true"
              />

              <span className="kemudahan-cpns-check">✓</span>

              <span className="kemudahan-cpns-text">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default ApaAjaYgDiPeroleh;
