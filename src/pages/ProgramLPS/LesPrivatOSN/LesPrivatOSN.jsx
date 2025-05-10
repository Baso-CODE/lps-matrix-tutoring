import { Helmet } from "react-helmet-async";
import ContactFooter from "../../../components/ContactFooter/ContactFooter";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeroLpsOSN from "./Components/HeroLpsOSN/HeroLpsOSN";
import PaketBelajarOSN from "./Components/PaketBelajarOSN/PaketBelajarOSN";
import PaketSesiOSN from "./Components/PaketSesiOSN/PaketSesiOSN";
import ProgramIntensiOSN from "./Components/ProgramIntensiOSN/ProgramIntensiOSN";
import "./LesPrivatOSN.css";
import AlumniLps from "../../HomePage/Components/AlumniLps/AlumniLps";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Promo from "../../../components/Promo/Promo";
import Slider from "../../../components/Slider/Slider";

const LesPrivatOSN = () => {
  return (
    <>
      <Helmet>
        <title>
          Les Privat OSN Persiapan Olimpiade Sains Nasional Bimbingan Intensif
        </title>
        <meta
          name="description"
          content="Dapatkan bimbingan intensif OSN bersama LPS Matrix Indonesia untuk persiapan Olimpiade Sains Nasional dengan pengajar berpengalaman dan fasilitas lengkap."
        />
        <meta
          name="keywords"
          content="les privat OSN, bimbingan OSN, Olimpiade Sains Nasional, les privat LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Les Privat OSN Persiapan Olimpiade Sains Nasional Bimbingan Intensif"
        />
        <meta
          property="og:description"
          content="Bimbingan intensif untuk OSN dengan pengajar profesional dan fasilitas lengkap, mempersiapkan siswa untuk Olimpiade Sains Nasional."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/OSN.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/OSN.webp"
        />
        <meta
          name="twitter:title"
          content="Les Privat OSN Persiapan Olimpiade Sains Nasional Bimbingan Intensif"
        />
        <meta
          name="twitter:description"
          content="Persiapan OSN terbaik dengan bimbingan intensif dari LPS Matrix Indonesia, bersama pengajar berpengalaman untuk hasil optimal."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/OSN.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeroLpsOSN />
        <ProgramIntensiOSN />
        <Slider />
        <FasilitasSimakUI />
        <PaketBelajarOSN />
        <PaketSesiOSN />
        <AlumniLps />
        <SuccessStory />
        <GaleryBelajarSiswa />
        <ContactFooter />
        <UnivPengajarLps />
        <Promo />
        {/* <ContactButton /> */}
      </div>
    </>
  );
};

export default LesPrivatOSN;
