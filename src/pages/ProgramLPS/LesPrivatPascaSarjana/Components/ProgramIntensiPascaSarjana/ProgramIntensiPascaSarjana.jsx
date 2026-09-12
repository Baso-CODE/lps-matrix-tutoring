import "./ProgramIntensiPascaSarjana.css";

const paketJangkaPendek = [
  "Intensif Ujian Masuk Pascasarjana 5 sesi pertemuan",
  "Intensif Ujian Masuk Pascasarjana 10 sesi pertemuan",
  "Intensif Ujian Masuk Pascasarjana 15 sesi pertemuan",
];

const ProgramIntensiPascaSarjana = () => {
  return (
    <section className="program-intensif-pasca-container">
      <article className="program-intensif-pasca-glass">
        <span className="program-intensif-pasca-specular" aria-hidden="true" />

        <span
          className="program-intensif-pasca-refraction"
          aria-hidden="true"
        />

        <header className="program-intensif-pasca-header">
          <h2 className="section-title-cpns__pasca-sarjana">
            Paket Sesi Belajar Intensif Jangka Pendek
          </h2>
        </header>

        <div className="program-intensif-pasca-content">
          <div className="program-intensif-pasca-description-card">
            <p className="section-description__pasca-sarjana">
              Program Privat Intensif Ujian Masuk Pascasarjana Jangka Pendek
              diperuntukkan bagi Anda yang akan mengikuti ujian masuk S2/S3
              dalam waktu dekat sehingga membutuhkan program dengan sesi belajar
              yang lebih intensif dan jumlah sesi yang lebih sedikit. Setiap
              sesi disusun sesuai dengan kebutuhan mahasiswa untuk mendalami
              materi dan tipe soal ujian masuk Pascasarjana dengan pendampingan
              tutor berpengalaman yang siap mendukung di setiap langkah.
            </p>
          </div>

          <div className="program-intensif-pasca-package">
            <p className="section-description-paket__pasca-sarjana">
              Paket Sesi Belajar Jangka Pendek untuk Persiapan Ujian Masuk
              Pascasarjana meliputi:
            </p>

            <ul className="package-list__pasca-sarjana">
              {paketJangkaPendek.map((item) => (
                <li key={item}>
                  <span className="package-check__pasca-sarjana">✓</span>

                  <span className="package-text__pasca-sarjana">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="program-intensif-pasca-info-grid">
            <div className="program-intensif-pasca-info-card">
              <span
                className="program-intensif-pasca-info-specular"
                aria-hidden="true"
              />

              <p className="section-description__pasca-sarjana">
                Selain sesi pembelajaran, mahasiswa akan diberikan latihan soal
                yang terstruktur atau simulasi ujian yang dirancang untuk
                mengenalkan pola soal dan meningkatkan kepercayaan diri.
              </p>
            </div>

            <div className="program-intensif-pasca-info-card">
              <span
                className="program-intensif-pasca-info-specular"
                aria-hidden="true"
              />

              <p className="section-description__pasca-sarjana">
                Laporan perkembangan belajar akan diberikan untuk membantu
                memantau kemajuan dan memberikan masukan untuk peningkatan hasil
                belajar.
              </p>
            </div>

            <div className="program-intensif-pasca-info-card">
              <span
                className="program-intensif-pasca-info-specular"
                aria-hidden="true"
              />

              <p className="section-description__pasca-sarjana">
                Dengan minimal mengambil Paket 10 sesi Pertemuan, siswa akan
                mendapatkan Modul Bahan Belajar TPA S2/S3.
              </p>
            </div>
          </div>
        </div>

        <span
          className="program-intensif-pasca-liquid-orb"
          aria-hidden="true"
        />
      </article>
    </section>
  );
};

export default ProgramIntensiPascaSarjana;
