import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";
import { galleryBelajarSiswaUTBK } from "../../../../helpers/DummyData/UTBK/utbk_dummyData";

const TigaJalurMasukPTN = lazy(
  () => import("../Components/TigaJalurMasukPTN/TigaJalurMasukPTN"),
);
const Slider = lazy(() => import("../../../../components/Slider/Slider"));
const MataPelajaranLPSNew = lazy(
  () => import("../Components/MataPelajaranLPSNew/MataPelajaranLPSNew"),
);
const PerbedaanSBMPTAndSNBT = lazy(
  () => import("../Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT"),
);
const MateriUjianSNBT = lazy(
  () => import("../Components/MateriUjianSNBT/MateriUjianSNBT"),
);
const VisiEndMisiLps = lazy(
  () => import("../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
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
const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("../../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);
const SolusiSuksesMasukPTN = lazy(
  () =>
    import("../../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN"),
);
const CaraBelajarOfflineAtauOnline = lazy(
  () =>
    import("../Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline"),
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
const FomoTicker = lazy(
  () => import("../../../../components/FomoTicker/FomoTicker"),
);

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

const BASE_URL = "https://apps.lesprivatmasukptn.com";
const UTBK_URL = `${BASE_URL}/les-privat-utbk-terbaik`;

const utbkImagesDesktop = ["/images/program/program-LPS-UTBK-SNBT.webp"];

const utbkImagesMobile = [
  "/images/program/program-LPS-UTBK-SNBT-mobile-optimized.webp",
];

const utbkDescription = [
  `Program <span class="color-highlight">Super Intensif UTBK SNBT</span> menawarkan pembelajaran privat yang berfokus pada pemahaman mendalam konsep dasar dan latihan intensif untuk kesiapan UTBK. Dengan bimbingan tutor berpengalaman, kami hadir di rumah atau secara online. Program ini dirancang untuk meningkatkan keterampilan mengerjakan soal dan pemahaman materi esensial, didukung evaluasi berkala oleh <span class="color-highlight">Tim Akademik LPS Education</span> yang akan memberikan rekomendasi untuk mendukung kemajuan belajar siswa.`,
  `Tujuan program ini adalah membantu siswa meraih hasil terbaik dan mempersiapkan diri untuk seleksi perguruan tinggi melalui pendampingan yang fokus dan strategis.`,
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
            name: "Bimbel dan Les Privat UTBK SNBT",
            item: UTBK_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Les Privat UTBK SNBT di ${locationName}`,
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
        name: `Bimbel dan Les Privat UTBK SNBT di ${locationName}`,
        description,
        serviceType: "Bimbingan Belajar UTBK SNBT",
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

export default function LesPrivatUTBKSlug() {
  const { slug } = useParams();
  const safeSlug = slug || "";
  const locationName = formatSlugToTitle(safeSlug) || "Indonesia";
  const canonicalUrl = `${BASE_URL}/les-privat-utbk-terbaik-di/${encodeURIComponent(safeSlug)}`;

  const pageTitle = `Bimbel & Les Privat UTBK SNBT di ${locationName} | LPS Education`;
  const descriptionContent = `Persiapan UTBK SNBT di ${locationName} bersama LPS Education. Les privat online dan offline, latihan soal, pembahasan materi, dan pendampingan tutor.`;

  const ogImage = `${BASE_URL}/images/program/UTBK.webp`;
  const schema = createStructuredData({
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
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content={`Les Privat UTBK SNBT di ${locationName} - LPS Education`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="container-all">
        <HeadingLPSProgramDynamic
          defaultProgramName="Les Privat Persiapan UTBK SNBT"
          programName="Bimbel & Les Privat UTBK SNBT"
          city={locationName}
          imageUrlsDesktop={utbkImagesDesktop}
          imageUrlsMobile={utbkImagesMobile}
          descriptionParagraphs={utbkDescription}
          imageDimensions={{
            desktop: { width: 1600, height: 900 },
            mobile: { width: 750, height: 750 },
          }}
        />

        <DeferredSection minHeight={450}>
          <TigaJalurMasukPTN />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <MataPelajaranLPSNew />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <PerbedaanSBMPTAndSNBT />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <MateriUjianSNBT />
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
          <KeunggulanEndAlasanMemilih />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SolusiSuksesMasukPTN />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <CaraBelajarOfflineAtauOnline />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            description={galleryBelajarSiswaUTBK.description}
          />
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
          <FomoTicker namaWilayah={locationName} namaProgram="UTBK SNBT" />
        </DeferredSection>
      </div>
    </>
  );
}
