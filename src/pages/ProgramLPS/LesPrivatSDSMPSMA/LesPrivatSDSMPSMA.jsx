import { Helmet } from "react-helmet-async";
import ContactFooter from "../../../components/ContactFooter/ContactFooter";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeadingLpsSDSMPSMA from "./Components/HeadingLpsSDSMPSMA/HeadingLpsSDSMPSMA";
import PaketBelajarSDSMPSMA from "./Components/PaketBelajarSDSMPSMA/PaketBelajarSDSMPSMA";
import PaketSesiSDSMPSMA from "./Components/PaketSesiSDSMPSMA/PaketSesiSDSMPSMA";
import ProgramIntensifLpsSDSMPSMA from "./Components/ProgramIntensifLpsSDSMPSMA/ProgramIntensifLpsSDSMPSMA";
import Promo from "../../../components/Promo/Promo";

const LesPrivatSDSMPSMA = () => {
  return (
    <>
      <Helmet>
        <title>
          Les Privat SD, SMP, SMA - Persiapan Belajar Intensif • Online & Guru
          Datang ke Rumah - LES PRIVAT SBMPTN ™
        </title>
        <meta
          name="description"
          content="Dapatkan les privat untuk SD, SMP, dan SMA terbaik dengan LPS Matrix Indonesia. Program intensif bersama pengajar profesional dan fasilitas lengkap, online maupun offline."
        />
        <meta
          name="keywords"
          content="les privat SD, les privat SMP, les privat SMA, bimbingan belajar intensif, program belajar LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Les Privat SD, SMP, SMA - Persiapan Belajar Intensif • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™"
        />
        <meta
          property="og:description"
          content="Bimbingan belajar privat untuk SD, SMP, dan SMA dengan pengajar berpengalaman, fasilitas lengkap, tersedia secara online dan guru datang ke rumah."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/SD,SMP,SMA.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/SD,SMP,SMA.webp"
        />
        <meta
          name="twitter:title"
          content="Les Privat SD, SMP, SMA - Persiapan Belajar Intensif • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™"
        />
        <meta
          name="twitter:description"
          content="Program bimbingan belajar privat untuk SD, SMP, dan SMA dengan fasilitas lengkap dan pengajar profesional dari LPS Matrix Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/SD,SMP,SMA.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeadingLpsSDSMPSMA />
        <FasilitasSimakUI />
        <ProgramIntensifLpsSDSMPSMA />
        <PaketBelajarSDSMPSMA />
        <PaketSesiSDSMPSMA />
        <ContactFooter />
        <UnivPengajarLps />
        <Promo />
        {/* <ContactButton /> */}
      </div>
    </>
  );
};

export default LesPrivatSDSMPSMA;
