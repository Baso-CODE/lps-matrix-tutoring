import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import ContactFooter from "../../../../components/ContactFooter/ContactFooter";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Promo from "../../../../components/Promo/Promo";
import Slider from "../../../../components/Slider/Slider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import AlumniLps from "../../../HomePage/Components/AlumniLps/AlumniLps";
import FiturDanLayanan from "../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AsalSiswaLPS from "../../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS";
import FasilitasSimakUI from "../Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarSimakUI from "../Components/PaketBelajarSimakUI/PaketBelajarSimakUI";
import ProgramBelajarSIMAKUI from "../Components/ProgramBelajarAll/ProgramBelajarAll";
import ProgramSimakUI from "../Components/ProgramSimakUI/ProgramSimakUI";

const SimakUIAndKKISLug = () => {
  const { slug } = useParams();
  const slugUpperCase = slug.toUpperCase();

  return (
    <>
      <Helmet>
        <title>
          Les Privat SIMAK UI di {slugUpperCase} UTBK SNBT, SIMAK KKI UI & CBT
          UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™
        </title>
        <meta
          name="description"
          content="Ikuti program bimbingan SIMAK UI dan KKI terbaik bersama LPS Matrix Indonesia dengan pengajar berpengalaman dan fasilitas lengkap untuk membantu Anda lolos seleksi."
        />
        <meta
          name="keywords"
          content="SIMAK UI, KKI, bimbingan SIMAK UI, les SIMAK UI, program SIMAK UI LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Les Privat SIMAK UI di ${slugUpperCase} UTBK SNBT, SIMAK KKI UI & CBT UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™`}
        />
        <meta
          property="og:description"
          content="Program bimbingan SIMAK UI dan KKI untuk persiapan terbaik masuk UI. Dapatkan fasilitas terbaik dan pengajar berpengalaman di LPS Matrix Indonesia."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat SIMAK UI di ${slugUpperCase} UTBK SNBT, SIMAK KKI UI & CBT UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™`}
        />
        <meta
          name="twitter:description"
          content="Persiapan SIMAK UI dan KKI terbaik dengan fasilitas dan pengajar berpengalaman dari LPS Matrix Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp"
        />
      </Helmet>

      <div className="container-all">
        <ProgramSimakUI />
        <FasilitasSimakUI />
        <PaketBelajarSimakUI />
        <ProgramBelajarSIMAKUI />
        {/* <KeunggulanEndAlasanMemilih /> */}
        <Slider />
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <ProfileTutor />
        <GaleryBelajarSiswa />
        <AlumniLps />
        <TestimoniWaSiswa />
        <AsalSiswaLPS />
        <ContactFooter />
        <UnivPengajarLps />
        <Promo />
        <ContactButton />
      </div>
    </>
  );
};

export default SimakUIAndKKISLug;
