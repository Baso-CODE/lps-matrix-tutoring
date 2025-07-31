// TigaJalurMasukPTN.js
import "./TigaJalurMasukPTN.css";

const TigaJalurMasukPTN = () => {
  return (
    <div className="container-tiga-jalur">
      <h1 className="title-tiga-jalur">
        Tiga Jalur Masuk Universitas Negeri (PTN)
      </h1>
      <div className="card-container-tiga-jalur">
        {/* Card 1: SNBP */}
        <div className="card-tiga-jalur">
          <h2 className="card-title-tiga-jalur">SNBP</h2>
          <p className="card-description-tiga-jalur">
            Seleksi Nasional Berdasarkan Prestasi (SNBP) adalah jalur penerimaan
            mahasiswa baru yang didasarkan pada prestasi akademik dan
            non-akademik. Jalur ini sangat cocok bagi siswa yang memiliki nilai
            tinggi dan prestasi lain selama sekolah. Selain itu, mulai tahun
            2026, TKA (Tes Kemampuan Akademik) akan menjadi Instrumen Tambahan
            untuk Penilaian SNBP.
          </p>
        </div>

        {/* Card 2: SNBT */}
        <div className="card-tiga-jalur">
          <h2 className="card-title-tiga-jalur">SNBT</h2>
          <p className="card-description-tiga-jalur">
            Seleksi Nasional Berdasarkan Tes (SNBT) adalah jalur penerimaan
            melalui ujian tertulis. Jalur ini mengujikan 2 komponen besar, yaitu
            Tes Potensi Sekolastik dan Tes Literasi yang dibagi ke dalam 7
            subtes UTBK.
          </p>
        </div>

        {/* Card 3: Seleksi Mandiri */}
        <div className="card-tiga-jalur">
          <h2 className="card-title-tiga-jalur">Seleksi Mandiri</h2>
          <p className="card-description-tiga-jalur">
            Seleksi Mandiri adalah jalur penerimaan mahasiswa baru yang diadakan
            oleh masing-masing PTN. Kriteria dan prosedurnya ditentukan langsung
            oleh universitas, sehingga siswa harus memenuhi persyaratan khusus
            dari kampus yang dituju.
          </p>
        </div>
      </div>
      <p className="additional-description">
        <span className="color-d2b04c-description"> LPS Education</span> adalah
        Lembaga Penyedia Jasa Guru Les Privat Profesional dan Bimbingan Belajar
        yang berdiri sejak tahun 2010 serta telah memiliki ribuan siswa dari
        berbagai wilayah di Indonesia seperti Jakarta, Bogor, Depok, Tangerang,
        Tangsel, Bekasi, BSD, Bandung, Semarang, Yogyakarta, Surabaya, Denpasar,
        Serang, Banda Aceh, Medan, Palembang, Padang, Bengkulu, Pekanbaru,
        Tanjung Pinang, Jambi, Bandar Lampung, Pangkal Pinang, Pontianak,
        Samarinda, Banjarmasin, Palangkaraya, Tanjung Selor, Kupang, Mataram,
        Gorontalo, Mamuju, Palu, Manado, Kendari, Makasar, Ternate, Ambon,
        Manokwari, Jayapura dan daerah lain.
      </p>
      <br />
      <p className="additional-description">
        Selain Program{" "}
        <span className="color-d2b04c-description"> Les Privat SNBT</span> dan
        Ujian Masuk PTN lainnya, LPS Education juga menyediakan Program Les
        Privat untuk tingkat SD, SMP, SMA, Mahasiswa dan umum, baik untuk
        belajar materi pelajaran di sekolah maupun untuk persiapan ujian seperti
        Olimpiade, TOEFL/IELTS, tes CPNS, tes Akpol dan kebutuhan lainnya akan
        kami upayakan. LPS Education menyediakan Layanan Les Privat Offline
        (Guru Privat Datang ke Rumah) untuk area Jakarta, Bogor, Depok,
        Tangerang, Tangsel, Bekasi dan Privat Online untuk seluruh wilayah di
        Indonesia.
      </p>
    </div>
  );
};

export default TigaJalurMasukPTN;
