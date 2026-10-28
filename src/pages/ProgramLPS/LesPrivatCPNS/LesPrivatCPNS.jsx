import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";

import {
  galleryBelajarCPNSData,
  testimonialWaCPNSData,
  testimoniWaSliderData,
} from "../../../helpers/DummyData/CPNS/cpnsDammyData";

import "./LesPrivatCPNS.css";

// ========================================
// BELOW THE FOLD - LAZY LOADING
// ========================================

const ProgramIntensifCPNS = lazy(
  () => import("./Components/ProgramIntensifCPNS/ProgramIntensifCPNS"),
);

const MateriLPSCPNS = lazy(
  () => import("./Components/MateriLPSCPNS/MateriLPSCPNS"),
);

const BenefitLolosCPNS = lazy(
  () => import("./Components/BenefitLolosCPNS/BenefitLolosCPNS"),
);

const CpnsStages = lazy(() => import("./Components/CpnsStages/CpnsStages"));

const Slider = lazy(() => import("../../../components/Slider/Slider"));

const PaketBelajarCPNS = lazy(
  () => import("./Components/PaketBelajarCPNS/PaketBelajarCPNS"),
);

const ProgramCPNS = lazy(() => import("./Components/ProgramCPNS/ProgramCPNS"));

const ApaAjaYgDiPeroleh = lazy(
  () => import("./Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh"),
);

const JadwalBelajarCPNS = lazy(
  () => import("./Components/JadwalBelajarCPNS/JadwalBelajarCPNS"),
);

const VisiEndMisiLps = lazy(
  () => import("../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
);

const ProfileTutor = lazy(
  () => import("../../HomePage/Components/ProfileTutor/ProfileTutor"),
);

const UnivPengajarLps = lazy(
  () => import("../../../components/UnivPengajarLps/UnivPengajarLps"),
);

const GaleryBelajarSiswa = lazy(
  () => import("../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../components/TestimoniWaSlider/TestimoniWaSlider"),
);

const AsalSiswaLPS = lazy(
  () => import("../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS"),
);

const SuccesStoryCPNS = lazy(
  () => import("./Components/SuccesStoryCPNS/SuccesStoryCPNS"),
);

const TestimoniWaSiswa = lazy(
  () => import("../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa"),
);

const AllAlumniLpsImage = lazy(
  () => import("../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage"),
);

const ListSiswaLPS = lazy(() => import("../../ListSiswaLPS/ListSiswaLPS"));

const SliderTestimoniSiswa = lazy(
  () => import("../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa"),
);

// ========================================
// DEFERRED SECTION
// ========================================

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

// ========================================
// WEBSITE CONFIG
// ========================================

const BASE_URL = "https://apps.lesprivatmasukptn.com";

const CANONICAL_URL = `${BASE_URL}/bimbel-persiapan-cpns-terbaik`;

const OG_IMAGE = `${BASE_URL}/images/program/program-LPS-CPNS.webp`;

// ========================================
// HERO IMAGES
// ========================================

// Gunakan file asli terlebih dahulu.
// Setelah optimasi Sharp, ubah URL di sini.

const cpnsImagesDesktop = [
  "/images/program/program-LPS-CPNS-desktop-optimized.webp",
];

const cpnsImagesMobile = [
  "/images/program/program-LPS-CPNS-mobile-optimized.webp",
];

// ========================================
// HERO CONTENT
// ========================================

const cpnsDefaultProgramName = "Guru Les Privat CPNS Terbaik";

const cpnsProgramNameDisplay = "Les Privat Persiapan CPNS (SKD TWK, TIU, TKP)";

const cpnsDescription = [
  `Menjadi PNS adalah impian dari jutaan peserta Tes CPNS. Oleh karena itu, para peserta diharapkan memiliki kompetensi yang mumpuni untuk bisa menghadapi tes CPNS, utamanya pada tahap ujian akademik SKD CPNS <span class="color-highlight">TWK, TIU, dan TKP</span>.`,

  `Bagi Anda yang sedang mencari <span class="color-highlight">les privat CPNS offline</span> (guru les privat ke rumah) maupun les privat online persiapan SKD CPNS, Anda berada di halaman yang tepat. <span class="color-highlight">LPS Education</span> menyediakan program bimbingan belajar CPNS secara offline di wilayah Jabodetabek dan online untuk seluruh Indonesia.`,

  `Guru privat CPNS kami merupakan tutor yang berpengalaman dalam mendampingi peserta mempelajari materi seleksi CPNS. Layanan pembelajaran mencakup pendalaman materi, latihan soal, pembahasan, dan evaluasi untuk membantu meningkatkan kesiapan menghadapi seleksi.`,

  `<span class="color-highlight">LPS Education</span> adalah lembaga penyedia layanan guru les privat ke rumah untuk area Jabodetabek dan les privat online untuk seluruh Indonesia. Selain program <span class="color-highlight">les privat CPNS</span>, kami memiliki berbagai program bimbingan belajar lainnya yang dapat disesuaikan dengan kebutuhan peserta.`,
];

// ========================================
// SEO METADATA
// ========================================

const pageTitle =
  "Bimbel CPNS Online & Les Privat SKD TWK TIU TKP | LPS Education";

const descriptionContent =
  "Persiapan tes CPNS bersama LPS Education. Bimbel CPNS online dan les privat offline Jabodetabek untuk materi SKD, TWK, TIU, TKP, dan latihan soal.";

const ogTitle = pageTitle;

const ogDescription =
  "Program bimbel dan les privat CPNS bersama LPS Education. Belajar materi SKD TWK, TIU, TKP melalui bimbingan intensif online maupun offline.";

const twitterTitle = pageTitle;

const twitterDescription = descriptionContent;

// ========================================
// STRUCTURED DATA
// ========================================

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id": `${CANONICAL_URL}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bimbel Persiapan CPNS",
          item: CANONICAL_URL,
        },
      ],
    },

    {
      "@type": "EducationalOrganization",

      "@id": `${BASE_URL}/#organization`,

      name: "LPS Education",

      url: `${BASE_URL}/`,

      logo: `${BASE_URL}/images/LOGO2-optimized.webp`,
    },

    {
      "@type": "WebPage",

      "@id": `${CANONICAL_URL}#webpage`,

      url: CANONICAL_URL,

      name: pageTitle,

      description: descriptionContent,

      inLanguage: "id-ID",

      breadcrumb: {
        "@id": `${CANONICAL_URL}#breadcrumb`,
      },

      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },

      mainEntity: {
        "@id": `${CANONICAL_URL}#service`,
      },
    },

    {
      "@type": "Service",

      "@id": `${CANONICAL_URL}#service`,

      name: "Bimbel dan Les Privat Persiapan CPNS",

      serviceType: "Bimbingan Belajar Persiapan Seleksi CPNS",

      description: descriptionContent,

      url: CANONICAL_URL,

      provider: {
        "@id": `${BASE_URL}/#organization`,
      },

      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
    },
  ],
};

