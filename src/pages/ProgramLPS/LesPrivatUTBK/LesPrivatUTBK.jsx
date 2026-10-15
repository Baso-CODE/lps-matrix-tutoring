import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";
import { galleryBelajarSiswaUTBK } from "../../../helpers/DummyData/UTBK/utbk_dummyData";
import "./LesPrivatUTBK.css";

const TigaJalurMasukPTN = lazy(
  () => import("./Components/TigaJalurMasukPTN/TigaJalurMasukPTN"),
);
const MataPelajaranLPSNew = lazy(
  () => import("./Components/MataPelajaranLPSNew/MataPelajaranLPSNew"),
);
const PerbedaanSBMPTAndSNBT = lazy(
  () => import("./Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT"),
);
const MateriUjianSNBT = lazy(
  () => import("./Components/MateriUjianSNBT/MateriUjianSNBT"),
);
const Slider = lazy(() => import("../../../components/Slider/Slider"));
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
const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);
const SolusiSuksesMasukPTN = lazy(
  () =>
    import("../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN"),
);
const CaraBelajarOfflineAtauOnline = lazy(
  () =>
    import("./Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline"),
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
const CANONICAL_URL = `${BASE_URL}/les-privat-utbk-terbaik`;
const OG_IMAGE = `${BASE_URL}/images/program/UTBK.webp`;

const utbkImagesDesktop = ["/images/program/program-LPS-UTBK-SNBT.webp"];
const utbkImagesMobile = [
  "/images/program/program-LPS-UTBK-SNBT-mobile-optimized.webp",
];

const utbkDescription = [
  `Program <span class="color-highlight">Super Intensif UTBK SNBT</span> menawarkan pembelajaran privat yang berfokus pada pemahaman mendalam konsep dasar dan latihan intensif untuk kesiapan UTBK. Dengan bimbingan tutor berpengalaman, kami hadir di rumah atau secara online. Program ini dirancang untuk meningkatkan keterampilan mengerjakan soal dan pemahaman materi esensial, didukung evaluasi berkala oleh <span class="color-highlight">Tim Akademik LPS Education</span> yang akan memberikan rekomendasi untuk mendukung kemajuan belajar siswa.`,
  `Tujuan program ini adalah memastikan siswa dapat meraih hasil terbaik dan lolos ke perguruan tinggi impian mereka melalui pendampingan yang fokus dan strategis.`,
];

const pageTitle =
  "Bimbel & Les Privat UTBK SNBT Online dan Offline | LPS Education";

const descriptionContent =
  "Persiapan UTBK SNBT bersama LPS Education melalui les privat online dan offline. Belajar materi ujian, latihan soal, dan strategi masuk PTN favorit.";

const schema = {
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
          name: "Bimbel dan Les Privat UTBK SNBT",
          item: CANONICAL_URL,
        },
      ],
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
      mainEntity: {
        "@id": `${CANONICAL_URL}#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL_URL}#service`,
      name: "Bimbel dan Les Privat UTBK SNBT",
      serviceType: "Bimbingan Belajar UTBK SNBT",
      description: descriptionContent,
      provider: {
        "@type": "EducationalOrganization",
        name: "LPS Education",
        url: `${BASE_URL}/`,
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      url: CANONICAL_URL,
    },
  ],
};

export default function LesPrivatUTBK() {
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
        <meta property="og:image" content={OG_IMAGE} />
        <meta
          property="og:image:alt"
          content="Bimbel dan Les Privat UTBK SNBT LPS Education"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="container-all">
        <HeadingLPSProgramDynamic
          defaultProgramName="Les Privat Persiapan UTBK SNBT"
          programName="Bimbel & Les Privat UTBK SNBT"
          imageUrlsDesktop={utbkImagesDesktop}
          imageUrlsMobile={utbkImagesMobile}
          imageDimensions={{
            mobile: { width: 750, height: 750 },
          }}
          descriptionParagraphs={utbkDescription}
        />

        <DeferredSection minHeight={450}>
          <TigaJalurMasukPTN />
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

        <DeferredSection minHeight={250}>
          <Slider />
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
          <KeunggulanEndAlasanMemilih />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SolusiSuksesMasukPTN />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <CaraBelajarOfflineAtauOnline />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            description={galleryBelajarSiswaUTBK.description}
          />
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
