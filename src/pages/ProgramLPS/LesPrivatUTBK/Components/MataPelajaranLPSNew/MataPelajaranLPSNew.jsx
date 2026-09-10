import "./MataPelajaranLPSNew.css";

const MataPelajaranLPSNew = () => {
  const subjects = [
    "Penalaran Umum",
    "Pengetahuan Kuantitatif",
    "Pengetahuan dan Pemahaman Umum",
    "Pemahaman Bacaan dan Menulis",
    "Literasi Bahasa Indonesia",
    "Literasi Bahasa Inggris",
    "Penalaran Matematika",
    "Tes Potensi Skolastik (TPS)",
    "Tes Potensi Akademik (TPA)",
    "Tes Kemampuan Akademik (TKA)",
    "Bahasa Inggris",
    "Bahasa Indonesia",
    "Biologi",
    "Kimia",
    "Fisika",
    "Matematika IPA",
    "Matematika Dasar (Basic)",
    "Sosiologi",
    "Ekonomi",
    "Sejarah",
    "Geografi",
    "AcEPT",
    "GMST",
    "MMPI",
    "SJT",
    "TOEFL/IELTS",
    "Kalkulus",
    "Akuntansi",
    "Aljabar Linear",
    "Ekonomi Makro",
    "Ekonomi Mikro",
    "Statistika",
    "Coding",
    "Psikotest",
    "Tematik",
    "Calistung",
    "Quantitative Reasoning",
    "Logical Reasoning",
    "dan mata pelajaran lain",
  ];

  const shouldSplitIntoColumns = subjects.length > 10;

  const half = shouldSplitIntoColumns
    ? Math.ceil(subjects.length / 2)
    : subjects.length;

  const firstHalfSubjects = subjects.slice(0, half);

  const secondHalfSubjects = shouldSplitIntoColumns ? subjects.slice(half) : [];

  return (
    <section className="container-needs-indicator-section">
      <div className="mata-pelajaran-header">
        <span className="mata-pelajaran-eyebrow">
          <span className="mata-pelajaran-eyebrow-dot" />
          Mata Pelajaran
        </span>

        <h3 className="indicator-title">
          Berdasarkan mata pelajaran yang dibutuhkan oleh para siswa, LPS
          Education siap untuk mendampingi belajar untuk mata pelajaran:
        </h3>
      </div>

      <div className="needs-indicator-section">
        <span className="needs-indicator-specular" aria-hidden="true" />

        <span className="needs-indicator-refraction" aria-hidden="true" />

        <div
          className={`subject-columns-wrapper ${
            shouldSplitIntoColumns ? "split-columns" : ""
          }`}>
          <ul className="indicator-list">
            {firstHalfSubjects.map((subject, index) => (
              <li key={`first-${index}`}>
                <span className="indicator-check" aria-hidden="true">
                  ✓
                </span>

                <span className="indicator-subject-text">{subject}</span>
              </li>
            ))}
          </ul>

          {shouldSplitIntoColumns && (
            <ul className="indicator-list">
              {secondHalfSubjects.map((subject, index) => (
                <li key={`second-${index}`}>
                  <span className="indicator-check" aria-hidden="true">
                    ✓
                  </span>

                  <span className="indicator-subject-text">{subject}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default MataPelajaranLPSNew;
