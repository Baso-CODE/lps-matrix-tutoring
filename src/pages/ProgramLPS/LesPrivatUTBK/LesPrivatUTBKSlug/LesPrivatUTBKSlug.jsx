import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import KeunggulanEndAlasanMemilih from "../../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import SolusiSuksesMasukPTN from "../../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import CaraBelajarOfflineAtauOnline from "../Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline";
import HeadingUTBK from "../Components/HeadingUTBK/HeadingUTBK";
import MataPelajaranLPS from "../Components/MataPelajaranLPS/MataPelajaranLPS";
import MateriUjianSNBT from "../Components/MateriUjianSNBT/MateriUjianSNBT";
import PerbedaanSBMPTAndSNBT from "../Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT";
import TigaJalurMasukPTN from "../Components/TigaJalurMasukPTN/TigaJalurMasukPTN";

const LesPrivatUTBKSlug = () => {
  const { slug } = useParams();

  const formatSlugToTitle = (textSlug) => {
    return textSlug
      ? textSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
  };

  const dynamicLocationName = formatSlugToTitle(slug) || "Indonesia"; // Nama lokasi dinamis

  const baseUrl = "https://apps.lesprivatmasukptn.com";
  // URL kanonis untuk halaman slug ini, asumsikan struktur: /les-privat-utbk-terbaik-di/:slug
  const canonicalUrl = `${baseUrl}/les-privat-utbk-terbaik-di/${slug}`;

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/UTBK.webp"; // Pastikan URL gambar ini benar

  // Judul dan Deskripsi yang Optimal dengan brand "LPS Education" dan lokasi dinamis
  const pageTitle = `🎓 Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | Masuk PTN Favorit - LPS Education`;
  const descriptionContent = `Kursus Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Persiapan Komprehensif Masuk PTN Favorit. Daftar? Segera kunjungi situs LPS Education...`;
  const ogTitle = `Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | Masuk PTN Favorit - LPS Education`;
  const ogDescription = `Siapkan diri Anda untuk UTBK SNBT dengan bimbingan intensif dari LPS Education di ${dynamicLocationName}. Program terbaik untuk lolos PTN favorit. Jaminan belajar fokus dan materi lengkap.`;
  const twitterTitle = `Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Lolos UTBK SNBT & masuk PTN impian Anda! Bimbel & Les Privat LPS Education di ${dynamicLocationName} hadir dengan program persiapan terbaik online & offline.`;

  const ogImageAlt = `Bimbel Les Privat UTBK SNBT ${dynamicLocationName} LPS Education`;

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
    dynamicLocationName.toLowerCase(),
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
          content={`bimbel UTBK SNBT ${dynamicLocationName}, les privat UTBK ${dynamicLocationName}, les SNBT ${dynamicLocationName}, persiapan masuk PTN ${dynamicLocationName}, UTBK online ${dynamicLocationName}, UTBK offline ${dynamicLocationName}, guru privat UTBK ${dynamicLocationName}, soal UTBK ${dynamicLocationName}, tryout UTBK ${dynamicLocationName}, bimbingan SBMPTN ${dynamicLocationName}, Simak UI ${dynamicLocationName}, UTUL UGM ${dynamicLocationName}, jalur mandiri PTN ${dynamicLocationName}, masuk Kedokteran ${dynamicLocationName}, TPS ${dynamicLocationName}, penalaran matematika ${dynamicLocationName}, literasi bahasa ${dynamicLocationName}, LPS Education, SNBP ${dynamicLocationName}, SNPMB ${dynamicLocationName}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
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
        <meta property="article:section" content="UTBK SNBT" />

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
                        "@id": "${baseUrl}/les-privat-utbk-terbaik",
                        "name": "Bimbel & Les Privat UTBK SNBT"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
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

export default LesPrivatUTBKSlug;
