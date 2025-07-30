import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./ProfileLps.css";
const ProfileLps = () => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

  // const handleCTAClick = (e) => {
  //   const targetUrl = contactData?.link_cta || "https://wa.me/6285887562039";
  //   handleCTAClickLogic(targetUrl, e);
  // };
  return (
    <div className="container-halaman-hero-home">
      <div className="content-hero-home">
        <div className="isi-content-hero-home">
          <div className="logo-profile-lps__container">
            <h1 className="title-halaman-hero-home" data-aos="fade-right">
              Bimbel Spesialis Masuk FK & PTN Favorit
            </h1>
          </div>
          <div>
            <p className="child-paragraf-hero-home" data-aos="zoom-in">
              LPS Education adalah Lembaga Penyedia Jasa Guru Les Privat
              Profesional, Berpengalaman dan Bimbingan Belajar Spesialis
              Persiapan Masuk PTN yang berdiri sejak tahun 2010 dan sudah
              memiliki Izin Usaha. Layanan Bimbel Les Privat SBMPTN (UTBK SNBT)
              dan layanan privat lainnya dapat menjangkau seluruh daerah di
              Indonesia
            </p>
            <p className="child-paragraf-hero-home" data-aos="zoom-in">
              Layanan Privat Offline (guru les privat datang ke rumah) dapat
              menjangkau area Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi,
              BSD (Jabodetabek) dan sekitarnya. Sementara itu, Les Privat Online
              (Belajar via Zoom/Google Meet) dapat menjangkau seluruh wilayah di
              Indonesia. LPS memiliki Program Spesialis Persiapan Masuk PTN di
              antaranya Bimbel Les Privat SBMPTN/UTBK SNBT, Privat Simak UI/KKI,
              IUP UGM dan Les Privat Ujian Mandiri PTN.
            </p>
          </div>
          <Link
            to={finalUrl}
            data-aos="fade-up"
            className="btn-daftar-sekarang">
            Daftar Sekarang
            <img
              src="/images/daftar-sekarang.png"
              alt=""
              className="button-icon-profile-lps"
            />
          </Link>
          {/* <button data-aos="fade-up" className="btn-learn-more">
            Pelajari Lebih Lanjut
          </button> */}
        </div>
        {/*         
        <img loading="lazy"
          data-aos="fade-left"
          className="rumah-adat-hero-home"
          src={"/images/heroo.png"}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          width="1880"
          height="1075"
        /> */}
        <img
          loading="eager"
          data-aos="fade-left"
          className="rumah-adat-hero-home"
          src="/images/HERO.webp" // Path to your video file
          alt="Video Profil LPS"
          // width="1880"

          // height="1075"
          // autoPlay
          // loop
          // muted
        />
      </div>
    </div>
  );
};

export default ProfileLps;
