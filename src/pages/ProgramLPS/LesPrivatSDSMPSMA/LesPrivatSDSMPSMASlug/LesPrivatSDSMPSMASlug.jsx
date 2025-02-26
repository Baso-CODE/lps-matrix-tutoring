import { Helmet } from "react-helmet-async";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeadingLpsSDSMPSMA from "../Components/HeadingLpsSDSMPSMA/HeadingLpsSDSMPSMA";
import PaketBelajarSDSMPSMA from "../Components/PaketBelajarSDSMPSMA/PaketBelajarSDSMPSMA";
import PaketSesiSDSMPSMA from "../Components/PaketSesiSDSMPSMA/PaketSesiSDSMPSMA";
import ProgramIntensifLpsSDSMPSMA from "../Components/ProgramIntensifLpsSDSMPSMA/ProgramIntensifLpsSDSMPSMA";
import { useParams } from "react-router-dom";
import Promo from "../../../../components/Promo/Promo";

const LesPrivatSDSMPSMASlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat SD SMP SMA di {slugUpperCase} - Persiapan Belajar Intensif
          • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™
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
          content={`Les Privat SD, SMP, SMA di ${slugUpperCase} - Persiapan Belajar Intensif • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™`}
        />
        <meta
          property="og:description"
          content="Bimbingan belajar privat untuk SD, SMP, dan SMA dengan pengajar berpengalaman, fasilitas lengkap, tersedia secara online dan guru datang ke rumah."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_SDSMPSMA" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Les Privat SD, SMP, SMA di ${slugUpperCase} - Persiapan Belajar Intensif • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™`}
        />
        <meta
          name="twitter:description"
          content="Program bimbingan belajar privat untuk SD, SMP, dan SMA dengan fasilitas lengkap dan pengajar profesional dari LPS Matrix Indonesia."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_SDSMPSMA" />
      </Helmet>

      <div className="container-all">
        <HeadingLpsSDSMPSMA />
        <FasilitasSimakUI />
        <ProgramIntensifLpsSDSMPSMA />

        <PaketBelajarSDSMPSMA />
        <PaketSesiSDSMPSMA />
        <UnivPengajarLps />
        <ContactButton />
        <Promo />
      </div>
    </>
  );
};

export default LesPrivatSDSMPSMASlug;
