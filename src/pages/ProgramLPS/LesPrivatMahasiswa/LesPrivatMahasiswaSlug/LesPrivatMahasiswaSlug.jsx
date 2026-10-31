import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";

import {
  galleryBelajarMahasiswaData,
  testimoniWaSliderMahasiswaData,
} from "../../../../helpers/DummyData/Mahasiswa/mahasiswa_dummyData";

// ========================================
// LAZY COMPONENTS
// ========================================

const LayananLPSMahasiswa = lazy(
  () => import("../Components/LayananLPSMahasiswa/LayananLPSMahasiswa"),
);

const Slider = lazy(() => import("../../../../components/Slider/Slider"));

const FasilitasMahasiswa = lazy(
  () => import("../Components/FasilitasMahasiswa/FasilitasMahasiswa"),
);

const PaketLPSMahasiswa = lazy(
  () => import("../Components/PaketLPSMahasiswa/PaketLPSMahasiswa"),
);

const AsalUniversitasMahasiswa = lazy(
  () =>
    import("../Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa"),
);

const VisiEndMisiLps = lazy(
  () => import("../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
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

const MAIN_URL = `${BASE_URL}/les-privat-mahasiswa-terbaik`;

const SLUG_PATH = "/les-privat-mahasiswa-terbaik-di";

const OG_IMAGE = `${BASE_URL}/images/program/MAHASISWA.webp`;

// ========================================
// OPTIMIZED HERO IMAGES
// ========================================

const mahasiswaImagesDesktop = [
  "/images/program/program-LPS-MAHASISWA-desktop-optimized.webp",
];

const mahasiswaImagesMobile = [
  "/images/program/program-LPS-MAHASISWA-mobile-optimized.webp",
];

const IMAGE_DIMENSIONS = {
  desktop: {
    width: 1280,
    height: 720,
  },
  mobile: {
    width: 750,
    height: 750,
  },
};

// ========================================
// HERO CONTENT
// ========================================

const DEFAULT_PROGRAM_NAME = "Program Les Privat Mahasiswa";

const PROGRAM_NAME = "Program Les Privat Mahasiswa - Privat Offline dan Online";

const mahasiswaDescription = [
  `Program <span class="color-highlight">Les Privat Mahasiswa</span> menyediakan pendampingan belajar intensif untuk berbagai mata kuliah sesuai jurusan dan universitas melalui <span class="color-highlight">Privat Offline (guru datang ke rumah)</span> maupun <span class="color-highlight">Privat Online</span>.`,

  `Tim pengajar LPS Education terdiri dari tutor berpengalaman di bidang akademik, termasuk alumni perguruan tinggi seperti UI, ITB, UGM, Unpad, IPB, dan perguruan tinggi lainnya.`,

  `Mahasiswa dapat menyampaikan kebutuhan pembelajaran serta kriteria pengajar yang diinginkan, misalnya latar belakang jurusan yang sesuai atau pengalaman menjadi asisten dosen, agar pendampingan lebih relevan dengan mata kuliah yang dipelajari.`,
];

// ========================================
// HELPERS
// ========================================

function formatSlugToTitle(value = "") {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ========================================
// STRUCTURED DATA JSON-LD
// ========================================

function createStructuredData({
  canonicalUrl,
  locationName,
  pageTitle,
  description,
}) {
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
            name: "Les Privat Mahasiswa",
            item: MAIN_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Les Privat Mahasiswa di ${locationName}`,
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

        name: `Les Privat Mahasiswa di ${locationName}`,

        serviceType: "Bimbingan Belajar Akademik Mahasiswa",

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
}

// ========================================
// MAIN COMPONENT
// ========================================

const LesPrivatMahasiswaSlug = () => {
  const { slug } = useParams();

  const safeSlug = slug || "";

  const dynamicLocationName = formatSlugToTitle(safeSlug) || "Indonesia";

  // ========================================
  // DYNAMIC SEO
  // ========================================

  const canonicalUrl = `${BASE_URL}${SLUG_PATH}/${encodeURIComponent(safeSlug)}`;

  const pageTitle = `Les Privat Mahasiswa di ${dynamicLocationName} | LPS Education`;

  const descriptionContent = `Les privat mahasiswa di ${dynamicLocationName} bersama LPS Education. Bimbingan berbagai mata kuliah secara online dan privat ke rumah sesuai area layanan.`;

  const ogDescription = `Bimbingan akademik mahasiswa di ${dynamicLocationName}. Pendalaman materi kuliah, latihan soal, dan persiapan ujian bersama tutor LPS Education.`;

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

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content={`Les Privat Mahasiswa di ${dynamicLocationName} - LPS Education`}
        />

        {/* TWITTER CARD */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={descriptionContent} />

        <meta name="twitter:image" content={OG_IMAGE} />

        {/* STRUCTURED DATA */}

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
          city={dynamicLocationName}
          defaultProgramName={DEFAULT_PROGRAM_NAME}
          imageUrlsDesktop={mahasiswaImagesDesktop}
          imageUrlsMobile={mahasiswaImagesMobile}
          imageDimensions={IMAGE_DIMENSIONS}
          descriptionParagraphs={mahasiswaDescription}
          programName={PROGRAM_NAME}
        />

        {/* ================================= */}
        {/* BELOW THE FOLD */}
        {/* ================================= */}

        <DeferredSection minHeight={450}>
          <LayananLPSMahasiswa />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <FasilitasMahasiswa />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <PaketLPSMahasiswa />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <AsalUniversitasMahasiswa />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VisiEndMisiLps />
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
            title={galleryBelajarMahasiswaData.title}
            description={galleryBelajarMahasiswaData.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            cityProp={dynamicLocationName}
            title={testimoniWaSliderMahasiswaData.title}
            description={testimoniWaSliderMahasiswaData.description}
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

export default LesPrivatMahasiswaSlug;
