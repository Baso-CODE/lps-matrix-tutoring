import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";

import { testimoniWaSliderDataSDSMPSMA } from "../../../../helpers/DummyData/SDSMPSMA/sdsmpsma_dummyData";

// ========================================
// LAZY COMPONENTS
// ========================================

const FasilitasSDSMPSMA = lazy(
  () => import("../Components/FasilitasSDSMPSMA/FasilitasSDSMPSMA"),
);

const ProgramIntensifLpsSDSMPSMA = lazy(
  () =>
    import("../Components/ProgramIntensifLpsSDSMPSMA/ProgramIntensifLpsSDSMPSMA"),
);

const PaketBelajarSDSMPSMA = lazy(
  () => import("../Components/PaketBelajarSDSMPSMA/PaketBelajarSDSMPSMA"),
);

const Slider = lazy(() => import("../../../../components/Slider/Slider"));

const VisiEndMisiLps = lazy(
  () => import("../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
);

const ProgramBelajarLps = lazy(
  () =>
    import("../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps"),
);

const FiturDanLayanan = lazy(
  () => import("../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan"),
);

const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("../../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);

const VideoKarantina = lazy(
  () => import("../../../../components/VideoKarantina/VideoKarantina"),
);

const ProfileTutor = lazy(
  () => import("../../../HomePage/Components/ProfileTutor/ProfileTutor"),
);

const UnivPengajarLps = lazy(
  () => import("../../../../components/UnivPengajarLps/UnivPengajarLps"),
);

const AlumniLpsNew = lazy(
  () => import("../../../../components/AlumniLpsNew/AlumniLpsNew"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../../components/TestimoniWaSlider/TestimoniWaSlider"),
);

const TestimoniWaSiswa = lazy(
  () =>
    import("../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa"),
);

const AllAlumniLpsImage = lazy(
  () => import("../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage"),
);

const ListSiswaLPS = lazy(() => import("../../../ListSiswaLPS/ListSiswaLPS"));

const SliderTestimoniSiswa = lazy(
  () =>
    import("../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa"),
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

const MAIN_URL = `${BASE_URL}/les-privat-sd-smp-sma-terbaik`;

const SLUG_PATH = "/les-privat-sd-smp-sma-terbaik-di";

const OG_IMAGE = `${BASE_URL}/images/program/SD,SMP,SMA.webp`;

// ========================================
// OPTIMIZED HERO IMAGES
// ========================================

const sdsmpsmaImagesDesktop = [
  "/images/program/program-LPS-SD-desktop-optimized.webp",
  "/images/program/program-LPS-SMP-desktop-optimized.webp",
  "/images/program/program-LPS-SMA-desktop-optimized.webp",
];

const sdsmpsmaImagesMobile = [
  "/images/program/program-LPS-SD-mobile-optimized.webp",
  "/images/program/program-LPS-SMP-mobile-optimized.webp",
  "/images/program/program-LPS-SMA-mobile-optimized.webp",
];

// Sesuaikan jika hasil akhir Sharp memiliki ukuran berbeda.
// const HERO_DIMENSIONS = {
//   desktop: {
//     width: 1280,
//     height: 720,
//   },
//   mobile: {
//     width: 750,
//     height: 750,
//   },
// };

// ========================================
// HERO CONTENT
// ========================================

const PROGRAM_NAME = "Les Privat SD SMP SMA";

const sdsmpSmaDescription = [
  `<span class="color-highlight">Program Intensif Privat SD SMP SMA</span> merupakan program bimbingan belajar untuk meningkatkan pemahaman materi akademik sekolah dan persiapan ujian. Tersedia layanan <span class="color-highlight">Privat Offline (guru datang ke rumah)</span> dan <span class="color-highlight">Privat Online</span> bersama tutor berpengalaman.`,

  `Pembelajaran difokuskan pada pendalaman konsep, latihan soal, dan persiapan <span class="color-highlight">PR, Ulangan Harian, Ujian Semester, Ujian Sekolah, serta TKA (Tes Kemampuan Akademik)</span>. Perkembangan belajar siswa dimonitor dan dievaluasi oleh Tim Akademik LPS Education.`,

  `Melalui <span class="color-highlight">Program Intensif Privat SD SMP SMA</span>, LPS Education membantu siswa meningkatkan kemampuan akademik, membangun kebiasaan belajar yang baik, dan mempersiapkan diri menghadapi ujian maupun seleksi masuk sekolah unggulan.`,
];

// ========================================
// HELPERS
// ========================================

const formatSlugToTitle = (value = "") => {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// ========================================
// STRUCTURED DATA
// ========================================

const createStructuredData = ({
  canonicalUrl,
  locationName,
  pageTitle,
  description,
}) => ({
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "BreadcrumbList",

      "@id": `${canonicalUrl}#breadcrumb`,

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
          name: "Les Privat SD SMP SMA",
          item: MAIN_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `Les Privat SD SMP SMA di ${locationName}`,
          item: canonicalUrl,
        },
      ],
    },

    {
      "@type": "EducationalOrganization",

      "@id": `${BASE_URL}/#organization`,

      name: "LPS Education",

      url: `${BASE_URL}/`,

      logo: `${BASE_URL}/images/LOGO2.webp`,
    },

    {
      "@type": "WebPage",

      "@id": `${canonicalUrl}#webpage`,

      url: canonicalUrl,

      name: pageTitle,

      description,

      inLanguage: "id-ID",

      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },

      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },

      mainEntity: {
        "@id": `${canonicalUrl}#service`,
      },
    },

    {
      "@type": "Service",

      "@id": `${canonicalUrl}#service`,

      name: `Les Privat SD SMP SMA di ${locationName}`,

      serviceType: "Bimbingan Belajar Akademik SD SMP SMA",

      description,

      url: canonicalUrl,

      provider: {
        "@id": `${BASE_URL}/#organization`,
      },

      areaServed: {
        "@type": "Place",
        name: locationName,
      },
    },
  ],
});

