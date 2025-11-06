import { Helmet } from "react-helmet-async";
import "./LesPrivatPascaSarjana.css";

import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import { testimoniWaSliderPascaSarjanaData } from "../../../helpers/DummyData/Pascasarjana/pascasarjanaDammyData";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import FasilitasPascaSarjana from "./Components/FasilitasPascaSarjana";
import PaketBelajarPascaSarjana from "./Components/PaketBelajarPascaSarjana/PaketBelajarPascaSarjana";
import ProgramIntensiPascaSarjana from "./Components/ProgramIntensiPascaSarjana/ProgramIntensiPascaSarjana";

const LesPrivatPascaSarjana = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const pascaSarjanaImagesDescktop = [
    "/images/program/program-LPS-UJIAN-MASUK-PASCASARJANA-S2-S3.png",
  ];

  const pascaSarjanaImagesMobile = [
    "/images/program/program-LPS-UJIAN-MASUK-PASCASARJANA-S2-S3-mobile.png",
  ];

  const pascaSarjanaDefaultProgramName =
    "Les Privat Ujian Masuk Pascasarjana (S2/S3)";
  const pascaSarjanaProgramNameDisplay =
    "Super Intensif Privat Ujian Masuk Simak UI S2/S3 & Pascasarjana PTN Favorit";

  const pascaSarjanaDescription = [
    `Menghadapi ujian masuk Pascasarjana seperti <span class='color-highlight'>SIMAK UI S2/S3</span> dan seleksi Pascasarjana universitas lainnya membutuhkan strategi belajar yang tepat, pemahaman materi yang mendalam, serta pendampingan belajar secara intensif.`,
    `<span class='color-highlight'>LPS Education</span> memiliki Layanan Program Les Privat Persiapan Ujian Masuk Pascasarjana S2/S3 untuk berbagai Perguruan Tinggi di antaranya UI, UGM, ITB, Unpad, UNJ, Unair, dan lainnya. Kami hadir sebagai pendamping belajar Anda agar sukses meraih impian melanjutkan studi ke jenjang yang lebih tinggi.`,
    `Layanan kami mencakup Les Privat Simak UI S2/S3/Profesi/Spesialis, Les Privat SMUP Unpad Pascasarjana, Les Privat SM ITB Pascasarjana, Les Privat UM UGM Pascasarjana, dan ujian masuk Pascasarjana PTN lainnya.`,
    `Program belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan keterampilan penyelesaian soal-soal Ujian Masuk Pascasarjana S2/S3, yaitu <span class='color-highlight'>TPA dan Bahasa Inggris</span>. Kami menjamin jadwal belajar fleksibel dan tutor yang kompeten.`,
  ];
  const canonicalUrl = `${baseUrl}/les-privat-pascasarjana-terbaik`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"; //

  const pageTitle = `🎓 Les Privat Pascasarjana Online & Offline | Persiapan S2/S3 - LPS Education`;
  const descriptionContent = `Dapatkan bimbingan les privat pascasarjana (S2/S3) untuk persiapan ujian masuk UI, UGM, ITB, Unair, dan PTN lainnya dari LPS Education. Tersedia online dan guru datang ke rumah. Pengajar profesional.`;
  const ogTitle = `Les Privat Pascasarjana Online & Offline | Persiapan S2/S3 - LPS Education`;
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
    "LPS Education",
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
        <HeadingLPSProgramDynamic
          defaultProgramName={pascaSarjanaDefaultProgramName}
          imageUrlsDesktop={pascaSarjanaImagesDescktop}
          imageUrlsMobile={pascaSarjanaImagesMobile}
          descriptionParagraphs={pascaSarjanaDescription}
          programName={pascaSarjanaProgramNameDisplay}
        />
        <Slider />
        <FasilitasPascaSarjana />
        <PaketBelajarPascaSarjana />
        <ProgramIntensiPascaSarjana />
        {/* <InformationProgram programType={"lesprivat-pascasarjana"} /> */}
        <VisiEndMisiLps />
        <ProfileTutor />
        <UnivPengajarLps />
        {/* <AlumniLpsNew /> */}
        <GaleryBelajarSiswa />
        <TestimoniWaSlider
          title={testimoniWaSliderPascaSarjanaData.title}
          description={testimoniWaSliderPascaSarjanaData.description}
        />
        <SuccessStory />
        <TestimoniWaSiswa />
        <AllAlumniLpsImage />
        <ListSiswaLPS />
        <SliderTestimoniSiswa />
      </div>
    </>
  );
};

export default LesPrivatPascaSarjana;
