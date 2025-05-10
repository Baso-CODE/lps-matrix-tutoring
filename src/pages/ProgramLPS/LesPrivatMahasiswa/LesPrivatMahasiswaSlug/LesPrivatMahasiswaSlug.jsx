import { Helmet } from "react-helmet-async";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import AsalUniversitasMahasiswa from "../Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa";
import HeroLPSMahasiswa from "../Components/HeroLPSMahasiswa/HeroLPSMahasiswa";
import LayananLPSMahasiswa from "../Components/LayananLPSMahasiswa/LayananLPSMahasiswa";
import PaketLPSMahasiswa from "../Components/PaketLPSMahasiswa/PaketLPSMahasiswa";
import { useParams } from "react-router-dom";
import Promo from "../../../../components/Promo/Promo";
import Slider from "../../../../components/Slider/Slider";

const LesPrivatMahasiswaSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat Mahasiswa di {slugUpperCase} Kedokteran Akuntansi Ekonomi
          Manajeme Online dan guru datang ke rumah
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
          content={`Les Privat Mahasiswa di ${slugUpperCase} Kedokteran Akuntansi Ekonomi Manajemen -
      Online dan guru datang ke rumah`}
        />
        <meta
          property="og:description"
          content="Bimbingan untuk mahasiswa yang membutuhkan dukungan akademik lebih dengan pengajar profesional dan fasilitas terbaik."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/MAHASISWA.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/MAHASISWA.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat Mahasiswa di ${slugUpperCase} Kedokteran Akuntansi Ekonomi Manajemen -
          Online dan guru datang ke rumah`}
        />
        <meta
          name="twitter:description"
          content="Bimbingan privat untuk mahasiswa dengan pengajar berpengalaman untuk mendukung kesuksesan akademik Anda."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/MAHASISWA.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeroLPSMahasiswa />
        <Slider />
        <LayananLPSMahasiswa />
        <FasilitasSimakUI />
        <PaketLPSMahasiswa />
        <AsalUniversitasMahasiswa />
        <UnivPengajarLps />
        <ContactButton />
        <Promo />
      </div>
    </>
  );
};

export default LesPrivatMahasiswaSlug;
