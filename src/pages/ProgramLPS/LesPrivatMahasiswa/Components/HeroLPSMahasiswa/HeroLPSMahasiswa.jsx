import { useEffect, useState } from "react";
import { getJumbotronProgram } from "../../../../../api/jumbotron/getJumbotronProgram";
import { selectContactCsData } from "../../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../../lib/hooks";
import "./HeroLPSMahasiswa.css";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
const HeroLPSMahasiswa = ({ city: cityProp }) => {
  const [jumbotron, setJumbotron] = useState(null);
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

  const location = useLocation();
  const path = location.pathname;

  let city = cityProp || "";
  if (!city && path.includes("/di/")) {
    city = path.split("/di/")[1];
    city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  useEffect(() => {
    const fetchJumbotron = async () => {
      try {
        const result = await getJumbotronProgram("lesprivat-mahasiswa");
        setJumbotron(result.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchJumbotron();
  }, []);

  const altText = `Les Privat Mahasiswa bersama LPS Education${
    city ? " di " + city : ""
  }. Program pendampingan kuliah & mata kuliah spesifik dengan Tutor Berpengalaman dari UI, ITB, UGM, dan PTN Favorit.`;

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };
  return (
    <div className="container-halaman__mahasiswa">
      <div className="content-hero-home__mahasiswa">
        <img
          loading="eager"
          data-aos="zoom-in-down"
          className="rumah-adat-hero__mahasiswa"
          src={jumbotron?.link_image || "/images/program/MAHASISWA.webp"}
          alt={altText}
        />
        <div className="isi-content-hero__mahasiswa">
          <h1 className="program-simak-ui-title">
            Program Les Privat Mahasiswa - Privat Offline dan Online{" "}
            <span className="color-d2b04c-description">
              {city ? `di ${city}` : ""}
            </span>{" "}
            – LPS Education
          </h1>
          <div>
            <p className="child-paragraf-hero__mahasiswa">
              Program Les Privat Mahasiswa adalah suatu bentuk program belajar
              fokus Intensif belajar Mata Kuliah Jurusan dan Universitas dengan
              sistem belajar Privat Offline (guru datang ke rumah) dan Privat
              Online.
            </p>
            <br />
            <p className="child-paragraf-hero__mahasiswa">
              Tim Pengajar Les Privat Mahasiswa adalah alumni - alumni terbaik
              dari UI, ITB, UGM, Unpad, IPB, STAN, STIS, dan perguruan tinggi
              lainnya yang berpengalaman dan berkompeten di bidangnya, serta
              telah melalui serangkaian proses seleksi ketat dari mulai seleksi
              berkas dan CV, interview, tes akademik dan Micro Teaching.
            </p>
            <br />
            <p className="child-paragraf-hero__mahasiswa">
              Pendaftar Program Les Privat Mahasiswa juga bisa menuliskan
              kriteria pengajar yang diinginkan, misalnya harus dari Universitas
              dan Jurusan yang sama, atau pernah menjadi Asisten Dosen, dan
              sebagainya.
            </p>
          </div>

          <button
            className="btn-learn-more__sd_smp_sma"
            onClick={() =>
              window.open(finalUrl, "_blank", "noopener,noreferrer")
            }>
            Konsultasi Sekarang
          </button>
        </div>

        {/* Anda sedang membutuhkan layanan Les privat */}
        <h2 className="program-mahasiswa-title-h2">
          Anda Sedang Mencari Guru Les Privat untuk Mahasiswa?
        </h2>

        <p className="additional-description-mahasiswa">
          <span className="color-d2b04c-description">LPS Education</span>{" "}
          memiliki Layanan Program Les Privat Mahasiswa yang diperuntukkan bagi
          mahasiswa PTN, Swasta, maupun Kedinasan. Layanan ini mencakup belajar
          Mata Kuliah sesuai Jurusan (Program Studi) dan Mata Kuliah tingkat
          Universitas. Dengan sistem Privat ke Rumah (Offline) dan Privat
          Online, sesi les privat bisa dimulai kapan saja dengan jadwal
          fleksibel menyesuaikan waktu luang mahasiswa.
        </p>
        <br />
        <p className="additional-description-mahasiswa">
          Kami siap mengirimkan guru les privat Mahasiswa terbaik untuk
          mendampingi belajar materi kuliah yang Anda butuhkan. Program Les
          Privat Mahasiswa didesain untuk memenuhi kebutuhan belajar para
          mahasiswa jenjang S1, S2, D3, dan Sarjana Terapan. Mata Kuliah yang
          bisa dileskan beragam sesuai dengan kebutuhan dan permintaan siswa.
        </p>
        <br />
        <p className="additional-description-mahasiswa">
          Program Les Privat Mahasiswa dengan sistem Privat Offline, guru privat
          datang ke rumah dapat menjangkau Anda yang berlokasi di Jakarta,
          Bogor, Depok, Tangerang, Tangsel, Bekasi, dan sekitarnya. Sementara
          itu, Layanan Les Privat Online Mahasiswa bisa menjangkau seluruh
          wilayah di Indonesia dengan pembelajaran jarak jauh menggunakan
          aplikasi Zoom, Google Meet, atau aplikasi lainnya.
        </p>
      </div>
    </div>
  );
};
HeroLPSMahasiswa.propTypes = {
  city: PropTypes.string,
};

export default HeroLPSMahasiswa;
