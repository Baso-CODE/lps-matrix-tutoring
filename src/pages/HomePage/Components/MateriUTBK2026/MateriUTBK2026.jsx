import "./MateriUTBK2026.css";

const MateriUTBK2026 = () => {
  return (
    <section className="container-materi-utbk">
      <div className="materi-inner">
        <h2 className="materi-title">Materi UTBK SNBT 2026</h2>

        <p className="materi-overview">
          Materi UTBK SNBT terdiri dari beberapa bagian utama yang dirancang
          untuk mengukur berbagai kemampuan akademis dan kognitif siswa. Melalui
          Tes Potensi Skolastik (TPS) dan Tes Literasi, peserta akan dinilai
          dalam aspek penalaran umum, kemampuan matematika, pemahaman bacaan,
          serta literasi dalam bahasa Indonesia dan bahasa Inggris. Ini semua
          bertujuan untuk memastikan kesiapan siswa menghadapi pendidikan
          tinggi.
        </p>

        <div className="materi-columns">
          <article className="materi-section">
            <span className="materi-specular" aria-hidden="true" />

            <h3 className="materi-subtitle">Tes Potensi Skolastik (TPS)</h3>

            <p className="materi-description">
              Apa itu TPS? TPS atau Tes Potensi Skolastik adalah bagian dari
              UTBK yang bertujuan untuk mengukur kemampuan kognitif, termasuk
              penalaran umum, pengetahuan kuantitatif, pemahaman umum, dan
              kemampuan membaca serta menulis.
            </p>

            <ul className="materi-list">
              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Penalaran Umum</span>
              </li>

              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Pengetahuan Kuantitatif</span>
              </li>

              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Pengetahuan dan Pemahaman Umum</span>
              </li>

              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Pemahaman Bacaan dan Menulis</span>
              </li>
            </ul>
          </article>

          <article className="materi-section">
            <span className="materi-specular" aria-hidden="true" />

            <h3 className="materi-subtitle">Tes Literasi</h3>

            <p className="materi-description">
              Apa itu Tes Literasi? Tes Literasi berfokus pada kemampuan
              literasi dalam bahasa Indonesia dan Inggris serta penalaran
              matematika. Ini bertujuan untuk menilai pemahaman bacaan, analisis
              teks, dan pemecahan masalah berbasis logika.
            </p>

            <ul className="materi-list">
              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Literasi dalam Bahasa Indonesia</span>
              </li>

              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Literasi dalam Bahasa Inggris</span>
              </li>

              <li>
                <span className="materi-check" aria-hidden="true">
                  ✓
                </span>
                <span>Penalaran Matematika</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MateriUTBK2026;
