import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarOSNData,
  successStoryWaSliderOSN,
} from "../../../../helpers/DummyData/OSN/osn_dummy_data";
import FiturDanLayanan from "../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import FasilitasOSN from "../Components/FasilitasOSN";
import OsnCurriculumOverview from "../Components/OsnCurriculumOverview/OsnCurriculumOverview";
import OsnWinnerBenefits from "../Components/OsnWinnerBenefits/OsnWinnerBenefits";
import PaketBelajarOSN from "../Components/PaketBelajarOSN/PaketBelajarOSN";
import ProgramIntensiOSN from "../Components/ProgramIntensiOSN/ProgramIntensiOSN";

const LesPrivatOSNSlug = () => {
  const { slug } = useParams();

  const osnImagesDescktop = ["/images/program/program-LPS-OLIMPIADE.png"];
  const osnImagesMobile = ["/images/program/program-LPS-OLIMPIADE-mobile.png"];

  const osnDefaultProgramName = "Les Privat OSN, ISO, IMO, SEAMO";
  const osnProgramNameDisplay =
    "Les Privat OSN, ISO, IMO, SEAMO (ONLINE & OFFLINE)";

  const osnDescription = [
    `<span class='color-highlight'>LPS Education</span> - Program Les Privat OSN, ISO, IMO dirancang khusus untuk siswa yang ingin meraih prestasi luar biasa di ajang <span class='color-highlight'>Olimpiade Sains Nasional (OSN)</span> serta kompetisi internasional seperti ISO, IMO, dan SEAMO. Program ini tersedia dalam format <span class='color-highlight'>Privat Offline</span> dan <span class='color-highlight'>Privat Online</span>.`,
    `Dengan guru les privat yang berpengalaman mendampingi siswa persiapan Olimpiade di tingkat nasional maupun internasional, program ini memastikan <span class='color-highlight'>pendalaman konsep dasar</span>, penyelesaian soal-soal tingkat tinggi, dan bimbingan intensif. Progress belajar siswa dipantau secara berkala oleh Tim Akademik.`,
    `Target utama kami adalah mendukung siswa dalam meraih medali bergengsi pada ajang Olimpiade. Fokus utama kami terletak pada penguasaan materi yang mendalam dan pencapaian prestasi akademik yang luar biasa. Wujudkan potensi terbaik Anda di bidang akademik dengan <span class='color-highlight'>Program Super Intensif Privat OSN dan Olimpiade Internasional</span>.`,
  ];

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
              "position": 1,
              "item": {
                "@id": "${baseUrl}",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "${baseUrl}/les-privat-osn-terbaik", 
                "name": "Les Privat OSN"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "Les Privat OSN di ${dynamicLocationName}"
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Les Privat Olimpiade Sains Nasional (OSN) terbaik di ${dynamicLocationName} untuk SD, SMP, dan SMA. Bimbingan intensif meraih medali OSN/Olimpiade Internasional.",
          "url": "${canonicalUrl}",
          "areaServed": "${dynamicLocationName}", 
          "sameAs": [
            "${baseUrl}",
            "https://www.instagram.com/lps.privatsbmptn/", 
            "https://www.tiktok.com/@lesprivatsbmptn.com?_r=1&_t=ZS-918OcGnyuIS" 
          ],
          "brand": {
            "@type": "Brand",
            "name": "LPS Education",
            "logo": "${baseUrl}/images/LOGO2.webp" 
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-858-8756-2039", 
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian"]
          },
          "keywords": "${articleTags.join(", ")}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}", 
          "inLanguage": "id-ID",
          "description": "${descriptionContent}",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat OSN dan Olimpiade Internasional di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Olimpiade Sains",
            "areaServed": "${dynamicLocationName}",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "url": "${canonicalUrl}"
            }
          }
        },

        {
          "@type": "FAQPage",
          "@id": "${canonicalUrl}#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Bidang studi OSN apa saja yang dilayani LPS Education?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami melayani bimbingan OSN untuk berbagai bidang, termasuk Matematika, Fisika, Kimia, Biologi, Komputer/Informatika, Kebumian, Astronomi, dan Ekonomi untuk jenjang SD, SMP, dan SMA."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah program Les Privat OSN LPS Education juga mempersiapkan untuk Olimpiade Internasional?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, program kami dirancang secara komprehensif untuk mempersiapkan siswa meraih prestasi di tingkat Nasional (OSN) maupun kompetisi Internasional seperti ISO, IMO, dan SEAMO."
              }
            },
            {
              "@type": "Question",
              "name": "Siapa pengajar yang akan membimbing Les Privat OSN?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tutor kami adalah alumni peraih medali OSN atau mahasiswa/alumni dari PTN unggulan (UI, ITB, UGM) yang sangat berpengalaman dalam membimbing materi Olimpiade tingkat lanjut."
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
          city={dynamicLocationName}
          defaultProgramName={osnDefaultProgramName}
          imageUrlsDesktop={osnImagesDescktop}
          imageUrlsMobile={osnImagesMobile}
          descriptionParagraphs={osnDescription}
          programName={osnProgramNameDisplay}
        />
        <ProgramIntensiOSN />
        <Slider />
        <FasilitasOSN />
        <PaketBelajarOSN />
        {/* <PaketSesiOSN /> */}
        <OsnCurriculumOverview />
        <OsnWinnerBenefits />
        {/* <InformationProgram programType={"osn"} /> */}
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <AlumniLpsNew city={dynamicLocationName} />
        <GaleryBelajarSiswa
          title={galleryBelajarOSNData.title}
          description={galleryBelajarOSNData.description}
        />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          description={successStoryWaSliderOSN.description}
          title={successStoryWaSliderOSN.title}
        />
        <SuccessStory city={dynamicLocationName} />
        <TestimoniWaSiswa cityProp={dynamicLocationName} />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />
      </div>
    </>
  );
};

export default LesPrivatOSNSlug;
