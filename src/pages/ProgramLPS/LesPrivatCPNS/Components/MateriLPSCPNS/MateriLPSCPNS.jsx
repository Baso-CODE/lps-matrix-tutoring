import "./MateriLPSCPNS.css";

const MateriLPSCPNS = () => {
  return (
    <div className="materi-container-cpns">
      <h1 className="materi-title-cpns">
        Materi Ujian SKD CPNS dan Sekolah Kedinasan
      </h1>
      <div className="card-group-cpns">
        <div className="materi-card-cpns">
          <div className="card-icon-cpns">
            <img
              src="/images/icon/cpns/intelegensi.webp"
              alt="Ilustrasi Tes Intelegensi Umum, Menguji Kemampuan Analisis, Logika, Numerik, dan Pemahaman Verbal"
            />
          </div>
          <h2 className="card-title-cpns">Tes Intelegensi Umum (TIU)</h2>
          <p className="card-description-cpns">
            Menguji kemampuan analisis, logika, numerik, serta pemahaman verbal
            untuk mengukur kecerdasan umum.
          </p>
        </div>
        <div className="materi-card-cpns">
          <div className="card-icon-cpns">
            <img
              src="/images/icon/cpns/globe.webp"
              alt="Ilustrasi Tes Wawasan Kebangsaan, Mengukur Pengetahuan Tentang Kebangsaan, Sejarah, dan NKRI"
            />
          </div>
          <h2 className="card-title-cpns">Tes Wawasan Kebangsaan (TWK)</h2>
          <p className="card-description-cpns">
            Mengukur pengetahuan tentang kebangsaan, sejarah, dan kemampuan
            memahami konsep dasar NKRI.
          </p>
        </div>
        <div className="materi-card-cpns">
          <div className="card-icon-cpns">
            <img
              src="/images/icon/cpns/suitcase.webp"
              alt="Ilustrasi Tes Karakteristik Pribadi, Mengukur Sikap, Perilaku, dan Kepribadian untuk Pelayanan Publik"
            />
          </div>
          <h2 className="card-title-cpns">Tes Karakteristik Pribadi (TKP)</h2>
          <p className="card-description-cpns">
            Melihat sikap, perilaku, dan kepribadian yang relevan dengan
            kemampuan pelayanan publik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MateriLPSCPNS;
