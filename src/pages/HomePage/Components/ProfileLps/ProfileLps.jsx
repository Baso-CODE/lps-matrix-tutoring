import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./ProfileLps.css";

const ProfileLps = () => {
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

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
              Indonesia. LPS Education memiliki Program Spesialis Persiapan
              Masuk PTN di antaranya Bimbel Les Privat SBMPTN/UTBK SNBT, Privat
              Simak UI/KKI, IUP UGM dan Les Privat Ujian Mandiri PTN.
            </p>
          </div>
          <Link
            to={finalUrl}
            data-aos="fade-up"
            className="btn-daftar-sekarang">
            Konsultasi Sekarang!
            <img
              src="/images/daftar-sekarang.png"
              alt=""
              className="button-icon-profile-lps"
            />
          </Link>
        </div>

        <div className="image-hero-wrapper">
          <img
            src="/images/jumbotron_bimbel_lps.webp"
            className="rumah-adat-hero-home"
            alt="Video Profil LPS"
            loading="eager"
            fetchPriority="high"
            width="600"
            height="800"
          />

          {/* AKTIFKAN KEMBALI DIV INI */}
          <div className="shadow-bottom-image-profile-lps"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLps;
