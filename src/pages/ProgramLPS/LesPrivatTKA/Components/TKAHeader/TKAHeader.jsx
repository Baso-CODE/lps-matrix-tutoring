import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./TKAHeader.css";

const TKAHeader = ({ city: cityProp }) => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  const altText = `Les Privat TKA (Tes Kemampuan Akademik) bersama LPS Education${
    city ? " di " + city : ""
  }. Program persiapan Tes Potensi Akademik, Psikotes, dan ujian masuk dengan Tutor Berpengalaman dari UI, ITB, UGM, dan PTN Favorit.`;

  const mobileImage = "/images/program/jumbotron-program-tka-mobile.jpeg";
  const desktopImage = "/images/program/jumbotron-program-tka.jpeg";

  return (
    <div className="tka-header-container">
      {/* Image Section */}
      <picture>
        {/* Source khusus untuk mobile */}
        <source media="(max-width: 768px)" srcSet={mobileImage} />
        {/* Default desktop */}
        <img
          loading="lazy"
          src={desktopImage}
          alt={altText}
          className="tka-header-image"
        />
      </picture>
      {/* Les privat Matrix */}
      <h2 className="tka-header-title">
        Siap Hadapi TKA dengan Percaya Diri Bersama LPS Education{" "}
        <span className="color-d2b04c-description">
          {city ? `di ${city}` : ""}
        </span>{" "}
        – LPS Education
      </h2>
      {/* Description 1 */}
      {/* <p className="additional-description_simak-ui">
        Program{" "}
        <span className="color-d2b04c-description">
          Super Intensif Privat Simak UI
        </span>{" "}
        merupakan suatu bentuk program belajar fokus Intensif Persiapan Ujian
        Simak UI dengan sistem belajar{" "}
        <span className="color-d2b04c-description">Privat Offline</span> (guru
        datang ke rumah) dan{" "}
        <span className="color-d2b04c-description">Privat Online</span>. Program
        ini disusun secara sistematis dan didukung dengan guru les privat
        berpengalaman untuk program Seleksi Masuk Universitas Indonesia. Program
        belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan
        keterampilan penyelesaian soal-soal Simak UI.
      </p> */}
      <p className="additional-description_simak-ui">
        Persiapan Intensif Tes Kemampuan Akademik untuk Siswa SD, SMP, dan
        SMA/SMK Privat Offline di Jakarta, Bogor, Depok, Tangerang, Tangsel,
        Bekasi dan Online untuk seluruh Indonesia.
      </p>
      <br />
      {/* Description 2 */}
      <p className="additional-description_simak-ui">
        Progress belajar akan dimonitoring oleh Tim Akademik LPS Education. Kami
        akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan.
      </p>
      <p className="additional-description_simak-ui">
        Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progress
        belajar siswa. Target Program Super Intensif Simak UI adalah
        mengantarkan siswa Sukses Masuk UI sesuai jurusan yang diinginkan.
      </p>
      <br />
      {/* Sekilas Info TKA (Tes Kemampuan Akademik) */}
      <h2 className="tka-header-title-h2">
        Sekilas Info TKA (Tes Kemampuan Akademik)
      </h2>
      <p className="tka-header-description">
        Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
        (Kemdikbudristek) melalui Pusat Asesmen Pendidikan resmi meluncurkan Tes
        Kemampuan Akademik (TKA) sebagai bagian dari transformasi pendidikan di
        Indonesia. TKA dirancang untuk mengukur literasi membaca, numerasi,
        penalaran, dan keterampilan berpikir kritis siswa secara objektif.
        Berbeda dengan ujian sekolah biasa yang sering hanya menguji hafalan,
        TKA hadir untuk melihat sejauh mana siswa bisa memahami konsep,
        menganalisis informasi, dan memecahkan masalah nyata. Inilah yang
        membedakan TKA dengan Ujian Nasional yang sudah tidak berlaku lagi.
      </p>
      <br />
      <p className="tka-header-description">
        TKA ditujukan untuk siswa di akhir jenjang pendidikan, yaitu kelas 6 SD,
        kelas 9 SMP, dan kelas 12 SMA/SMK. Pada tahun 2026, TKA baru
        dilaksanakan untuk kelas 12 SMA atau kelas akhir SMK. Sementara untuk SD
        dan SMP, TKA baru akan mulai dilaksanakan tahun 2026.
      </p>
      <br />
      <br />
      {/* Sekilas Info TKA (Tes Kemampuan Akademik) */}
      <h2 className="tka-header-title-h2">Mengapa TKA Itu Penting?</h2>
      <p className="tka-header-description">
        TKA dapat menjadi cermin kemampuan akademik siswa. Meskipun TKA sifatnya
        opsional (tidak wajib diikuti), namun hasil TKA dapat digunakan sebagai
        nilai tambah (bahan pertimbangan) dalam seleksi jenjang pendidikan
        selanjutnya. Misalnya, untuk masuk SMP/SMA unggulan, SMK favorit, maupun
        untuk masuk ke perguruan tinggi jalur Seleksi Nasional Berbasis Prestasi
        (SNBP).
      </p>
      <br />
      <p className="tka-header-description">
        Selain itu, TKA juga menjadi dasar evaluasi nasional untuk meningkatkan
        kualitas pendidikan di Indonesia. Dengan kata lain, siswa yang mengikuti
        TKA mendapat kesempatan lebih besar untuk menunjukkan potensi terbaiknya
        di tingkat nasional.
      </p>
      <br />
      {/* Mata Pelajaran */}
      <h3 className="tka-header-title-h3">
        Mata Pelajaran Tes Kemampuan Akademik (TKA){" "}
      </h3>
      <p className="tka-header-description">
        TKA ditujukan bagi siswa di akhir jenjang pendidikan:
      </p>
      <ul className="tka-header-list">
        <li>Kelas 6 SD/MI</li>
        <li>Kelas 9 SMP/MTs </li>
        <li>Kelas 12 SMA/MA/SMK/MAK</li>
      </ul>
      <br />
      <p className="tka-header-description">
        <b>Materi Ujian TKA</b> berbeda sesuai dengan tingkat atau jenjang
        pendidikan:
      </p>{" "}
      <ul className="tka-header-list-number">
        <li>SD/MI/SMP/MTs/sederajat: Bahasa Indonesia dan Matematika.</li>
        <li>
          SMA/MA/SMK/MAK/sederajat: Bahasa Indonesia, Matematika, Bahasa
          Inggris, dan 2 (dua) mata pelajaran pilihan.
        </li>
      </ul>
      <br />
      <p className="tka-header-description">
        Format soal TKA juga bervariasi, mulai dari pilihan ganda sederhana,
        pilihan ganda kompleks (jawaban lebih dari satu), hingga soal berbasis
        stimulus (teks, tabel, grafik, atau data lain). Dengan demikian, siswa
        tidak bisa hanya menghafal rumus, tetapi harus terbiasa berpikir logis,
        kritis, dan sistematis.
      </p>
      <br />
      {/* Kapan Perkiraan TKA Dilaksanakan? */}
      <h3 className="tka-header-title-h3">Kapan Perkiraan TKA Dilaksanakan?</h3>
      <ul className="tka-header-list">
        <li>
          SMA/SMK (kelas 12), TKA pertama akan dilaksanakan pada 1–9 November
          2026.
        </li>
        <li>
          SD & SMP (kelas 6 dan 9), jadwal TKA direncanakan sekitar bulan
          Maret–April 2026.
        </li>
      </ul>
      <button
        className="btn-learn-more__sd_smp_sma"
        onClick={() => window.open(finalUrl, "_blank", "noopener,noreferrer")}>
        Konsultasi Sekarang
      </button>
    </div>
  );
};
TKAHeader.propTypes = {
  city: PropTypes.string,
};

export default TKAHeader;
