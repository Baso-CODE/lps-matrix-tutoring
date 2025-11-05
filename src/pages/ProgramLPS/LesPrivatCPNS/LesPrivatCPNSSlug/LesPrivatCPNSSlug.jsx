import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarCPNSData,
  testimonialWaCPNSData,
  testimoniWaSliderData,
} from "../../../../helpers/DummyData/CPNS/cpnsDammyData";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AsalSiswaLPS from "../../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS";
import ApaAjaYgDiPeroleh from "../Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh";
import BenefitLolosCPNS from "../Components/BenefitLolosCPNS/BenefitLolosCPNS";
import CpnsStages from "../Components/CpnsStages/CpnsStages";
import HeadingCPNS from "../Components/HeadingCPNS/HeadingCPNS";
import JadwalBelajarCPNS from "../Components/JadwalBelajarCPNS/JadwalBelajarCPNS";
import MateriLPSCPNS from "../Components/MateriLPSCPNS/MateriLPSCPNS";
import PaketBelajarCPNS from "../Components/PaketBelajarCPNS/PaketBelajarCPNS";
import ProgramCPNS from "../Components/ProgramCPNS/ProgramCPNS";
import ProgramIntensifCPNS from "../Components/ProgramIntensifCPNS/ProgramIntensifCPNS";
import SuccesStoryCPNS from "../Components/SuccesStoryCPNS/SuccesStoryCPNS";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";

const LesPrivatCPNSSlug = () => {
  const { slug } = useParams();

  const formatSlugToTitle = (textSlug) => {
    return textSlug
      ? textSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
  };

  const dynamicLocationName = formatSlugToTitle(slug) || "Indonesia";

  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const canonicalUrl = `${baseUrl}/bimbel-persiapan-cpns-terbaik-di/${slug}`;

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/CPNS.webp";

  const pageTitle = `🎓 Bimbel & Les Privat CPNS ${dynamicLocationName} | TWK TIU TKP Terbaik - LPS Education`;
  const descriptionContent = `Kursus Bimbel & Les Privat CPNS di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU PROFESIONAL ✔️ Fokus TWK, TIU, TKP ✔️ Jaminan Lolos! Daftar? Segera kunjungi situs LPS Education...`;
  const ogTitle = `Bimbel & Les Privat CPNS ${dynamicLocationName} | TWK TIU TKP Terbaik - LPS Education`;
  const ogDescription = `Persiapan CPNS dengan bimbel & les privat intensif di ${dynamicLocationName}. Pengajar berpengalaman LPS Education siap membimbing Anda lolos tes TWK, TIU, TKP. Kelas online & offline tersedia.`;
  const twitterTitle = `Bimbel & Les Privat CPNS ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Bimbel les privat CPNS untuk persiapan TWK, TIU, TKP di ${dynamicLocationName}. Raih sukses bersama LPS Education. Tersedia online & offline.`;

  const ogImageAlt = `Bimbel Les Privat CPNS ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "bimbel CPNS",
    "les privat CPNS",
    "persiapan tes CPNS",
    "TWK",
    "TIU",
    "TKP",
    "materi CPNS",
    "soal CPNS",
    "bimbingan CPNS",
    "guru CPNS",
    "ujian CPNS",
    "lolos CPNS",
    "Latsar CPNS",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "SKD CPNS",
    "SKB CPNS",
    "cat cpns",
    "cpns online",
    "cpns offline",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel CPNS ${dynamicLocationName}, les privat CPNS ${dynamicLocationName}, persiapan tes CPNS ${dynamicLocationName}, TWK, TIU, TKP, materi CPNS ${dynamicLocationName}, soal CPNS ${dynamicLocationName}, bimbingan CPNS ${dynamicLocationName}, guru CPNS ${dynamicLocationName}, ujian CPNS ${dynamicLocationName}, lolos CPNS ${dynamicLocationName}, Latsar CPNS ${dynamicLocationName}, LPS Education, SKD CPNS ${dynamicLocationName}, SKB CPNS ${dynamicLocationName}, cat cpns ${dynamicLocationName}`}
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
        <meta property="article:section" content="CPNS" />

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
                        "@id": "${baseUrl}/bimbel-persiapan-cpns-terbaik", 
                        "name": "Bimbel & Les Privat CPNS"
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
        <HeadingCPNS lokasi={dynamicLocationName} />
        <ProgramIntensifCPNS />
        <MateriLPSCPNS />
        <BenefitLolosCPNS />
        <CpnsStages />
        <Slider />
        <PaketBelajarCPNS />
        <ProgramCPNS />
        <ApaAjaYgDiPeroleh />
        <JadwalBelajarCPNS />
        <VisiEndMisiLps />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <GaleryBelajarSiswa description={galleryBelajarCPNSData.description} />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          description={testimoniWaSliderData.description}
          title={testimoniWaSliderData.title}
        />
        <AsalSiswaLPS />
        <SuccesStoryCPNS city={dynamicLocationName} />
        <TestimoniWaSiswa
          cityProp={dynamicLocationName}
          title={testimonialWaCPNSData.title}
          description={testimonialWaCPNSData.description}
          imageDesktop={testimonialWaCPNSData.imageDesktop}
          imageMobile={testimonialWaCPNSData.imageMobile}
        />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />
      </div>
    </>
  );
};

export default LesPrivatCPNSSlug;
