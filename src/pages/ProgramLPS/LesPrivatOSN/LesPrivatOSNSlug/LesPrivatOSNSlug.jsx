import { Helmet } from "react-helmet-async";
import HeroLpsOSN from "../Components/HeroLpsOSN/HeroLpsOSN";
import ProgramIntensiOSN from "../Components/ProgramIntensiOSN/ProgramIntensiOSN";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarOSN from "../Components/PaketBelajarOSN/PaketBelajarOSN";
import PaketSesiOSN from "../Components/PaketSesiOSN/PaketSesiOSN";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import { useParams } from "react-router-dom";
import Promo from "../../../../components/Promo/Promo";

const LesPrivatOSNSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat OSN di {slugUpperCase} • Persiapan Olimpiade Sains Nasional
          - Bimbingan Intensif
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
          content={`Les Privat OSN di ${slugUpperCase} • Persiapan Olimpiade Sains Nasional - Bimbingan Intensif`}
        />
        <meta
          property="og:description"
          content="Bimbingan intensif untuk OSN dengan pengajar profesional dan fasilitas lengkap, mempersiapkan siswa untuk Olimpiade Sains Nasional."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_OSN" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Les Privat OSN di ${slugUpperCase} • Persiapan Olimpiade Sains Nasional - Bimbingan Intensif`}
        />
        <meta
          name="twitter:description"
          content="Persiapan OSN terbaik dengan bimbingan intensif dari LPS Matrix Indonesia, bersama pengajar berpengalaman untuk hasil optimal."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_OSN" />
      </Helmet>

      <div className="container-all">
        <HeroLpsOSN />
        <ProgramIntensiOSN />
        <FasilitasSimakUI />
        <PaketBelajarOSN />
        <PaketSesiOSN />
        <UnivPengajarLps />
        <ContactButton />
        <Promo />
      </div>
    </>
  );
};

export default LesPrivatOSNSlug;
