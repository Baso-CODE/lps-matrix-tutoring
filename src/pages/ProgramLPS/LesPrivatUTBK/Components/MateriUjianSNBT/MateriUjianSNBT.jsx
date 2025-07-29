// MateriUjianSNBT.js
import "./MateriUjianSNBT.css";

const MateriUjianSNBT = () => {
  return (
    <div className="container-materi-snbt">
      {/* <h1 className="main-title">Materi Ujian SNBT</h1> */}

      <div className="materi-item">
        <div className="materi-title">1. Tes Potensi Skolastik (TPS)</div>
        <p className="materi-description">
          Tes Potensi Skolastik dirancang untuk mengukur kecerdasan logis,
          kemampuan analitis, dan pemahaman umum yang dibutuhkan dalam dunia
          akademik. TPS mencakup kemampuan bernalar, pemecahan masalah, dan
          keterampilan berpikir kritis yang penting untuk keberhasilan di
          perguruan tinggi.
        </p>
      </div>

      <div className="materi-item">
        <div className="materi-title">2. Penalaran Matematika</div>
        <p className="materi-description">
          Penalaran Matematika menguji kemampuan siswa dalam memahami konsep
          numerik dan menerapkannya dalam pemecahan masalah. Tes ini mencakup
          berbagai topik seperti aljabar, geometri, statistik dasar, serta
          penalaran kuantitatif yang diperlukan untuk analisis logis dan
          pengambilan keputusan.
        </p>
      </div>

      <div className="materi-item">
        <div className="materi-title">3. Literasi Bahasa Indonesia</div>
        <p className="materi-description">
          Literasi Bahasa Indonesia berfokus pada kemampuan memahami,
          menganalisis, dan menginterpretasi bacaan dalam bahasa Indonesia.
          Bagian ini menguji kemampuan membaca yang kritis, serta pemahaman akan
          struktur bahasa, kosakata, dan pesan yang disampaikan dalam berbagai
          teks, baik fiksi maupun nonfiksi.
        </p>
      </div>

      <div className="materi-item">
        <div className="materi-title">4. Literasi Bahasa Inggris</div>
        <p className="materi-description">
          Literasi Bahasa Inggris bertujuan untuk mengukur pemahaman siswa
          terhadap teks dalam bahasa Inggris. Tes ini meliputi kemampuan
          menganalisis bacaan, memahami makna tersirat, serta mengenali ide
          utama dan detail penting dalam teks, sehingga siswa mampu
          berkomunikasi dan memahami informasi dalam konteks bahasa asing.
        </p>
      </div>
    </div>
  );
};

export default MateriUjianSNBT;
