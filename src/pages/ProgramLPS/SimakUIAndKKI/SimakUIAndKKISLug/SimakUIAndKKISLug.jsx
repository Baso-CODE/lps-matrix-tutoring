import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";

import {
  galleryBelajarSiswaSimakUI,
  successStoryWaSliderSimakUI,
} from "../../../../helpers/DummyData/SIMAK-UI/simak-ui_dummyData";

// ========================================
// LAZY COMPONENTS
// ========================================

const FasilitasSimakUI = lazy(
  () => import("../Components/FasilitasSimakUI/FasilitasSimakUI"),
);

const PaketBelajarSimakUI = lazy(
  () => import("../Components/PaketBelajarSimakUI/PaketBelajarSimakUI"),
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

const GaleryBelajarSiswa = lazy(
  () => import("../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../../components/TestimoniWaSlider/TestimoniWaSlider"),
);

const SuccessStory = lazy(
  () => import("../../../HomePage/Components/SuccessStory/SuccessStory"),
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
// CONFIG
// ========================================

const BASE_URL = "https://apps.lesprivatmasukptn.com";

const MAIN_URL = `${BASE_URL}/bimbel-persiapan-masuk-ui-kki-terbaik`;

// Pertahankan route slug asli.
const SLUG_PATH = "/bimbel-persiapan-masuk-ui-kki-terbaik-di";

const OG_IMAGE = `${BASE_URL}/images/program/SIMAK-UI.webp`;

// ========================================
// OPTIMIZED HERO IMAGES
// ========================================

const simakUIImagesDesktop = [
  "/images/program/program-LPS-SIMAK-UI-KKI-desktop-optimized.webp",
];

const simakUIImagesMobile = [
  "/images/program/program-LPS-SIMAK-UI-KKI-mobile-optimized.webp",
];

// ========================================
// HERO CONTENT
// ========================================

const simakUIDefaultProgramName =
  "Bimbingan Belajar Intensif Les Privat Simak UI";

const simakUIProgramNameDisplay =
  "Bimbingan Belajar Intensif Les Privat Simak UI dan KKI";

const simakUIDescription = [
  `Program <span class="color-highlight">Super Intensif Privat Simak UI</span> merupakan suatu bentuk program belajar fokus Intensif Persiapan Ujian Simak UI dengan sistem belajar <span class="color-highlight">Privat Offline</span> (guru datang ke rumah) dan <span class="color-highlight">Privat Online</span>. Program ini disusun secara sistematis dan didukung dengan guru les privat berpengalaman untuk program Seleksi Masuk Universitas Indonesia. Program belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan keterampilan penyelesaian soal-soal Simak UI.`,

  `Progress belajar akan dimonitoring oleh Tim Akademik LPS Education. Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progres belajar siswa. Target Program Super Intensif Simak UI adalah mengantarkan siswa <span class="color-highlight">Sukses Masuk UI sesuai jurusan yang diinginkan</span>.`,

  `<span class="color-highlight">LPS Education</span> memiliki Layanan Intensif Les Privat Simak UI dan KKI yang ditujukan untuk siswa SMA dan alumni untuk jenjang Sarjana Reguler, Vokasi (D3/D4), dan S1 Kelas Internasional UI (KKI). Selain itu, kami juga memiliki layanan Les Privat Simak UI untuk <span class="color-highlight">S2 dan S3 (Pascasarjana)</span>.`,
];

// ========================================
// HELPERS
// ========================================

const formatSlugToTitle = (value = "") => {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
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
}) => {
  return {
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
            name: "Bimbel SIMAK UI dan KKI",
            item: MAIN_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Bimbel SIMAK UI dan KKI di ${locationName}`,
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

        name: `Bimbel dan Les Privat SIMAK UI dan KKI di ${locationName}`,

        serviceType:
          "Bimbingan Belajar Persiapan Seleksi Masuk Universitas Indonesia",

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
  };
};

// ========================================
// MAIN COMPONENT
// ========================================

const SimakUIAndKKISLug = () => {
  const { slug } = useParams();

  const safeSlug = slug || "";

  const dynamicLocationName = formatSlugToTitle(safeSlug) || "Indonesia";

  // ========================================
  // DYNAMIC URL
  // ========================================

  const canonicalUrl = `${BASE_URL}${SLUG_PATH}/${encodeURIComponent(safeSlug)}`;

  // ========================================
  // DYNAMIC SEO
  // ========================================

  const pageTitle = `Bimbel SIMAK UI & KKI di ${dynamicLocationName} | LPS Education`;

  const descriptionContent = `Bimbel SIMAK UI dan KKI di ${dynamicLocationName} bersama LPS Education. Les privat online dan offline dengan tutor berpengalaman, latihan soal, dan evaluasi belajar.`;

  const ogDescription = `Persiapan seleksi SIMAK UI dan KKI di ${dynamicLocationName}. Program bimbingan belajar intensif bersama LPS Education.`;

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

        {/* Open Graph */}

        <meta property="og:locale" content="id_ID" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content={`Bimbel SIMAK UI dan KKI di ${dynamicLocationName} - LPS Education`}
        />

        {/* Twitter Card */}

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
      {/* CONTENT */}
      {/* ================================= */}

      <div className="container-all">
        {/* ================================= */}
        {/* ABOVE THE FOLD */}
        {/* ================================= */}

        <HeadingLPSProgramDynamic
          city={dynamicLocationName}
          defaultProgramName={simakUIDefaultProgramName}
          imageUrlsDesktop={simakUIImagesDesktop}
          imageUrlsMobile={simakUIImagesMobile}
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
          descriptionParagraphs={simakUIDescription}
          programName={simakUIProgramNameDisplay}
        />

        {/* ================================= */}
        {/* BELOW THE FOLD */}
        {/* ================================= */}

        <DeferredSection minHeight={450}>
          <FasilitasSimakUI />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <PaketBelajarSimakUI />
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

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            description={galleryBelajarSiswaSimakUI.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            cityProp={dynamicLocationName}
            title={successStoryWaSliderSimakUI.title}
            description={successStoryWaSliderSimakUI.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccessStory city={dynamicLocationName} />
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

export default SimakUIAndKKISLug;
