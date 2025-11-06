import { Helmet } from "react-helmet-async";
import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import VideoKarantina from "../../../components/VideoKarantina/VideoKarantina";
import { galleryBelajarSiswaUTBK } from "../../../helpers/DummyData/UTBK/utbk_dummyData";
import KeunggulanEndAlasanMemilih from "../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import SolusiSuksesMasukPTN from "../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import CaraBelajarOfflineAtauOnline from "./Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline";
import MataPelajaranLPSNew from "./Components/MataPelajaranLPSNew/MataPelajaranLPSNew";
import MateriUjianSNBT from "./Components/MateriUjianSNBT/MateriUjianSNBT";
import PerbedaanSBMPTAndSNBT from "./Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT";
import TigaJalurMasukPTN from "./Components/TigaJalurMasukPTN/TigaJalurMasukPTN";
import "./LesPrivatUTBK.css";

const LesPrivatUTBK = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-utbk-terbaik`;
  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/UTBK.webp";

  const utbkImagesDescktop = [
    "/images/program/program-LPS-SUPERCAMP-UTBK-SNBT.png",
    "/images/program/program-LPS-UTBK-SNBT.png",
  ];

  const utbkImagesMobile = [
    "/images/program/program-LPS-SUPERCAMP-UTBK-SNBT-mobile.png",
    "/images/program/program-LPS-UTBK-SNBT-mobile.png",
  ];

  const utbkDefaultProgramName = "Les Privat Persiapan UTBK SNBT";

  const utbkDescription = [
    // Paragraf 1
    `Program <span class='color-highlight'>Super Intensif UTBK SNBT</span> menawarkan pembelajaran privat yang berfokus pada pemahaman mendalam konsep dasar dan latihan intensif untuk kesiapan UTBK. Dengan bimbingan tutor berpengalaman, kami hadir di rumah atau secara online. Program ini dirancang untuk meningkatkan keterampilan mengerjakan soal dan pemahaman materi esensial, didukung evaluasi berkala oleh <span class='color-highlight'>Tim Akademik LPS Education</span> yang akan memberikan rekomendasi untuk mendukung kemajuan belajar siswa.`,

    // Paragraf 2
    `Tujuan program ini adalah memastikan siswa dapat meraih hasil terbaik dan lolos ke perguruan tinggi impian mereka melalui pendampingan yang fokus dan strategis.`,
  ];

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
        <HeadingLPSProgramDynamic
          defaultProgramName={utbkDefaultProgramName}
          imageUrlsDesktop={utbkImagesDescktop}
          imageUrlsMobile={utbkImagesMobile}
          descriptionParagraphs={utbkDescription}
          programName="Bimbel & Les Privat UTBK SNBT"
        />
        <TigaJalurMasukPTN />
        <MataPelajaranLPSNew />
        <PerbedaanSBMPTAndSNBT />
        <MateriUjianSNBT />
        <Slider />
        <VisiEndMisiLps />
        <VideoKarantina />
        <ProfileTutor />
        <UnivPengajarLps />
        <KeunggulanEndAlasanMemilih />
        <SolusiSuksesMasukPTN />
        <CaraBelajarOfflineAtauOnline />
        <AlumniLpsNew />
        <GaleryBelajarSiswa description={galleryBelajarSiswaUTBK.description} />
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

export default LesPrivatUTBK;
