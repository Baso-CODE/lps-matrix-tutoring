import "./ProfileLps.css";
const ProfileLps = () => {
  const phone = "6281311778441"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Fina%20https://apps.lesprivatmasukptn.com/,%20saya%20ingin%20tanya%20tentang%20program%20belajar:%0A`;

  const message = `
Kelas : 
Mapel : 
Kurikulum : 
Wilayah : 
`.trim();

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;
  return (
    <div className="container-halaman-hero-home">
      <div className="content-hero-home">
        <div className="isi-content-hero-home">
          <h1 className="title-halaman-hero-home" data-aos="fade-right">
            Profile LPS
          </h1>
          <div>
            <p className="child-paragraf-hero-home" data-aos="zoom-in">
              LPS Premium adalah Lembaga Penyedia Jasa Guru Les Privat
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
          {/* Added a second button */}
          <button
            data-aos="fade-up"
            className="btn-daftar-sekarang"
            onClick={() => window.open(finalUrl, "_blank")}>
            Daftar Sekarang
          </button>
          {/* <button data-aos="fade-up" className="btn-learn-more">
            Pelajari Lebih Lanjut
          </button> */}
        </div>
        {/*         
        <img
          data-aos="fade-left"
          className="rumah-adat-hero-home"
          src={"/images/heroo.png"}
          alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
          width="1880"
          height="1075"
        /> */}
        <img
          data-aos="fade-left"
          className="rumah-adat-hero-home"
          src="/images/HERO.png" // Path to your video file
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
