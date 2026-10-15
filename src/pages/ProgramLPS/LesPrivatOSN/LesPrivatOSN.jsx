import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import LazySection from "../../../components/LazySection/LazySection";
import {
  galleryBelajarOSNData,
  successStoryWaSliderOSN,
} from "../../../helpers/DummyData/OSN/osn_dummy_data";
import "./LesPrivatOSN.css";

const ProgramIntensiOSN = lazy(
  () => import("./Components/ProgramIntensiOSN/ProgramIntensiOSN"),
);
const Slider = lazy(() => import("../../../components/Slider/Slider"));
const FasilitasOSN = lazy(() => import("./Components/FasilitasOSN"));
const PaketBelajarOSN = lazy(
  () => import("./Components/PaketBelajarOSN/PaketBelajarOSN"),
);
const OsnCurriculumOverview = lazy(
  () => import("./Components/OsnCurriculumOverview/OsnCurriculumOverview"),
);
const OsnWinnerBenefits = lazy(
  () => import("./Components/OsnWinnerBenefits/OsnWinnerBenefits"),
);
const VisiEndMisiLps = lazy(
  () => import("../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps"),
);
const ProgramBelajarLps = lazy(
  () => import("../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps"),
);
const FiturDanLayanan = lazy(
  () => import("../../HomePage/Components/FiturDanLayanan/FiturDanLayanan"),
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

const baseUrl = "https://apps.lesprivatmasukptn.com";
const canonicalUrl = `${baseUrl}/les-privat-osn-terbaik`;

const osnImagesDescktop = ["/images/program/program-LPS-OLIMPIADE.webp"];
const osnImagesMobile = [
  "/images/program/program-LPS-OLIMPIADE-mobile-optimized.webp",
];

const osnDefaultProgramName = "Les Privat OSN, ISO, IMO, SEAMO";
const osnProgramNameDisplay = "Les Privat OSN, ISO, IMO, SEAMO";

const osnDescription = [
  `<span class='color-highlight'>LPS Education</span> - Program Les Privat OSN, ISO, IMO dirancang khusus untuk siswa yang ingin meraih prestasi luar biasa di ajang <span class='color-highlight'>Olimpiade Sains Nasional (OSN)</span> serta kompetisi internasional seperti ISO, IMO, dan SEAMO. Program ini tersedia dalam format <span class='color-highlight'>Privat Offline</span> dan <span class='color-highlight'>Privat Online</span>.`,
  `Dengan guru les privat yang berpengalaman mendampingi siswa persiapan Olimpiade di tingkat nasional maupun internasional, program ini memastikan <span class='color-highlight'>pendalaman konsep dasar</span>, penyelesaian soal-soal tingkat tinggi, dan bimbingan intensif. Progress belajar siswa dipantau secara berkala oleh Tim Akademik.`,
  `Target utama kami adalah mendukung siswa dalam meraih medali bergengsi pada ajang Olimpiade. Fokus utama kami terletak pada penguasaan materi yang mendalam dan pencapaian prestasi akademik yang luar biasa. Wujudkan potensi terbaik Anda di bidang akademik dengan <span class='color-highlight'>Program Super Intensif Privat OSN dan Olimpiade Internasional</span>.`,
];

const pageTitle =
  "📚 Les Privat Olimpiade OSN (Olimpiade Sains Nasional) Online & Offline Terbaik | LPS Education";

const descriptionContent =
  "Bimbel Les Privat OSN (Olimpiade Sains Nasional) terbaik dari LPS Education. Persiapan intensif OSN Matematika, Fisika, Kimia, Biologi, Komputer, dll. Guru datang ke rumah & kelas online. Jamin Juara!";

const ogTitle =
  "Les Privat Olimpiade OSN (Olimpiade Sains Nasional) Online & Offline Terbaik - LPS Education";

const ogDescription =
  "Persiapkan diri untuk Olimpiade Sains Nasional (OSN) dengan les privat intensif dari LPS Education. Pengajar berpengalaman siap membimbing siswa SD, SMP, SMA meraih medali. Tersedia guru datang ke rumah & online.";

const twitterTitle =
  "Les Privat Olimpiade OSN (Olimpiade Sains Nasional) | LPS Education";

const twitterDescription =
  "Bimbel les privat OSN (Olimpiade Sains Nasional) untuk siswa SD, SMP, SMA. Tingkatkan kemampuan sains dan raih prestasi bersama LPS Education. Tersedia online & offline.";

const ogImage = `${baseUrl}/images/program/OSN.webp`;
const ogImageAlt = "Les Privat Olimpiade Sains Nasional (OSN) LPS Education";

const articleTags = [
  "les privat OSN",
  "bimbel OSN",
  "Olimpiade Sains Nasional",
  "persiapan OSN SD",
  "persiapan OSN SMP",
  "persiapan OSN SMA",
  "OSN Matematika",
  "OSN Fisika",
  "OSN Kimia",
  "OSN Biologi",
  "OSN Komputer",
  "OSN Astronomi",
  "OSN Kebumian",
  "OSN Geografi",
  "OSN Ekonomi",
  "OSN online",
  "guru privat OSN",
  "LPS Education",
  "Olimpiade",
  "KSN",
  "IMO",
  "JISMO",
  "ISO",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${canonicalUrl}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": `${baseUrl}/`,
        name: "Home",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": canonicalUrl,
        name: "Les Privat OSN",
      },
    },
  ],
};

export default function LesPrivatOSN() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content="les privat OSN, bimbingan OSN, Olimpiade Sains Nasional, persiapan OSN SD, persiapan OSN SMP, persiapan OSN SMA, OSN Matematika, OSN Fisika, OSN Kimia, OSN Biologi, OSN Komputer, OSN Astronomi, OSN Kebumian, OSN Geografi, OSN Ekonomi, OSN online, guru privat OSN, LPS Education, bimbel OSN, kursus OSN, juara OSN"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {articleTags.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta property="article:section" content="Olimpiade" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="container-all">
        <HeadingLPSProgramDynamic
          defaultProgramName={osnDefaultProgramName}
          imageUrlsDesktop={osnImagesDescktop}
          imageUrlsMobile={osnImagesMobile}
          imageDimensions={{
            mobile: { width: 750, height: 750 },
          }}
          descriptionParagraphs={osnDescription}
          programName={osnProgramNameDisplay}
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
            title={galleryBelajarOSNData.title}
            description={galleryBelajarOSNData.description}
          />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider
            description={successStoryWaSliderOSN.description}
            title={successStoryWaSliderOSN.title}
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
}
