import { Helmet } from "react-helmet-async";
import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import KeunggulanEndAlasanMemilih from "../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import ProgramTKA from "./Components/ProgramTKA/ProgramTKA";
import StudentChallenge from "./Components/StudentChallenge/StudentChallenge";
import TKAHeader from "./Components/TKAHeader/TKAHeader";
import "./LesPrivatTKA.css";
import VideoKarantina from "../../../components/VideoKarantina/VideoKarantina";

const LesPrivatTKA = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-tes-kemampuan-akademik`;
  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp";

  const pageTitle = `📘 Program Les Privat TKA (Tes Kemampuan Akademik) | Terbaik - LPS Education`;
  const descriptionContent = `Program Les Privat TKA (Tes Kemampuan Akademik) terbaik dari LPS Education. Persiapan intensif dengan pengajar berpengalaman, metode efektif, dan materi komprehensif untuk menghadapi ujian masuk PTN.`;
  const ogTitle = `📘 Program Les Privat TKA (Tes Kemampuan Akademik) | Terbaik - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Persiapan Les Privat TKA dari LPS Education. Dapatkan bimbingan intensif, pengajar handal, dan materi komprehensif untuk sukses menghadapi Tes Kemampuan Akademik.`;
  const twitterTitle = `Program Les Privat TKA (Tes Kemampuan Akademik) | LPS Education`;
  const twitterDescription = `Siapkan diri Anda menghadapi TKA dengan bimbingan terbaik dari LPS Education. Materi komprehensif, pengajar berpengalaman, dan strategi sukses untuk lolos PTN impian.`;

  const ogImageAlt =
    "Program Les Privat TKA Tes Kemampuan Akademik LPS Education";

  const articleTags = [
    "Les Privat TKA",
    "Program TKA",
    "Bimbel TKA",
    "Tes Kemampuan Akademik",
    "Persiapan TKA",
    "Les Privat UTBK",
    "Belajar TKA Online",
    "Bimbingan Masuk PTN",
    "Materi TKA",
    "Tryout TKA",
    "Strategi TKA",
    "Les Privat Masuk PTN",
    "LPS Education",
    "TKA Saintek",
    "TKA Soshum",
    "Persiapan UTBK TKA",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat TKA, bimbel TKA, program TKA, tes kemampuan akademik, persiapan TKA, les privat UTBK, tryout TKA, materi TKA, strategi TKA, bimbingan masuk PTN, TKA saintek, TKA soshum, les privat masuk PTN, belajar TKA online, LPS Education, persiapan UTBK TKA, lolos PTN, bimbel masuk PTN, intensif TKA, tutor TKA berpengalaman`}
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
        <meta
          property="article:section"
          content="Program Les Privat TKA & UTBK"
        />
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
        <TKAHeader />
        <StudentChallenge />
        <ProgramTKA />
        <Slider />
        <KeunggulanEndAlasanMemilih />
        <VisiEndMisiLps />
        <VideoKarantina />
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa />
        <TestimoniWaSlider />
        <SuccessStory />
        <TestimoniWaSiswa />
        <AllAlumniLpsImage />
        <ListSiswaLPS />
        <SliderTestimoniSiswa />
      </div>
    </>
  );
};

export default LesPrivatTKA;
