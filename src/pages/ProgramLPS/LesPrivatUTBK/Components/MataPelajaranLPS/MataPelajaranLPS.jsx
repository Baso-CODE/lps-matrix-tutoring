import "./MataPelajaranLPS.css";

const MataPelajaranLPS = () => {
  const subjects = [
    "TPS SNBT/UTBK",
    "Matematika",
    "Literasi Bahasa Inggris",
    "Biologi",
    "Kimia",
    "TPA (Psikotes)",
    "Literasi Bahasa Indonesia",
    "Fisika",
    "Sejarah",
    "Sosiologi",
    "Geografi",
    "Ekonomi",
    "Kalkulus",
    "Akuntansi",
    "Tematik",
    "TOEFL/IELTS",
  ];

  return (
    <div className="mata-pelajaran-container">
      <h1 className="mata-pelajaran-title">Pilih Mata Pelajaran Les Privat</h1>
      <ul className="mata-pelajaran-list">
        {subjects.map((subject, index) => (
          <li key={index} className="mata-pelajaran-item">
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MataPelajaranLPS;
