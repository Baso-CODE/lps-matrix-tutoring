import useCSData from "../../../../hooks/useCSData";
import { useRotatingCS } from "../../../../hooks/useRotatingCS";
import "./ProfileLps.css";

const ProfileLps = () => {
  const { csData } = useCSData();
  const { selectedCS, rotateToNext } = useRotatingCS(csData);

  const fallbackCS = {
    nama_cs: "Kak Fina",
    link_cta:
      "https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina,%20saya%20tertarik%20dengan%20program%20belajar%20di%20LPS%20Education.%0A%0A%F0%9F%93%96%20Les%20Privat%20SD%20SMP%20SMA%20SIMAK%20UI%20OSN%20MAHASISWA%20CPNS%20%7C%20LPS%20EDUCATION%E2%9C%A8%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com",
  };

  const activeCS = selectedCS || fallbackCS;

  const handleClick = () => {
    rotateToNext();
  };

  return (
    <section className="container-halaman-hero-home">
      <div className="content-hero-home">
        <div className="isi-content-hero-home">
          <div className="profile-lps-eyebrow">
            <span className="profile-lps-eyebrow-dot" />
            Sejak 2010
          </div>

          <div className="logo-profile-lps__container">
            <h1 className="title-halaman-hero-home">
              Bimbel Spesialis Masuk FK & PTN Favorit
            </h1>
          </div>

          <div className="profile-lps-description">
            <p className="child-paragraf-hero-home">
              LPS Education adalah Lembaga Penyedia Jasa Guru Les Privat
              Profesional, Berpengalaman dan Bimbingan Belajar Spesialis
              Persiapan Masuk PTN yang berdiri sejak tahun 2010 dan sudah
              memiliki Izin Usaha. Layanan Bimbel Les Privat SBMPTN (UTBK SNBT)
              dan layanan privat lainnya dapat menjangkau seluruh daerah di
              Indonesia
            </p>

            <p className="child-paragraf-hero-home">
              Layanan Privat Offline (guru les privat datang ke rumah) dapat
              menjangkau area Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi,
              BSD (Jabodetabek) dan sekitarnya. Sementara itu, Les Privat Online
              (Belajar via Zoom/Google Meet) dapat menjangkau seluruh wilayah di
              Indonesia. LPS Education memiliki Program Spesialis Persiapan
              Masuk PTN di antaranya Bimbel Les Privat SBMPTN/UTBK SNBT, Privat
              Simak UI/KKI, IUP UGM dan Les Privat Ujian Mandiri PTN.
            </p>
          </div>

          <div className="profile-lps-action">
            <a
              href={activeCS.link_cta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Konsultasi WhatsApp dengan ${activeCS.nama_cs}`}
              className="btn-daftar-sekarang"
              title={`Hubungi ${activeCS.nama_cs}`}
              onClick={handleClick}>
              <span
                className="profile-lps-button-specular"
                aria-hidden="true"
              />

              <span className="profile-lps-button-text">
                Konsultasi Sekarang!
              </span>

              <span className="profile-lps-button-icon-wrapper">
                <img
                  src="/images/daftar-sekarang.webp"
                  alt=""
                  aria-hidden="true"
                  width={512}
                  height={512}
                  className="button-icon-profile-lps"
                />
              </span>
            </a>
          </div>
        </div>

        <div className="image-hero-wrapper">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/jumbotron_bimbel_lps-mobile-optimized.webp"
            />
            <img
              src="/images/jumbotron_bimbel_lps-desktop-optimized.webp"
              className="rumah-adat-hero-home"
              alt="Program bimbingan belajar dan les privat LPS Education"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={2022}
              height={2952}
            />
          </picture>

          <div className="shadow-bottom-image-profile-lps" />
        </div>
      </div>
    </section>
  );
};

export default ProfileLps;
