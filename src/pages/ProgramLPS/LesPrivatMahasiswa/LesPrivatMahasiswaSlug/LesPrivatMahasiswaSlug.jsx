import { Helmet } from "react-helmet-async";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import AsalUniversitasMahasiswa from "../Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa";
import HeroLPSMahasiswa from "../Components/HeroLPSMahasiswa/HeroLPSMahasiswa";
import LayananLPSMahasiswa from "../Components/LayananLPSMahasiswa/LayananLPSMahasiswa";
import PaketLPSMahasiswa from "../Components/PaketLPSMahasiswa/PaketLPSMahasiswa";
import { useParams } from "react-router-dom";

const LesPrivatMahasiswaSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat Mahasiswa di {slugUpperCase} - Kedokteran Akuntansi Ekonomi
          Manajemen - Online dan guru datang ke rumah
        </title>
        <meta
          name="description"
          content="Dapatkan bimbingan privat untuk mahasiswa dengan pengajar berpengalaman dan fasilitas lengkap, untuk menunjang kesuksesan akademik Anda."
        />
        <meta
          name="keywords"
          content="les privat mahasiswa, bimbingan mahasiswa, les untuk mahasiswa, bimbingan akademik, LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Les Privat Mahasiswa di ${slugUpperCase}  - Kedokteran Akuntansi Ekonomi Manajemen -
      Online dan guru datang ke rumah`}
        />
        <meta
          property="og:description"
          content="Bimbingan untuk mahasiswa yang membutuhkan dukungan akademik lebih dengan pengajar profesional dan fasilitas terbaik."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_LPS_MAHASISWA" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Les Privat Mahasiswa di ${slugUpperCase}  - Kedokteran Akuntansi Ekonomi Manajemen -
          Online dan guru datang ke rumah`}
        />
        <meta
          name="twitter:description"
          content="Bimbingan privat untuk mahasiswa dengan pengajar berpengalaman untuk mendukung kesuksesan akademik Anda."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_LPS_MAHASISWA" />
      </Helmet>

      <div className="container-all">
        <HeroLPSMahasiswa />
        <LayananLPSMahasiswa />
        <FasilitasSimakUI />
        <PaketLPSMahasiswa />
        <AsalUniversitasMahasiswa />
        <UnivPengajarLps />
        <ContactButton />
      </div>
    </>
  );
};

export default LesPrivatMahasiswaSlug;