// ========================================
// MAIN COMPONENT
// ========================================

const LesPrivatCPNS = () => {
  return (
    <>
      {/* ================================= */}
      {/* SEO METADATA */}
      {/* ================================= */}

      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={descriptionContent} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}

        <meta property="og:locale" content="id_ID" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={ogTitle} />

        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={CANONICAL_URL} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content="Program Bimbel dan Les Privat CPNS LPS Education"
        />

        {/* Twitter */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={twitterTitle} />

        <meta name="twitter:description" content={twitterDescription} />

        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ================================= */}
      {/* PAGE CONTENT */}
      {/* ================================= */}

      <div className="container-all">
        {/* ================================= */}
        {/* ABOVE THE FOLD */}
        {/* ================================= */}

        <HeadingLPSProgramDynamic
          defaultProgramName={cpnsDefaultProgramName}
          imageUrlsDesktop={cpnsImagesDesktop}
          imageUrlsMobile={cpnsImagesMobile}
          imageDimensions={{
            desktop: {
              width: 1280,
              height: 720,
            },
            mobile: {
              width: 750,
              height: 750,
            },
          }}
          descriptionParagraphs={cpnsDescription}
          programName={cpnsProgramNameDisplay}
        />

        {/* ================================= */}
        {/* BELOW THE FOLD */}
        {/* ================================= */}

        <DeferredSection minHeight={450}>
          <ProgramIntensifCPNS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <MateriLPSCPNS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <BenefitLolosCPNS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <CpnsStages />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <PaketBelajarCPNS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProgramCPNS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ApaAjaYgDiPeroleh />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <JadwalBelajarCPNS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VisiEndMisiLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProfileTutor />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            description={galleryBelajarCPNSData.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            description={testimoniWaSliderData.description}
            title={testimoniWaSliderData.title}
          />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AsalSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccesStoryCPNS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa
            title={testimonialWaCPNSData.title}
            description={testimonialWaCPNSData.description}
            imageDesktop={testimonialWaCPNSData.imageDesktop}
            imageMobile={testimonialWaCPNSData.imageMobile}
          />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AllAlumniLpsImage />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ListSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <SliderTestimoniSiswa />
        </DeferredSection>
      </div>
    </>
  );
};

export default LesPrivatCPNS;
