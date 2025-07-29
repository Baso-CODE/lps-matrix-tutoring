import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import FiturDanLayanan from "../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import HeroLpsOSN from "../Components/HeroLpsOSN/HeroLpsOSN";
import OsnCurriculumOverview from "../Components/OsnCurriculumOverview/OsnCurriculumOverview";
import OsnWinnerBenefits from "../Components/OsnWinnerBenefits/OsnWinnerBenefits";
import PaketBelajarOSN from "../Components/PaketBelajarOSN/PaketBelajarOSN";
import PaketSesiOSN from "../Components/PaketSesiOSN/PaketSesiOSN";
import ProgramIntensiOSN from "../Components/ProgramIntensiOSN/ProgramIntensiOSN";

const LesPrivatOSNSlug = () => {
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

  const canonicalUrl = `${baseUrl}/les-privat-osn-terbaik-di/${slug}`;

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/OSN.webp";

  const pageTitle = `📚 Les Privat Olimpiade OSN ${dynamicLocationName} | LPS Education Terbaik #1`;
  const descriptionContent = `Kursus Les Privat Olimpiade OSN di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs LPS Education...`;
  const ogTitle = `Les Privat Olimpiade OSN ${dynamicLocationName} Terbaik - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Persiapkan diri untuk Olimpiade Sains Nasional (OSN) dengan les privat intensif di ${dynamicLocationName}. Pengajar berpengalaman LPS Education siap membimbing siswa SD, SMP, SMA meraih medali.`;
  const twitterTitle = `Les Privat Olimpiade OSN ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Bimbel les privat OSN (Olimpiade Sains Nasional) untuk siswa SD, SMP, SMA di ${dynamicLocationName}. Tingkatkan kemampuan sains dan raih prestasi bersama LPS Education.`;
  // --- AKHIR PENYESUAIAN ---

  const ogImageAlt = `Les Privat Olimpiade OSN ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "les privat OSN",
    "bimbel OSN",
    "Olimpiade Sains Nasional",
    "persiapan OSN SD",
    "persiapan OSN SMP",
    "persiapan OSN SMA",
    "OSN Matematika",
    "OSN Fisika",
    "OSN Kimia",
    "OSN Biologi",
    "OSN Komputer",
    "OSN Astronomi",
    "OSN Kebumian",
    "OSN Geografi",
    "OSN Ekonomi",
    "OSN online",
    "guru privat OSN",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "Olimpiade",
    "KSN",
    "IMO",
    "JISMO",
    "ISO",
    "LPS Education",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat OSN ${dynamicLocationName}, bimbingan OSN ${dynamicLocationName}, Olimpiade Sains Nasional ${dynamicLocationName}, persiapan OSN SD ${dynamicLocationName}, persiapan OSN SMP ${dynamicLocationName}, persiapan OSN SMA ${dynamicLocationName}, OSN Matematika ${dynamicLocationName}, OSN Fisika ${dynamicLocationName}, OSN Kimia ${dynamicLocationName}, OSN Biologi ${dynamicLocationName}, OSN Komputer ${dynamicLocationName}, guru privat OSN ${dynamicLocationName}, LPS Education, bimbel OSN ${dynamicLocationName}, kursus OSN ${dynamicLocationName}, juara OSN ${dynamicLocationName}`}
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
        <meta property="article:section" content="Olimpiade" />

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
                        "@id": "${baseUrl}/les-privat-osn-terbaik", 
                        "name": "Les Privat OSN"
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
        <HeroLpsOSN />
        <ProgramIntensiOSN />
        <Slider />
        <FasilitasSimakUI />
        <PaketBelajarOSN />
        <PaketSesiOSN />
        <OsnCurriculumOverview />
        <OsnWinnerBenefits />
        {/* <InformationProgram programType={"osn"} /> */}
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

export default LesPrivatOSNSlug;
