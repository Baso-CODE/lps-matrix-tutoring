import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
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
const FomoTicker = lazy(
  () => import("../../../components/FomoTicker/FomoTicker"),
);

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

const BASE_URL = "https://apps.lesprivatmasukptn.com";
const TKA_URL = `${BASE_URL}/les-privat-tes-kemampuan-akademik`;
const OG_IMAGE = `${BASE_URL}/images/program/program-LPS-TKA-desktop-optimized.webp`;

const tkaImagesDesktop = [
  "/images/program/program-LPS-TKA-desktop-optimized.webp",
];

const tkaImagesMobile = [
  "/images/program/program-LPS-TKA-mobile-optimized.webp",
];

const tkaDefaultProgramName =
  "Les Privat Persiapan Tes Kemampuan Akademik (TKA)";

const tkaProgramNameDisplay = "Les Privat Tes Kemampuan Akademik (TKA)";

const tkaDescription = [
  `Persiapan Intensif <span class="color-highlight">Tes Kemampuan Akademik (TKA)</span> untuk siswa SD, SMP, dan SMA/SMK. Program <span class="color-highlight">Privat Offline</span> tersedia di Jabodetabek dan <span class="color-highlight">Privat Online</span> untuk seluruh Indonesia.`,
  `TKA mengukur kemampuan akademik siswa sesuai mata pelajaran dan jenjang pendidikan. Program ini membantu siswa memahami konsep, berlatih menganalisis informasi, dan menyelesaikan soal secara sistematis.`,
  `Meskipun TKA tidak wajib diikuti oleh semua siswa, hasilnya dapat dimanfaatkan sebagai bahan pertimbangan dalam seleksi pendidikan sesuai ketentuan yang berlaku.`,
  `Materi persiapan disesuaikan dengan jenjang pendidikan siswa, mulai dari Bahasa Indonesia dan Matematika hingga mata pelajaran lain yang relevan untuk TKA SMA/SMK.`,
];

function formatSlugToTitle(value = "") {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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
            name: "Les Privat TKA",
            item: TKA_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Les Privat TKA di ${locationName}`,
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
        name: `Les Privat Tes Kemampuan Akademik di ${locationName}`,
        serviceType: "Bimbingan Belajar Tes Kemampuan Akademik",
        description,
        provider: {
          "@id": `${BASE_URL}/#organization`,
        },
        areaServed: {
          "@type": "Place",
          name: locationName,
        },
        url: canonicalUrl,
      },
    ],
  };
}

export default function LesPrivatTKASlug() {
  const { slug } = useParams();
  const safeSlug = slug || "";
  const locationName = formatSlugToTitle(safeSlug) || "Indonesia";
  const canonicalUrl = `${BASE_URL}/les-privat-tes-kemampuan-akademik-di/${encodeURIComponent(safeSlug)}`;

  const pageTitle = `Les Privat TKA di ${locationName} SD SMP SMA | LPS Education`;
  const descriptionContent = `Persiapan Tes Kemampuan Akademik di ${locationName} bersama LPS Education. Les privat TKA SD, SMP, SMA/SMK secara online dan offline sesuai cakupan layanan.`;

  const structuredData = createStructuredData({
    canonicalUrl,
    locationName,
    pageTitle,
    description: descriptionContent,
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content={`Les Privat TKA di ${locationName} - LPS Education`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="container-all">
        <HeadingLPSProgramDynamic
          city={locationName}
          defaultProgramName={tkaDefaultProgramName}
          programName={tkaProgramNameDisplay}
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
          <ProfileTutor city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider cityProp={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccessStory city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa cityProp={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AllAlumniLpsImage city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ListSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <SliderTestimoniSiswa city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={200}>
          <FomoTicker namaProgram="TKA" namaWilayah={locationName} />
        </DeferredSection>
      </div>
    </>
  );
}