// ========================================
// MAIN COMPONENT
// ========================================

const LesPrivatSDSMPSMASlug = () => {
  const { slug } = useParams();

  const safeSlug = slug || "";

  const dynamicLocationName = formatSlugToTitle(safeSlug) || "Indonesia";

  const canonicalUrl = `${BASE_URL}${SLUG_PATH}/${encodeURIComponent(
    safeSlug,
  )}`;

  // ========================================
  // DYNAMIC SEO METADATA
  // ========================================

  const pageTitle = `Les Privat SD SMP SMA di ${dynamicLocationName} | LPS Education`;

  const descriptionContent = `Les privat SD, SMP, dan SMA di ${dynamicLocationName} bersama LPS Education. Tersedia guru privat online dan kunjungan ke rumah sesuai area layanan.`;

  const ogTitle = pageTitle;

  const ogDescription = `Bimbingan belajar privat SD, SMP, dan SMA di ${dynamicLocationName}. Pendampingan akademik, latihan soal, dan persiapan ujian bersama LPS Education.`;

  const structuredData = createStructuredData({
    canonicalUrl,
    locationName: dynamicLocationName,
    pageTitle,
    description: descriptionContent,
  });

  return (
    <>
      {/* ================================= */}
      {/* SEO METADATA */}
      {/* ================================= */}

      <Helmet>
        <title>{pageTitle}</title>

        <meta name="description" content={descriptionContent} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={canonicalUrl} />

        {/* OPEN GRAPH */}

        <meta property="og:locale" content="id_ID" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={ogTitle} />

        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content={`Les Privat SD SMP SMA di ${dynamicLocationName} - LPS Education`}
        />

        {/* TWITTER CARD */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={descriptionContent} />

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
          defaultProgramName={PROGRAM_NAME}
          imageUrlsDesktop={sdsmpsmaImagesDesktop}
          imageUrlsMobile={sdsmpsmaImagesMobile}
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
          descriptionParagraphs={sdsmpSmaDescription}
          programName={PROGRAM_NAME}
          city={dynamicLocationName}
        />

        {/* ================================= */}
        {/* BELOW THE FOLD */}
        {/* ================================= */}

        <DeferredSection minHeight={450}>
          <FasilitasSDSMPSMA />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProgramIntensifLpsSDSMPSMA />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <PaketBelajarSDSMPSMA />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VisiEndMisiLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProgramBelajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <FiturDanLayanan />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <KeunggulanEndAlasanMemilih />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VideoKarantina />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProfileTutor city={dynamicLocationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew city={dynamicLocationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            cityProp={dynamicLocationName}
            title={testimoniWaSliderDataSDSMPSMA.title}
            description={testimoniWaSliderDataSDSMPSMA.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa cityProp={dynamicLocationName} />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AllAlumniLpsImage city={dynamicLocationName} />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ListSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <SliderTestimoniSiswa city={dynamicLocationName} />
        </DeferredSection>
      </div>
    </>
  );
};

export default LesPrivatSDSMPSMASlug;
