import { Helmet } from "react-helmet";
import ContactButton from "../../../../components/ContactButton/ContactButton";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import ApaAjaYgDiPeroleh from "../Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh";
import HeadingCPNS from "../Components/HeadingCPNS/HeadingCPNS";
import JadwalBelajarCPNS from "../Components/JadwalBelajarCPNS/JadwalBelajarCPNS";
import MateriLPSCPNS from "../Components/MateriLPSCPNS/MateriLPSCPNS";
import ProgramCPNS from "../Components/ProgramCPNS/ProgramCPNS";
import ProgramIntensifCPNS from "../Components/ProgramIntensifCPNS/ProgramIntensifCPNS";
import { useParams } from "react-router-dom";

const LesPrivatCPNSSlug = () => {
  const { slug } = useParams();

  const slugUpperCase = slug.toUpperCase();
  return (
    <>
      <Helmet>
        <title>
          Bimbel CPNS di {slugUpperCase} - Les Privat Intensif Tes CPNS TWK TIU
          TKP - Privat Online dan Offline
        </title>
        <meta
          name="description"
          content="Dapatkan bimbingan intensif CPNS bersama LPS Matrix Indonesia untuk persiapan ujian CPNS dengan pengajar berpengalaman dan fasilitas lengkap."
        />
        <meta
          name="keywords"
          content="les privat CPNS, bimbingan CPNS, ujian CPNS, les privat LPS Matrix, persiapan CPNS"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Bimbel CPNS di ${slugUpperCase} - Les Privat Intensif Tes CPNS TWK TIU TKP
      - Privat Online dan Offline`}
        />
        <meta
          property="og:description"
          content="Bimbingan intensif untuk persiapan ujian CPNS dengan pengajar profesional dan fasilitas lengkap, memastikan persiapan optimal."
        />
        <meta property="og:image" content="URL_GAMBAR_OG_CPNS" />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Bimbel CPNS di ${slugUpperCase} - Les Privat Intensif Tes CPNS TWK TIU TKP
          - Privat Online dan Offline`}
        />
        <meta
          name="twitter:description"
          content="Persiapan terbaik untuk ujian CPNS dengan bimbingan intensif dari LPS Matrix Indonesia, bersama pengajar berpengalaman untuk hasil optimal."
        />
        <meta name="twitter:image" content="URL_GAMBAR_TWITTER_CPNS" />
      </Helmet>

      <div className="container-all">
        <HeadingCPNS />
        <ProgramIntensifCPNS />
        <MateriLPSCPNS />
        <ApaAjaYgDiPeroleh />
        <ProgramCPNS />
        <JadwalBelajarCPNS />
        <UnivPengajarLps />
        <ContactButton />
      </div>
    </>
  );
};

export default LesPrivatCPNSSlug;
