import { Helmet } from "react-helmet";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "./Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarSimakUI from "./Components/PaketBelajarSimakUI/PaketBelajarSimakUI";
import ProgramSimakUI from "./Components/ProgramSimakUI/ProgramSimakUI";
import "./SimakUIAndKKI.css";

import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import FiturDanLayanan from "../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";

const SimakUIAndKKI = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const canonicalUrl = `${baseUrl}/bimbel-les-privat-simak-ui-utul-ugm`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp";

  const pageTitle = `🏫 Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | Terbaik - LPS Education`;
  const descriptionContent = `Bimbel & Les Privat SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) terbaik dari LPS Education. Persiapan intensif, pengajar berpengalaman, dan fasilitas lengkap untuk lolos UI & UGM impian Anda.`;
  const ogTitle = `Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | Terbaik - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Program bimbingan intensif SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dari LPS Education. Dapatkan persiapan terbaik untuk lolos seleksi UI & UGM. Pengajar handal & materi komprehensif.`;
  const twitterTitle = `Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | LPS Education`;
  const twitterDescription = `Siapkan diri Anda untuk SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dengan bimbingan terbaik dari LPS Education. Fasilitas lengkap dan pengajar berpengalaman.`;

  const ogImageAlt = "Bimbel Les Privat SIMAK UI KKI UTUL UGM LPS Education";

  const articleTags = [
    "bimbel SIMAK UI",
    "les privat SIMAK UI",
    "persiapan SIMAK UI",
    "SIMAK KKI UI",
    "les privat KKI UI",
    "bimbel UTUL UGM",
    "CBT UGM",
    "bimbingan masuk UI",
    "bimbingan masuk UGM",
    "les privat PTN",
    "tryout SIMAK UI",
    "materi SIMAK UI",
    "LPS Education", // Mengganti LPS Education dengan LPS Education
    "lolos UI",
    "lolos UGM",
    "SIMAK UI S1",
    "SIMAK UI Vokasi",
    "SIMAK UI Internasional",
    "UTUL UGM CBT",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel SIMAK UI, les privat SIMAK UI, persiapan SIMAK UI, SIMAK KKI UI, les privat KKI UI, bimbel UTUL UGM, CBT UGM, bimbingan masuk UI, bimbingan masuk UGM, les privat PTN, tryout SIMAK UI, materi SIMAK UI, LPS Education, lolos UI, lolos UGM, SIMAK UI S1, SIMAK UI Vokasi, SIMAK UI Internasional, UTUL UGM CBT`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />{" "}
        {/* Diubah ke "article" */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {articleTags.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta property="article:section" content="SIMAK UI & UTUL UGM" />{" "}
        {/* Tambahkan section */}
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "${canonicalUrl}#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="container-all">
        <ProgramSimakUI />
        <FasilitasSimakUI />
        <PaketBelajarSimakUI />
        {/* <ProgramBelajarSIMAKUI /> */}
        <Slider />
        {/* <InformationProgram programType={"simak-ui"} /> */}
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa />
        <TestimoniWaSlider />
        <SuccessStory />
        <TestimoniWaSiswa />
      </div>
    </>
  );
};

export default SimakUIAndKKI;
