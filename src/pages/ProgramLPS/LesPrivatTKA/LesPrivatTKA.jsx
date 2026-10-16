import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";
import "./LesPrivatTKA.css";

const StudentChallenge = lazy(
  () => import("./Components/StudentChallenge/StudentChallenge"),
);
const ProgramTKA = lazy(() => import("./Components/ProgramTKA/ProgramTKA"));
const Slider = lazy(() => import("../../../components/Slider/Slider"));
const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);
const VisiEndMisiLps = lazy(
  () => import("../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
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

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

const BASE_URL = "https://apps.lesprivatmasukptn.com";
const CANONICAL_URL = `${BASE_URL}/les-privat-tes-kemampuan-akademik`;

const tkaImagesDesktop = [
  "/images/program/program-LPS-TKA-desktop-optimized.webp",
];

const tkaImagesMobile = [
  "/images/program/program-LPS-TKA-mobile-optimized.webp",
];

const tkaDescription = [
  `Persiapan Intensif <span class="color-highlight">Tes Kemampuan Akademik (TKA)</span> untuk siswa SD, SMP, dan SMA/SMK. Program <span class="color-highlight">Privat Offline</span> tersedia di Jabodetabek dan <span class="color-highlight">Privat Online</span> untuk seluruh Indonesia.`,
  `TKA dirancang untuk mengukur <span class="color-highlight">literasi membaca, numerasi, penalaran, dan keterampilan berpikir kritis</span> siswa secara objektif. Berbeda dengan ujian sekolah biasa yang sering hanya menguji hafalan, TKA hadir untuk melihat sejauh mana siswa dapat memahami konsep, menganalisis informasi, dan memecahkan masalah.`,
  `Meskipun TKA bersifat opsional (tidak wajib), hasil TKA dapat digunakan sebagai <span class="color-highlight">bahan pertimbangan</span> dalam seleksi jenjang pendidikan selanjutnya sesuai ketentuan yang berlaku, termasuk <span class="color-highlight">seleksi perguruan tinggi jalur SNBP</span>.`,
  `Materi Ujian TKA mencakup <span class="color-highlight">Bahasa Indonesia dan Matematika</span> untuk jenjang SD/SMP, serta tambahan <span class="color-highlight">Bahasa Inggris dan dua mata pelajaran pilihan</span> untuk SMA/SMK. Program belajar membantu siswa melatih kemampuan berpikir logis, kritis, dan sistematis.`,
];

const pageTitle =
  "Bimbel & Les Privat TKA SD SMP SMA Online dan Offline | LPS Education";

const descriptionContent =
  "Ikuti bimbel dan les privat TKA SD, SMP, SMA/SMK bersama LPS Education. Persiapan Tes Kemampuan Akademik online dan offline dengan tutor berpengalaman.";

const ogImage = `${BASE_URL}/images/program/program-LPS-TKA.webp`;

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
          name: "Bimbel dan Les Privat TKA",
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
      name: "Bimbel dan Les Privat Tes Kemampuan Akademik",
      serviceType: "Bimbingan Belajar Tes Kemampuan Akademik",
      description: descriptionContent,
      provider: {
        "@id": `${BASE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      url: CANONICAL_URL,
    },
  ],
};

export default function LesPrivatTKA() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="Program Bimbel dan Les Privat TKA LPS Education"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container-all">
        <HeadingLPSProgramDynamic
          defaultProgramName="Les Privat Persiapan Tes Kemampuan Akademik (TKA)"
          programName="Siap Hadapi TKA dengan Percaya Diri Bersama LPS Education"
          imageUrlsDesktop={tkaImagesDesktop}
          imageUrlsMobile={tkaImagesMobile}
          imageDimensions={{
            desktop: { width: 1280, height: 720 },
            mobile: { width: 750, height: 750 },
          }}
          descriptionParagraphs={tkaDescription}
        />

        <DeferredSection minHeight={450}>
          <StudentChallenge />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProgramTKA />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <KeunggulanEndAlasanMemilih />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VisiEndMisiLps />
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
          <GaleryBelajarSiswa />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider />
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
}
