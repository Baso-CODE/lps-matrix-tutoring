import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";

import {
  galleryBelajarCPNSData,
  testimonialWaCPNSData,
  testimoniWaSliderData,
} from "../../../../helpers/DummyData/CPNS/cpnsDammyData";

// ========================================
// BELOW THE FOLD - LAZY COMPONENTS
// ========================================

const ProgramIntensifCPNS = lazy(
  () => import("../Components/ProgramIntensifCPNS/ProgramIntensifCPNS"),
);

const MateriLPSCPNS = lazy(
  () => import("../Components/MateriLPSCPNS/MateriLPSCPNS"),
);

const BenefitLolosCPNS = lazy(
  () => import("../Components/BenefitLolosCPNS/BenefitLolosCPNS"),
);

const CpnsStages = lazy(() => import("../Components/CpnsStages/CpnsStages"));

const Slider = lazy(() => import("../../../../components/Slider/Slider"));

const PaketBelajarCPNS = lazy(
  () => import("../Components/PaketBelajarCPNS/PaketBelajarCPNS"),
);

const ProgramCPNS = lazy(() => import("../Components/ProgramCPNS/ProgramCPNS"));

const ApaAjaYgDiPeroleh = lazy(
  () => import("../Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh"),
);

const JadwalBelajarCPNS = lazy(
  () => import("../Components/JadwalBelajarCPNS/JadwalBelajarCPNS"),
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

const GaleryBelajarSiswa = lazy(
  () => import("../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../../components/TestimoniWaSlider/TestimoniWaSlider"),
);

const AsalSiswaLPS = lazy(
  () => import("../../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS"),
);

const SuccesStoryCPNS = lazy(
  () => import("../Components/SuccesStoryCPNS/SuccesStoryCPNS"),
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

const CPNS_MAIN_URL = `${BASE_URL}/bimbel-persiapan-cpns-terbaik`;

const OG_IMAGE = `${BASE_URL}/images/program/program-LPS-CPNS-desktop-optimized.webp`;

// ========================================
// HERO IMAGES - OPTIMIZED
// ========================================

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
  `Menjadi PNS adalah impian dari jutaan peserta Tes CPNS. Oleh karena itu, para peserta diharapkan memiliki kompetensi yang mumpuni untuk menghadapi seleksi CPNS, terutama pada tahap Seleksi Kompetensi Dasar (SKD) yang mencakup <span class="color-highlight">TWK, TIU, dan TKP</span>.`,

  `Bagi Anda yang sedang mencari <span class="color-highlight">les privat CPNS offline</span> maupun bimbingan belajar online persiapan SKD CPNS, <span class="color-highlight">LPS Education</span> menyediakan program yang dapat disesuaikan dengan kebutuhan peserta. Program offline tersedia sesuai cakupan layanan, sedangkan program online dapat diikuti dari berbagai wilayah Indonesia.`,

  `Program persiapan CPNS kami mencakup <span class="color-highlight">pendalaman materi, latihan soal, pembahasan, dan evaluasi</span> untuk membantu peserta meningkatkan kesiapan menghadapi seleksi.`,

  `<span class="color-highlight">LPS Education</span> menyediakan layanan bimbingan belajar CPNS melalui pembelajaran privat dan program intensif. Peserta dapat memilih metode pembelajaran sesuai kebutuhan, jadwal, dan ketersediaan layanan.`,
];

// ========================================
// HELPERS
// ========================================

function formatSlugToTitle(value = "") {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// ========================================
// STRUCTURED DATA
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
            name: "Bimbel Persiapan CPNS",
            item: CPNS_MAIN_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Bimbel CPNS di ${locationName}`,
            item: canonicalUrl,
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

        name: `Bimbel dan Les Privat CPNS di ${locationName}`,

        serviceType: "Bimbingan Belajar Persiapan Seleksi CPNS",

        description,

        url: canonicalUrl,

        provider: {
          "@id": `${BASE_URL}/#organization`,
        },

        areaServed: [
          {
            "@type": "Place",
            name: locationName,
          },
          {
            "@type": "Country",
            name: "Indonesia",
          },
        ],
      },
    ],
  };
}

// ========================================
// MAIN COMPONENT
// ========================================

export default function LesPrivatCPNSSlug() {
  const { slug } = useParams();

  const safeSlug = slug || "";

  const dynamicLocationName = formatSlugToTitle(safeSlug) || "Indonesia";

  const canonicalUrl = `${BASE_URL}/bimbel-persiapan-cpns-terbaik-di/${encodeURIComponent(safeSlug)}`;

  // ========================================
  // DYNAMIC SEO
  // ========================================

  const pageTitle = `Bimbel CPNS di ${dynamicLocationName} | TWK TIU TKP - LPS Education`;

  const descriptionContent = `Persiapan tes CPNS di ${dynamicLocationName} bersama LPS Education. Bimbel CPNS online untuk materi SKD, TWK, TIU, TKP, dan latihan soal intensif.`;

  const ogTitle = pageTitle;

  const ogDescription = `Program bimbel dan les privat CPNS di ${dynamicLocationName}. Persiapkan seleksi SKD TWK, TIU, dan TKP bersama LPS Education.`;

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

        <meta property="og:title" content={ogTitle} />

        <meta property="og:description" content={ogDescription} />

        <meta property="og:url" content={canonicalUrl} />

        <meta property="og:site_name" content="LPS Education" />

        <meta property="og:image" content={OG_IMAGE} />

        <meta
          property="og:image:alt"
          content={`Program Bimbel CPNS di ${dynamicLocationName} - LPS Education`}
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
          city={dynamicLocationName}
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
          <ProfileTutor city={dynamicLocationName} />
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
            cityProp={dynamicLocationName}
            description={testimoniWaSliderData.description}
            title={testimoniWaSliderData.title}
          />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AsalSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccesStoryCPNS city={dynamicLocationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa
            cityProp={dynamicLocationName}
            title={testimonialWaCPNSData.title}
            description={testimonialWaCPNSData.description}
            imageDesktop={testimonialWaCPNSData.imageDesktop}
            imageMobile={testimonialWaCPNSData.imageMobile}
          />
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
}
