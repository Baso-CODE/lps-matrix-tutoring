import { Helmet } from "react-helmet-async";
import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import KeunggulanEndAlasanMemilih from "../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import SolusiSuksesMasukPTN from "../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import CaraBelajarOfflineAtauOnline from "./Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline";
import HeadingUTBK from "./Components/HeadingUTBK/HeadingUTBK";
import MataPelajaranLPS from "./Components/MataPelajaranLPS/MataPelajaranLPS";
import MateriUjianSNBT from "./Components/MateriUjianSNBT/MateriUjianSNBT";
import PerbedaanSBMPTAndSNBT from "./Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT";
import TigaJalurMasukPTN from "./Components/TigaJalurMasukPTN/TigaJalurMasukPTN";
import "./LesPrivatUTBK.css";

const LesPrivatUTBK = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-utbk-terbaik`;
  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/UTBK.webp";

  // Judul dan Deskripsi yang dioptimalkan dengan branding "LPS Education"
  const pageTitle = `🎓 Bimbel & Les Privat UTBK SNBT | Persiapan Masuk PTN Favorit - LPS Education`;
  const descriptionContent = `Persiapan lengkap UTBK SNBT online & offline terbaik bersama LPS Education. Tingkatkan skor Anda untuk lolos PTN impian seperti UI, UGM, ITB, UNDIP, UNPAD, UNAIR, UB, ITS, dan lainnya.`;
  const ogTitle = `Bimbel & Les Privat UTBK SNBT | Persiapan Masuk PTN Favorit - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Siapkan diri Anda untuk UTBK SNBT dengan bimbingan intensif dari LPS Education. Program online & offline terbaik untuk lolos PTN favorit. Jaminan belajar fokus dan materi lengkap.`;
  const twitterTitle = `Bimbel & Les Privat UTBK SNBT | LPS Education`;
  const twitterDescription = `Lolos UTBK SNBT & masuk PTN impian Anda! Bimbel & Les Privat LPS Education hadir dengan program persiapan terbaik online & offline.`;

  const ogImageAlt = "Bimbel Les Privat UTBK SNBT LPS Education";

  const articleTags = [
    "bimbel UTBK SNBT",
    "les privat UTBK",
    "les SNBT",
    "persiapan masuk PTN",
    "UTBK online",
    "UTBK offline",
    "guru privat UTBK",
    "soal UTBK",
    "tryout UTBK",
    "bimbingan SBMPTN",
    "Simak UI",
    "UTUL UGM",
    "jalur mandiri PTN",
    "masuk Kedokteran",
    "materi TPS",
    "penalaran matematika",
    "literasi bahasa",
    "LPS Education",
    "SNBP",
    "SNPMB",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel UTBK SNBT, les privat UTBK, les SNBT, persiapan masuk PTN, UTBK online, UTBK offline, guru privat UTBK, soal UTBK, tryout UTBK, bimbingan SBMPTN, Simak UI, UTUL UGM, jalur mandiri PTN, masuk Kedokteran, materi TPS, penalaran matematika, literasi bahasa, LPS Education, SNBP, SNPMB`}
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
        <meta property="article:section" content="UTBK SNBT" />{" "}
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
        <HeadingUTBK />
        <MataPelajaranLPS />
        <TigaJalurMasukPTN />
        <PerbedaanSBMPTAndSNBT />
        <MateriUjianSNBT />
        {/* <InformationProgram programType={"utbk"} /> */}
        <Slider />
        <VisiEndMisiLps />
        <ProfileTutor />
        <UnivPengajarLps />
        <KeunggulanEndAlasanMemilih />
        <SolusiSuksesMasukPTN />
        <CaraBelajarOfflineAtauOnline />
        <AlumniLpsNew />
        <GaleryBelajarSiswa />
        <TestimoniWaSlider />
        <SuccessStory />
        <TestimoniWaSiswa />
      </div>
    </>
  );
};

export default LesPrivatUTBK;
