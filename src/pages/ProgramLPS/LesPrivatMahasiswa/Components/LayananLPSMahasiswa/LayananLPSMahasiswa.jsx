import "./LayananLPSMahasiswa.css";

const mataKuliah = [
  "Les Privat Kalkulus",
  "Les Privat Statistik",
  "Les Privat Statistik Bisnis",
  "Les Privat Matematika Dasar",
  "Les Privat Kimia Dasar",
  "Les Privat Fisika Dasar",
  "Les Privat Kimia Organik",
  "Les Privat Biologi Dasar",
  "Les Privat Aljabar Linier",
  "Les Privat Matematika Teknik",
  "Les Privat Algoritma & Pemrograman",
  "Les Privat Matematika Diskrit",
  "Les Privat Ilmu Biomedik Dasar",
  "Les Privat Matematika Akuntansi",
  "Les Privat Intermediate Accounting",
  "Les Privat Akuntansi Keuangan",
  "Les Privat Matematika Ekonomi",
  "Les Privat Analisis Laporan Keuangan",
  "Les Privat Akuntansi Jasa Dagang",
  "Les Privat Financial Management",
  "Les Privat Pengantar Akuntansi",
  "Les Privat Ekonomi Makro Mikro",
  "Les Privat Economy Managerial & Financial Corporate",
  "Les Privat Managerial Accounting",
  "Les Privat Ekonomi Teknik",
  "Les Privat Manajemen Keuangan",
  "Les Privat Kewirausahaan",
  "Les Privat Mekanika Bahan",
  "Les Privat Derivatif Market",
  "Les Privat Keuangan dan Perbankan",
  "Les Privat Audit dan Perpajakan",
  "Les Privat Ekonometrika",
  "Les Privat Anatomi & Histologi",
  "Les Privat Coding",
  "dan mata kuliah lainnya akan kami upayakan pengajarnya.",
];

const LayananLPSMahasiswa = () => {
  return (
    <section className="container-layanan-lps-mahasiswa">
      <article className="layanan-mahasiswa-glass">
        <span className="layanan-mahasiswa-specular" aria-hidden="true" />

        <span className="layanan-mahasiswa-refraction" aria-hidden="true" />

        <div className="layanan-mahasiswa-header">
          <h2 className="program-title-mahasiswa">
            Program Les Privat Mahasiswa - Belajar Mata Kuliah Sesuai Kebutuhan
          </h2>

          <p className="additional-description-mahasiswa">
            Berdasarkan mata kuliah yang dibutuhkan oleh para siswa Privat yang
            mengambil Program Les Privat Mahasiswa di LPS Education, kami siap
            untuk mendampingi belajar untuk mata kuliah:
          </p>
        </div>

        <ul className="program-simak-ui-list__mahasiswa">
          {mataKuliah.map((item) => (
            <li key={item}>
              <span className="mata-kuliah-check-mahasiswa">✓</span>

              <span className="mata-kuliah-text-mahasiswa">{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default LayananLPSMahasiswa;
