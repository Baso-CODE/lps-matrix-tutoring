import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";

import {
  galleryBelajarSiswaSimakUI,
  successStoryWaSliderSimakUI,
} from "../../../helpers/DummyData/SIMAK-UI/simak-ui_dummyData";

import "./SimakUIAndKKI.css";

// ========================================
// BELOW THE FOLD - LAZY COMPONENTS
// ========================================

const FasilitasSimakUI = lazy(
  () => import("./Components/FasilitasSimakUI/FasilitasSimakUI"),
);

const PaketBelajarSimakUI = lazy(
  () => import("./Components/PaketBelajarSimakUI/PaketBelajarSimakUI"),
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

const GaleryBelajarSiswa = lazy(
  () => import("../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
);

const TestimoniWaSlider = lazy(
  () => import("../../../components/TestimoniWaSlider/TestimoniWaSlider"),
);

const SuccessStory = lazy(
  () => import("../../HomePage/Components/SuccessStory/SuccessStory"),
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

const CANONICAL_URL = `${BASE_URL}/bimbel-persiapan-masuk-ui-kki-terbaik`;

// Gunakan OG Image yang sudah tersedia.
// Pastikan file berikut benar-benar ada di public/images/program.
const OG_IMAGE = `${BASE_URL}/images/program/SIMAK-UI.webp`;

// ========================================
// HERO IMAGES
// ========================================

// Tahap pertama memakai gambar asli.
// Setelah menjalankan script Sharp,
// ubah ke file optimized pada langkah 4.
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
  `Program <span class="color-highlight">Super Intensif Privat Simak UI</span> merupakan program belajar intensif untuk persiapan Seleksi Masuk Universitas Indonesia dengan sistem <span class="color-highlight">Privat Offline</span> (guru datang ke rumah) dan <span class="color-highlight">Privat Online</span>. Program disusun secara sistematis dengan pendampingan tutor berpengalaman. Pembelajaran difokuskan pada pendalaman konsep, latihan soal, dan strategi menghadapi seleksi masuk UI.`,

  `Perkembangan belajar siswa dimonitor oleh Tim Akademik LPS Education. Evaluasi dilakukan untuk mengetahui penguasaan materi dan menentukan strategi belajar berikutnya. Program ini bertujuan membantu siswa mempersiapkan diri menghadapi seleksi <span class="color-highlight">SIMAK UI dan KKI</span> sesuai program studi yang dituju.`,

  `<span class="color-highlight">LPS Education</span> menyediakan layanan persiapan <span class="color-highlight">SIMAK UI dan KKI</span> untuk siswa SMA dan alumni yang ingin mengikuti seleksi Universitas Indonesia. Pendampingan juga dapat disesuaikan dengan kebutuhan persiapan seleksi program Vokasi, Sarjana, Kelas Internasional, dan Pascasarjana sesuai ketentuan jalur penerimaan yang berlaku.`,
];

// ========================================
// SEO METADATA
// ========================================

const pageTitle = "Bimbel SIMAK UI & KKI Online Offline | LPS Education";

const descriptionContent =
  "Persiapan SIMAK UI dan KKI bersama LPS Education. Bimbel dan les privat online maupun offline dengan tutor berpengalaman, latihan soal, serta evaluasi belajar.";

const ogTitle = pageTitle;

const ogDescription =
  "Program bimbel dan les privat SIMAK UI serta KKI Universitas Indonesia. Persiapkan seleksi masuk UI melalui pembelajaran intensif bersama LPS Education.";

const twitterTitle = pageTitle;

const twitterDescription = descriptionContent;

// ========================================
// STRUCTURED DATA JSON-LD
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
          name: "Bimbel SIMAK UI dan KKI",
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

      name: "Bimbel dan Les Privat SIMAK UI dan KKI",

      serviceType:
        "Bimbingan Belajar Persiapan Seleksi Masuk Universitas Indonesia",

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

const SimakUIAndKKI = () => {
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
          content="Program Bimbel SIMAK UI dan KKI LPS Education"
        />

        {/* Twitter Card */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={twitterTitle} />

        <meta name="twitter:description" content={twitterDescription} />

        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}

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
          <ProfileTutor />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            description={galleryBelajarSiswaSimakUI.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            title={successStoryWaSliderSimakUI.title}
            description={successStoryWaSliderSimakUI.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccessStory />
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

export default SimakUIAndKKI;
