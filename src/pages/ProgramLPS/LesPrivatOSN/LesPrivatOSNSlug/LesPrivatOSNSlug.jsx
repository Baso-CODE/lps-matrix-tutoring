import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../../components/LazySection/LazySection";
import {
  galleryBelajarOSNData,
  successStoryWaSliderOSN,
} from "../../../../helpers/DummyData/OSN/osn_dummy_data";

const ProgramIntensiOSN = lazy(
  () => import("../Components/ProgramIntensiOSN/ProgramIntensiOSN"),
);
const Slider = lazy(() => import("../../../../components/Slider/Slider"));
const FasilitasOSN = lazy(() => import("../Components/FasilitasOSN"));
const PaketBelajarOSN = lazy(
  () => import("../Components/PaketBelajarOSN/PaketBelajarOSN"),
);
const OsnCurriculumOverview = lazy(
  () => import("../Components/OsnCurriculumOverview/OsnCurriculumOverview"),
);
const OsnWinnerBenefits = lazy(
  () => import("../Components/OsnWinnerBenefits/OsnWinnerBenefits"),
);
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
const FomoTicker = lazy(
  () => import("../../../../components/FomoTicker/FomoTicker"),
);

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

const BASE_URL = "https://apps.lesprivatmasukptn.com";
const OSN_URL = `${BASE_URL}/les-privat-osn-terbaik`;

const osnImagesDesktop = ["/images/program/program-LPS-OLIMPIADE.webp"];
const osnImagesMobile = [
  "/images/program/program-LPS-OLIMPIADE-mobile-optimized.webp",
];

const osnDescription = [
  `<span class="color-highlight">LPS Education</span> - Program Les Privat OSN, ISO, IMO dirancang khusus untuk siswa yang ingin meraih prestasi luar biasa di ajang <span class="color-highlight">Olimpiade Sains Nasional (OSN)</span> serta kompetisi internasional seperti ISO, IMO, dan SEAMO. Program ini tersedia dalam format <span class="color-highlight">Privat Offline</span> dan <span class="color-highlight">Privat Online</span>.`,
  `Dengan guru les privat yang berpengalaman mendampingi siswa persiapan Olimpiade di tingkat nasional maupun internasional, program ini memastikan <span class="color-highlight">pendalaman konsep dasar</span>, penyelesaian soal-soal tingkat tinggi, dan bimbingan intensif. Progress belajar siswa dipantau secara berkala oleh Tim Akademik.`,
  `Target utama kami adalah mendukung siswa dalam meraih medali bergengsi pada ajang Olimpiade. Fokus utama kami terletak pada penguasaan materi yang mendalam dan pencapaian prestasi akademik yang luar biasa. Wujudkan potensi terbaik Anda di bidang akademik dengan <span class="color-highlight">Program Super Intensif Privat OSN dan Olimpiade Internasional</span>.`,
];

function formatSlugToTitle(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createSchema({ canonicalUrl, locationName, description }) {
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
            name: "Les Privat OSN",
            item: OSN_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Les Privat OSN di ${locationName}`,
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
        name: `Les Privat OSN di ${locationName} | LPS Education`,
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
        name: `Les Privat OSN di ${locationName}`,
        serviceType: "Bimbingan Belajar Olimpiade Sains",
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

export default function LesPrivatOSNSlug() {
  const { slug } = useParams();
  const safeSlug = slug || "";
  const locationName = formatSlugToTitle(safeSlug) || "Indonesia";
  const canonicalUrl = `${BASE_URL}/les-privat-osn-terbaik-di/${encodeURIComponent(safeSlug)}`;

  const pageTitle = `Les Privat OSN di ${locationName} Online & Offline | LPS Education`;
  const descriptionContent = `Les privat OSN di ${locationName} untuk siswa SD, SMP, dan SMA. Persiapan Olimpiade Matematika, IPA, IPS, dan bidang sains lainnya bersama tutor LPS Education.`;

  const ogImage = `${BASE_URL}/images/program/OSN.webp`;

  const structuredData = createSchema({
    canonicalUrl,
    locationName,
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
          content={`Les Privat Olimpiade OSN di ${locationName} - LPS Education`}
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
          city={locationName}
          defaultProgramName="Les Privat OSN, ISO, IMO, SEAMO"
          programName="Les Privat OSN, ISO, IMO, SEAMO"
          imageUrlsDesktop={osnImagesDesktop}
          imageUrlsMobile={osnImagesMobile}
          imageDimensions={{
            desktop: { width: 1600, height: 900 },
            mobile: { width: 750, height: 750 },
          }}
          descriptionParagraphs={osnDescription}
        />

        <DeferredSection minHeight={450}>
          <ProgramIntensiOSN />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <FasilitasOSN />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <PaketBelajarOSN />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <OsnCurriculumOverview />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <OsnWinnerBenefits />
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
          <ProfileTutor city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew city={locationName} />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa
            title={galleryBelajarOSNData.title}
            description={galleryBelajarOSNData.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            cityProp={locationName}
            title={successStoryWaSliderOSN.title}
            description={successStoryWaSliderOSN.description}
          />
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
          <FomoTicker namaWilayah={locationName} namaProgram="OSN ISMO IMO" />
        </DeferredSection>
      </div>
    </>
  );
}
