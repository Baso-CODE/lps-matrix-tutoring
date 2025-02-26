import { Helmet } from "react-helmet-async";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import AsalSiswaLPS from "../Components/AsalSiswaLPS/AsalSiswaLPS";
import CaraBelajarOfflineAtauOnline from "../Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline";
import HeadingUTBK from "../Components/HeadingUTBK/HeadingUTBK";
import MataPelajaranLPS from "../Components/MataPelajaranLPS/MataPelajaranLPS";
import MateriUjianSNBT from "../Components/MateriUjianSNBT/MateriUjianSNBT";
import PerbedaanSBMPTAndSNBT from "../Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT";
import TigaJalurMasukPTN from "../Components/TigaJalurMasukPTN/TigaJalurMasukPTN";
import { useParams } from "react-router-dom";
import Promo from "../../../../components/Promo/Promo";

const LesPrivatUTBKSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Les Privat UTBK SNBT di {slugUpperCase} • Undip, Unair, Unpad, UB,
          Udayana, Simak UI & CBT UGM • Online & Guru Datang ke Rumah - LES
          PRIVAT SBMPTN ™
        </title>
        <meta
          name="description"
          content="Dapatkan persiapan UTBK SNBT terbaik bersama LPS Matrix Indonesia dengan pengajar profesional, metode belajar yang efektif, dan fasilitas lengkap. Siapkan diri Anda untuk masuk PTN impian!"
        />
        <meta
          name="keywords"
          content="UTBK, SNBT, les privat UTBK, bimbingan UTBK, les SNBT, program LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Les Privat UTBK SNBT di ${slugUpperCase} • Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™`}
        />
        <meta
          property="og:description"
          content="Program bimbingan intensif UTBK SNBT dengan pengajar profesional untuk persiapan terbaik masuk PTN favorit Anda."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_UTBK" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Les Privat UTBK SNBT di ${slugUpperCase} • Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM • Online & Guru Datang ke Rumah - LES PRIVAT SBMPTN ™`}
        />
        <meta
          name="twitter:description"
          content="Persiapan UTBK SNBT terbaik dengan pengajar berpengalaman dan fasilitas lengkap dari LPS Matrix Indonesia."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_UTBK" />
      </Helmet>

      <div className="container-all">
        <HeadingUTBK />
        <TigaJalurMasukPTN />
        <PerbedaanSBMPTAndSNBT />
        <MateriUjianSNBT />
        <CaraBelajarOfflineAtauOnline />
        <MataPelajaranLPS />
        <AsalSiswaLPS />
        <UnivPengajarLps />
        <ContactButton />
        <Promo />
      </div>
    </>
  );
};

export default LesPrivatUTBKSlug;
