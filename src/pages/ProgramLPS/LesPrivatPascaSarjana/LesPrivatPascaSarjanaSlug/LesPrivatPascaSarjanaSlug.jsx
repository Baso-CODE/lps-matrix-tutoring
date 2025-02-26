import { Helmet } from "react-helmet-async";
import HeroLpsPascaSarjana from "../Components/HeroLpsPascaSarjana/HeroLpsPascaSarjana";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarPascaSarjana from "../Components/PaketBelajarPascaSarjana/PaketBelajarPascaSarjana";
import ProgramIntensiPascaSarjana from "../Components/ProgramIntensiPascaSarjana/ProgramIntensiPascaSarjana";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import { useParams } from "react-router-dom";
import Promo from "../../../../components/Promo/Promo";
const LesPrivatPascaSarjanaSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat Pasca Sarjana di {slugUpperCase} • UI UGM ITB UNAIR UNHAS
          Undip - Bimbingan Belajar Intensif
        </title>
        <meta
          name="description"
          content="Dapatkan bimbingan intensif pasca sarjana bersama LPS Matrix Indonesia untuk mempersiapkan diri menghadapi ujian dengan pengajar berpengalaman dan fasilitas lengkap."
        />
        <meta
          name="keywords"
          content="les privat pasca sarjana, bimbingan pasca sarjana, les privat LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Les Privat Pasca Sarjana di ${slugUpperCase} • UI, UGM, ITB, Undip - Bimbingan Belajar Intensif`}
        />
        <meta
          property="og:description"
          content="Bimbingan belajar privat pasca sarjana dengan pengajar profesional dan fasilitas lengkap untuk persiapan terbaik."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_PASCASARJANA" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Les Privat Pasca Sarjana di ${slugUpperCase} • UI, UGM, ITB, Undip - Bimbingan Belajar Intensif`}
        />
        <meta
          name="twitter:description"
          content="Persiapan pasca sarjana terbaik dengan bimbingan intensif dari LPS Matrix Indonesia bersama pengajar berpengalaman."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_PASCASARJANA" />
      </Helmet>

      <div className="container-all">
        <HeroLpsPascaSarjana />
        <FasilitasSimakUI />
        <PaketBelajarPascaSarjana />
        <ProgramIntensiPascaSarjana />
        <UnivPengajarLps />
        <ContactButton />
        <Promo />
      </div>
    </>
  );
};

export default LesPrivatPascaSarjanaSlug;
