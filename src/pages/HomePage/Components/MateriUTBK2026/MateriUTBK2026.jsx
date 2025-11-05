import "./MateriUTBK2026.css";

const MateriUTBK2026 = () => {
  return (
    <div className="container-materi-utbk">
      <h1 className="materi-title">Materi UTBK SNBT 2026</h1>
      {/* Additional Description about Materi UTBK */}
      <p className="materi-overview">
        Materi UTBK SNBT terdiri dari beberapa bagian utama yang dirancang untuk
        mengukur berbagai kemampuan akademis dan kognitif siswa. Melalui Tes
        Potensi Skolastik (TPS) dan Tes Literasi, peserta akan dinilai dalam
        aspek penalaran umum, kemampuan matematika, pemahaman bacaan, serta
        literasi dalam bahasa Indonesia dan bahasa Inggris. Ini semua bertujuan
        untuk memastikan kesiapan siswa menghadapi pendidikan tinggi.
      </p>
      <div className="materi-columns">
        {/* Left Column: Tes Potensi Skolastik (TPS) */}
        <div className="materi-section">
          <h2 className="materi-subtitle">Tes Potensi Skolastik (TPS)</h2>
          <p className="materi-description">
            Apa itu TPS? TPS atau Tes Potensi Skolastik adalah bagian dari UTBK
            yang bertujuan untuk mengukur kemampuan kognitif, termasuk penalaran
            umum, pengetahuan kuantitatif, pemahaman umum, dan kemampuan membaca
            serta menulis.
          </p>
          <ul className="materi-list">
            <li>Penalaran Umum</li>
            <li>Pengetahuan Kuantitatif</li>
            <li>Pengetahuan dan Pemahaman Umum</li>
            <li>Pemahaman Bacaan dan Menulis</li>
          </ul>
        </div>

        {/* Right Column: Tes Literasi */}
        <div className="materi-section">
          <h2 className="materi-subtitle">Tes Literasi</h2>
          <p className="materi-description">
            Apa itu Tes Literasi? Tes Literasi berfokus pada kemampuan literasi
            dalam bahasa Indonesia dan Inggris serta penalaran matematika. Ini
            bertujuan untuk menilai pemahaman bacaan, analisis teks, dan
            pemecahan masalah berbasis logika.
          </p>
          <ul className="materi-list">
            <li>Literasi dalam Bahasa Indonesia</li>
            <li>Literasi dalam Bahasa Inggris</li>
            <li>Penalaran Matematika</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MateriUTBK2026;
