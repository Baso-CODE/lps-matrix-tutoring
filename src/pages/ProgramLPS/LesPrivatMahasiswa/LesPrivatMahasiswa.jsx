import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";

import {
  galleryBelajarMahasiswaData,
  testimoniWaSliderMahasiswaData,
} from "../../../helpers/DummyData/Mahasiswa/mahasiswa_dummyData";

import "./LesPrivatMahasiswa.css";

// ========================================
// LAZY COMPONENTS
// ========================================

const LayananLPSMahasiswa = lazy(
  () => import("./Components/LayananLPSMahasiswa/LayananLPSMahasiswa"),
);

const Slider = lazy(() => import("../../../components/Slider/Slider"));

const FasilitasMahasiswa = lazy(
  () => import("./Components/FasilitasMahasiswa/FasilitasMahasiswa"),
);

const PaketLPSMahasiswa = lazy(
  () => import("./Components/PaketLPSMahasiswa/PaketLPSMahasiswa"),
);

const AsalUniversitasMahasiswa = lazy(
  () =>
    import("./Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa"),
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

const AlumniLpsNew = lazy(
  () => import("../../../components/AlumniLpsNew/AlumniLpsNew"),
);

const GaleryBelajarSiswa = lazy(
  () => import("../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
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

const CANONICAL_URL = `${BASE_URL}/les-privat-mahasiswa-terbaik`;

const OG_IMAGE = `${BASE_URL}/images/program/MAHASISWA.webp`;

// ========================================
// OPTIMIZED HERO
// ========================================

const mahasiswaImagesDesktop = [
  "/images/program/program-LPS-MAHASISWA-desktop-optimized.webp",
];

const mahasiswaImagesMobile = [
  "/images/program/program-LPS-MAHASISWA-mobile-optimized.webp",
];

const PROGRAM_NAME = "Program Les Privat Mahasiswa - Privat Offline dan Online";

const mahasiswaDescription = [
  `Program <span class="color-highlight">Les Privat Mahasiswa</span> menyediakan pendampingan belajar intensif untuk berbagai mata kuliah sesuai jurusan dan universitas, melalui <span class="color-highlight">Privat Offline (guru datang ke rumah)</span> maupun <span class="color-highlight">Privat Online</span>.`,

  `Tim pengajar LPS Education terdiri dari tutor berpengalaman di bidang akademik, termasuk alumni perguruan tinggi seperti UI, ITB, UGM, Unpad, IPB, dan perguruan tinggi lainnya.`,

  `Mahasiswa dapat menyampaikan kebutuhan pembelajaran serta kriteria pengajar yang diinginkan, misalnya latar belakang jurusan yang sesuai atau pengalaman menjadi asisten dosen, agar pendampingan lebih relevan dengan mata kuliah yang dipelajari.`,
];

// ========================================
// SEO METADATA
// ========================================

const PAGE_TITLE = "Les Privat Mahasiswa Online & Offline | LPS Education";

const META_DESCRIPTION =
  "Les privat mahasiswa untuk berbagai mata kuliah bersama LPS Education. Tersedia tutor berpengalaman, pembelajaran online, dan privat ke rumah sesuai area layanan.";

const OG_DESCRIPTION =
  "Bimbingan belajar privat untuk mahasiswa berbagai jurusan. Pendalaman materi kuliah, latihan soal, dan persiapan ujian bersama LPS Education.";

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
          name: "Les Privat Mahasiswa",
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
      name: "Les Privat Mahasiswa Online dan Offline",
      serviceType: "Bimbingan Belajar Akademik Mahasiswa",
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

export default function LesPrivatMahasiswa() {
  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>

        <meta name="description" content={META_DESCRIPTION} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content="Les Privat Mahasiswa LPS Education"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container-all">
        {/* ================================= */}
        {/* ABOVE THE FOLD */}
        {/* ================================= */}

        <HeadingLPSProgramDynamic
          defaultProgramName="Program Les Privat Mahasiswa"
          imageUrlsDesktop={mahasiswaImagesDesktop}
          imageUrlsMobile={mahasiswaImagesMobile}
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
            title={galleryBelajarMahasiswaData.title}
            description={galleryBelajarMahasiswaData.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            title={testimoniWaSliderMahasiswaData.title}
            description={testimoniWaSliderMahasiswaData.description}
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
}
