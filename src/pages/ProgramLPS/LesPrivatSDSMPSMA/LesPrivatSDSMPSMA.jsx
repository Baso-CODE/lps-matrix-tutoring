import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";

import { testimoniWaSliderDataSDSMPSMA } from "../../../helpers/DummyData/SDSMPSMA/sdsmpsma_dummyData";

// ========================================
// BELOW THE FOLD - LAZY COMPONENTS
// ========================================

const FasilitasSDSMPSMA = lazy(
  () => import("./Components/FasilitasSDSMPSMA/FasilitasSDSMPSMA"),
);

const ProgramIntensifLpsSDSMPSMA = lazy(
  () =>
    import("./Components/ProgramIntensifLpsSDSMPSMA/ProgramIntensifLpsSDSMPSMA"),
);

const PaketBelajarSDSMPSMA = lazy(
  () => import("./Components/PaketBelajarSDSMPSMA/PaketBelajarSDSMPSMA"),
);

const Slider = lazy(() => import("../../../components/Slider/Slider"));

const VisiEndMisiLps = lazy(
  () => import("../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
);

const ProgramBelajarLps = lazy(
  () => import("../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps"),
);

const FiturDanLayanan = lazy(
  () => import("../../HomePage/Components/FiturDanLayanan/FiturDanLayanan"),
);

const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);

const VideoKarantina = lazy(
  () => import("../../../components/VideoKarantina/VideoKarantina"),
);

const ProfileTutor = lazy(
  () => import("../../HomePage/Components/ProfileTutor/ProfileTutor"),
);

const UnivPengajarLps = lazy(
  () => import("../../../components/UnivPengajarLps/UnivPengajarLps"),
);

const AlumniLpsNew = lazy(
  () => import("../../../components/AlumniLpsNew/AlumniLpsNew"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../components/TestimoniWaSlider/TestimoniWaSlider"),
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

const CANONICAL_URL = `${BASE_URL}/les-privat-sd-smp-sma-terbaik`;

// Menggunakan gambar yang sudah tersedia.
// Bisa diganti ke gambar optimized jika diperlukan.
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
// SEO METADATA
// ========================================

const PAGE_TITLE = "Les Privat SD SMP SMA Online & ke Rumah | LPS Education";

const META_DESCRIPTION =
  "Les privat SD, SMP, dan SMA bersama LPS Education. Guru datang ke rumah atau belajar online, tersedia berbagai mata pelajaran dan persiapan ujian.";

const OG_TITLE = "Les Privat SD, SMP, SMA Online & Offline - LPS Education";

const OG_DESCRIPTION =
  "Program les privat SD, SMP, dan SMA bersama tutor berpengalaman. Belajar online atau guru datang ke rumah untuk meningkatkan prestasi akademik.";

const TWITTER_TITLE = OG_TITLE;

const TWITTER_DESCRIPTION = META_DESCRIPTION;

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
          name: "Les Privat SD SMP SMA",
          item: CANONICAL_URL,
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

      "@id": `${CANONICAL_URL}#webpage`,

      url: CANONICAL_URL,

      name: PAGE_TITLE,

      description: META_DESCRIPTION,

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

      name: "Les Privat SD SMP SMA Online dan Offline",

      serviceType: "Bimbingan Belajar Akademik SD SMP SMA",

      description: META_DESCRIPTION,

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

const LesPrivatSDSMPSMA = () => {
  return (
    <>
      {/* ================================= */}
      {/* SEO METADATA */}
      {/* ================================= */}

      <Helmet>
        <title>{PAGE_TITLE}</title>

        <meta name="description" content={META_DESCRIPTION} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={CANONICAL_URL} />

        {/* OPEN GRAPH */}

        <meta property="og:locale" content="id_ID" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={OG_TITLE} />

        <meta property="og:description" content={OG_DESCRIPTION} />

        <meta property="og:url" content={CANONICAL_URL} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content="Les Privat SD SMP SMA Online Offline LPS Education"
        />

        {/* TWITTER */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={TWITTER_TITLE} />

        <meta name="twitter:description" content={TWITTER_DESCRIPTION} />

        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD */}

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ================================= */}
      {/* CONTENT */}
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
          <ProfileTutor />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            title={testimoniWaSliderDataSDSMPSMA.title}
            description={testimoniWaSliderDataSDSMPSMA.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa />
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

export default LesPrivatSDSMPSMA;
