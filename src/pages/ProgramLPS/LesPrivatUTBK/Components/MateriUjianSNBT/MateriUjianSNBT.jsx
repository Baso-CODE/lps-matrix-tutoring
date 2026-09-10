// MateriUjianSNBT.js
import "./MateriUjianSNBT.css";

const materiSNBT = [
  {
    title: "Tes Potensi Skolastik (TPS)",
    description:
      "Tes Potensi Skolastik dirancang untuk mengukur kecerdasan logis, kemampuan analitis, dan pemahaman umum yang dibutuhkan dalam dunia akademik. TPS mencakup kemampuan bernalar, pemecahan masalah, dan keterampilan berpikir kritis yang penting untuk keberhasilan di perguruan tinggi. Dari 7 subtest UTBK, 4 di antaranya yang masuk ke dalam Komponen Tes Potensi Skolastik, yaitu Penalaran Umum, Pengetahuan dan Pemahaman Umum, Pengetahuan Kuantitatif, Pemahaman Bacaan dan Menulis.",
  },
  {
    title: "Penalaran Matematika",
    description:
      "Penalaran Matematika menguji kemampuan siswa dalam memahami konsep numerik dan menerapkannya dalam pemecahan masalah. Tes ini mencakup berbagai topik seperti aljabar, geometri, statistik dasar, serta penalaran kuantitatif yang diperlukan untuk analisis logis dan pengambilan keputusan.",
  },
  {
    title: "Literasi Bahasa Indonesia",
    description:
      "Literasi Bahasa Indonesia berfokus pada kemampuan memahami, menganalisis, dan menginterpretasi bacaan dalam bahasa Indonesia. Bagian ini menguji kemampuan membaca yang kritis, serta pemahaman akan struktur bahasa, kosakata, dan pesan yang disampaikan dalam berbagai teks, baik fiksi maupun nonfiksi.",
  },
  {
    title: "Literasi Bahasa Inggris",
    description:
      "Literasi Bahasa Inggris bertujuan untuk mengukur pemahaman siswa terhadap teks dalam bahasa Inggris. Tes ini meliputi kemampuan menganalisis bacaan, memahami makna tersirat, serta mengenali ide utama dan detail penting dalam teks, sehingga siswa mampu berkomunikasi dan memahami informasi dalam konteks bahasa asing.",
  },
];

const MateriUjianSNBT = () => {
  return (
    <section className="container-materi-snbt">
      <div className="materi-snbt-list">
        {materiSNBT.map((materi, index) => (
          <article className="materi-item" key={materi.title}>
            <span className="materi-item-specular" aria-hidden="true" />

            <span className="materi-item-refraction" aria-hidden="true" />

            <div className="materi-title">
              <span className="materi-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="materi-title-text">{materi.title}</span>
            </div>

            <p className="materi-description">{materi.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MateriUjianSNBT;
