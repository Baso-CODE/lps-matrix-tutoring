import { Helmet } from "react-helmet-async";
import "./LesPrivatPascaSarjana.css";

import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import FasilitasSimakUI from "../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeroLpsPascaSarjana from "./Components/HeroLpsPascaSarjana/HeroLpsPascaSarjana";
import PaketBelajarPascaSarjana from "./Components/PaketBelajarPascaSarjana/PaketBelajarPascaSarjana";
import ProgramIntensiPascaSarjana from "./Components/ProgramIntensiPascaSarjana/ProgramIntensiPascaSarjana";

const LesPrivatPascaSarjana = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const canonicalUrl = `${baseUrl}/les-privat-pascasarjana-terbaik`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"; //

  const pageTitle = `🎓 Les Privat Pascasarjana Online & Offline | Persiapan S2/S3 - LPS Education`;
  const descriptionContent = `Dapatkan bimbingan les privat pascasarjana (S2/S3) untuk persiapan ujian masuk UI, UGM, ITB, Unair, dan PTN lainnya dari LPS Education. Tersedia online dan guru datang ke rumah. Pengajar profesional.`;
  const ogTitle = `Les Privat Pascasarjana Online & Offline | Persiapan S2/S3 - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Program les privat pascasarjana (S2/S3) intensif untuk membantu Anda lolos seleksi universitas ternama. Pengajar berpengalaman, materi lengkap, dan fasilitas terbaik dari LPS Education.`;
  const twitterTitle = `Les Privat Pascasarjana | LPS Education`;
  const twitterDescription = `Persiapan pascasarjana (S2/S3) terbaik dengan bimbingan privat online atau guru datang ke rumah. Lolos ujian masuk PTN favorit bersama LPS Education.`;

  const ogImageAlt = "Les Privat Pascasarjana Online Offline LPS Education";

  const articleTags = [
    "les privat pascasarjana",
    "bimbingan pascasarjana",
    "persiapan S2",
    "persiapan S3",
    "ujian masuk pascasarjana",
    "les masuk UI S2",
    "les masuk UGM S2",
    "les masuk ITB S2",
    "les masuk Unair S2",
    "bimbingan tesis",
    "bimbingan disertasi",
    "les privat online",
    "guru privat pascasarjana",
    "LPS Education", // Mengganti LPS Education dengan LPS Education
    "TOEFL ITP",
    "IELTS",
    "TPA OTO Bappenas",
    "TPU",
    "TOEFL-like",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat pascasarjana, bimbingan pascasarjana, persiapan S2, persiapan S3, ujian masuk pascasarjana, les masuk UI S2, les masuk UGM S2, les masuk ITB S2, les masuk Unair S2, bimbingan tesis, bimbingan disertasi, les privat online, guru privat pascasarjana, LPS Education, TOEFL ITP, IELTS, TPA OTO Bappenas, TPU, TOEFL-like`}
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
        <meta property="article:section" content="Les Privat Pascasarjana" />{" "}
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
        <HeroLpsPascaSarjana />
        <Slider />
        <FasilitasSimakUI />
        <PaketBelajarPascaSarjana />
        <ProgramIntensiPascaSarjana />
        {/* <InformationProgram programType={"lesprivat-pascasarjana"} /> */}
        <VisiEndMisiLps />
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

export default LesPrivatPascaSarjana;
