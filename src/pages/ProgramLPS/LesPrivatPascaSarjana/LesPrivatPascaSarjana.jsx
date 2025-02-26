import { Helmet } from "react-helmet-async";
import "./LesPrivatPascaSarjana.css";

import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeroLpsPascaSarjana from "./Components/HeroLpsPascaSarjana/HeroLpsPascaSarjana";
import PaketBelajarPascaSarjana from "./Components/PaketBelajarPascaSarjana/PaketBelajarPascaSarjana";
import ProgramIntensiPascaSarjana from "./Components/ProgramIntensiPascaSarjana/ProgramIntensiPascaSarjana";
import ContactFooter from "../../../components/ContactFooter/ContactFooter";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import Promo from "../../../components/Promo/Promo";

const LesPrivatPascaSarjana = () => {
  return (
    <>
      <Helmet>
        <title>
          Les Privat Pasca Sarjana • UI UGM ITB UNAIR UNHAS Undip - Bimbingan
          Belajar Intensif
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
          content="Les Privat Pasca Sarjana • UI, UGM, ITB, Undip - Bimbingan Belajar Intensif"
        />
        <meta
          property="og:description"
          content="Bimbingan belajar privat pasca sarjana dengan pengajar profesional dan fasilitas lengkap untuk persiapan terbaik."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"
        />
        <meta
          name="twitter:title"
          content="Les Privat Pasca Sarjana • UI, UGM, ITB, Undip - Bimbingan Belajar Intensif"
        />
        <meta
          name="twitter:description"
          content="Persiapan pasca sarjana terbaik dengan bimbingan intensif dari LPS Matrix Indonesia bersama pengajar berpengalaman."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeroLpsPascaSarjana />
        <FasilitasSimakUI />
        <PaketBelajarPascaSarjana />
        <ProgramIntensiPascaSarjana />
        <SuccessStory />
        <ContactFooter />
        <UnivPengajarLps />
        <Promo />
        {/* <ContactButton /> */}
      </div>
    </>
  );
};

export default LesPrivatPascaSarjana;
