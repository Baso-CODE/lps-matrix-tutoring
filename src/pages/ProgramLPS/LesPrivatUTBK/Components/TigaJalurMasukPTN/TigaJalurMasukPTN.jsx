// TigaJalurMasukPTN.js
import "./TigaJalurMasukPTN.css";

const jalurMasukPTN = [
  {
    title: "SNBP",
    description:
      "Seleksi Nasional Berdasarkan Prestasi (SNBP) adalah jalur penerimaan mahasiswa baru yang didasarkan pada prestasi akademik dan non-akademik. Jalur ini sangat cocok bagi siswa yang memiliki nilai tinggi dan prestasi lain selama sekolah. Selain itu, mulai tahun 2026, TKA (Tes Kemampuan Akademik) akan menjadi Instrumen Tambahan untuk Penilaian SNBP.",
  },
  {
    title: "SNBT",
    description:
      "Seleksi Nasional Berdasarkan Tes (SNBT) adalah jalur penerimaan melalui ujian tertulis. Jalur ini mengujikan 2 komponen besar, yaitu Tes Potensi Sekolastik dan Tes Literasi yang dibagi ke dalam 7 subtes UTBK.",
  },
  {
    title: "Seleksi Mandiri",
    description:
      "Seleksi Mandiri adalah jalur penerimaan mahasiswa baru yang diadakan oleh masing-masing PTN. Kriteria dan prosedurnya ditentukan langsung oleh universitas, sehingga siswa harus memenuhi persyaratan khusus dari kampus yang dituju.",
  },
];

const TigaJalurMasukPTN = () => {
  return (
    <section className="container-tiga-jalur">
      <div className="tiga-jalur-header">
        <span className="tiga-jalur-eyebrow">
          <span className="tiga-jalur-eyebrow-dot" />
          Jalur Masuk PTN
        </span>

        <h2 className="title-tiga-jalur">
          Tiga Jalur Masuk Universitas Negeri (PTN)
        </h2>
      </div>

      <div className="card-container-tiga-jalur">
        {jalurMasukPTN.map((item, index) => (
          <article className="card-tiga-jalur" key={item.title}>
            <span className="card-tiga-jalur-specular" aria-hidden="true" />

            <div className="card-tiga-jalur-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="card-tiga-jalur-content">
              <h3 className="card-title-tiga-jalur">{item.title}</h3>

              <p className="card-description-tiga-jalur">{item.description}</p>
            </div>

            <span className="card-tiga-jalur-liquid-orb" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="tiga-jalur-additional-content">
        <p className="additional-description">
          <span className="color-d2b04c-description">LPS Education</span> adalah
          Lembaga Penyedia Jasa Guru Les Privat Profesional dan Bimbingan
          Belajar yang berdiri sejak tahun 2010 serta telah memiliki ribuan
          siswa dari berbagai wilayah di Indonesia seperti Jakarta, Bogor,
          Depok, Tangerang, Tangsel, Bekasi, BSD, Bandung, Semarang, Yogyakarta,
          Surabaya, Denpasar, Serang, Banda Aceh, Medan, Palembang, Padang,
          Bengkulu, Pekanbaru, Tanjung Pinang, Jambi, Bandar Lampung, Pangkal
          Pinang, Pontianak, Samarinda, Banjarmasin, Palangkaraya, Tanjung
          Selor, Kupang, Mataram, Gorontalo, Mamuju, Palu, Manado, Kendari,
          Makasar, Ternate, Ambon, Manokwari, Jayapura dan daerah lain.
        </p>

        <p className="additional-description">
          Selain Program{" "}
          <span className="color-d2b04c-description">Les Privat SNBT</span> dan
          Ujian Masuk PTN lainnya, LPS Education juga menyediakan Program Les
          Privat untuk tingkat SD, SMP, SMA, Mahasiswa dan umum, baik untuk
          belajar materi pelajaran di sekolah maupun untuk persiapan ujian
          seperti Olimpiade, TOEFL/IELTS, tes CPNS, tes Akpol dan kebutuhan
          lainnya akan kami upayakan. LPS Education menyediakan Layanan Les
          Privat Offline (Guru Privat Datang ke Rumah) untuk area Jakarta,
          Bogor, Depok, Tangerang, Tangsel, Bekasi dan Privat Online untuk
          seluruh wilayah di Indonesia.
        </p>
      </div>
    </section>
  );
};

export default TigaJalurMasukPTN;
