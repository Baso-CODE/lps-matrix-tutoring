import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Above-the-fold: dimuat langsung untuk mengoptimalkan performa FCP & LCP
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import ProgramTKA from "./Components/ProgramTKA/ProgramTKA";
import StudentChallenge from "./Components/StudentChallenge/StudentChallenge";

// Below-the-fold: dimuat secara lazy loading
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

const LesPrivatTKASlug = () => {
  const { slug } = useParams();

  const tkaImagesDescktop = ["/images/program/program-LPS-TKA.webp"];

  const tkaImagesMobile = ["/images/program/program-LPS-TKA-mobile.webp"];

  const tkaDefaultProgramName =
    "Les Privat Persiapan Tes Kemampuan Akademik (TKA)";
  const tkaProgramNameDisplay =
    "Siap Hadapi TKA dengan Percaya Diri Bersama LPS Education";

  const tkaDescription = [
    `Persiapan Intensif <span class='color-highlight'>Tes Kemampuan Akademik (TKA)</span> untuk Siswa SD, SMP, dan SMA/SMK. Program <span class='color-highlight'>Privat Offline</span> tersedia di Jabodetabek dan <span class='color-highlight'>Privat Online</span> untuk seluruh Indonesia.`,
    `TKA dirancang untuk mengukur <span class='color-highlight'>literasi membaca, numerasi, penalaran, dan keterampilan berpikir kritis</span> siswa secara objektif. Berbeda dengan ujian sekolah biasa yang sering hanya menguji hafalan, TKA hadir untuk melihat sejauh mana siswa bisa memahami konsep, menganalisis informasi, dan memecahkan masalah nyata.`,
    `Meskipun TKA bersifat opsional (tidak wajib), hasil TKA dapat digunakan sebagai <span class='color-highlight'>nilai tambah (bahan pertimbangan)</span> dalam seleksi jenjang pendidikan selanjutnya, seperti masuk SMP/SMA unggulan, SMK favorit, maupun <span class='color-highlight'>seleksi perguruan tinggi jalur SNBP</span>.`,
    `Materi Ujian TKA mencakup <span class='color-highlight'>Bahasa Indonesia dan Matematika</span> untuk jenjang SD/SMP, serta tambahan <span class='color-highlight'>Bahasa Inggris dan 2 mata pelajaran pilihan</span> untuk SMA/SMK. Soal TKA menuntut siswa terbiasa berpikir logis, kritis, dan sistematis.`,
  ];

  const formatSlugToTitle = (textSlug) => {
    return textSlug
      ? textSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
  };

  const dynamicLocationName = formatSlugToTitle(slug) || "Indonesia";
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-tes-kemampuan-akademik-di/${slug}`;
  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp";

  const pageTitle = `📘 Program Les Privat TKA (Tes Kemampuan Akademik) | Terbaik di ${dynamicLocationName} - LPS Education`;
  const descriptionContent = `Program Les Privat TKA (Tes Kemampuan Akademik) terbaik di ${dynamicLocationName} dari LPS Education. Persiapan intensif dengan pengajar berpengalaman, metode efektif, dan materi komprehensif untuk menghadapi ujian masuk PTN.`;
  const ogTitle = `📘 Program Les Privat TKA (Tes Kemampuan Akademik) di ${dynamicLocationName} | Terbaik - LPS Education`;
  const ogDescription = `Persiapan Les Privat TKA di ${dynamicLocationName} dari LPS Education. Dapatkan bimbingan intensif, pengajar handal, dan materi komprehensif untuk sukses menghadapi Tes Kemampuan Akademik.`;
  const twitterTitle = `Program Les Privat TKA (Tes Kemampuan Akademik) di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Siapkan diri Anda menghadapi TKA di ${dynamicLocationName} dengan bimbingan terbaik dari LPS Education. Materi komprehensif, pengajar berpengalaman, dan strategi sukses untuk lolos PTN impian.`;

  const ogImageAlt = `Program Les Privat TKA Tes Kemampuan Akademik LPS Education di ${dynamicLocationName}`;

  const articleTags = [
    "Les Privat TKA",
    "Program TKA",
    "Bimbel TKA",
    "Tes Kemampuan Akademik",
    "Persiapan TKA",
    "Les Privat UTBK",
    "Belajar TKA Online",
    "Bimbingan Masuk PTN",
    "Materi TKA",
    "Tryout TKA",
    "Strategi TKA",
    "Les Privat Masuk PTN",
    "LPS Education",
    "TKA Saintek",
    "TKA Soshum",
    "Persiapan UTBK TKA",
    dynamicLocationName.toLowerCase(),
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat TKA ${dynamicLocationName}, bimbel TKA ${dynamicLocationName}, program TKA ${dynamicLocationName}, tes kemampuan akademik ${dynamicLocationName}, persiapan TKA ${dynamicLocationName}, les privat UTBK ${dynamicLocationName}, tryout TKA ${dynamicLocationName}, materi TKA ${dynamicLocationName}, strategi TKA ${dynamicLocationName},  bimbingan masuk PTN ${dynamicLocationName}, TKA saintek ${dynamicLocationName}, TKA soshum ${dynamicLocationName}, les privat masuk PTN ${dynamicLocationName}, belajar TKA online ${dynamicLocationName}, LPS Education ${dynamicLocationName}, persiapan UTBK TKA ${dynamicLocationName}, lolos PTN ${dynamicLocationName}, bimbel masuk PTN ${dynamicLocationName}, intensif TKA ${dynamicLocationName}, tutor TKA berpengalaman ${dynamicLocationName}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="LPS Education" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {articleTags.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta
          property="article:section"
          content="Program Les Privat TKA & UTBK"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "${canonicalUrl}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "${baseUrl}",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "${baseUrl}/les-privat-tes-kemampuan-akademik",
                "name": "Les Privat TKA"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "Les Privat TKA di ${dynamicLocationName}"
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Les Privat Tes Kemampuan Akademik (TKA) terbaik di ${dynamicLocationName} untuk SD, SMP, dan SMA. Fokus pada literasi, numerasi, dan penalaran.",
          "url": "${canonicalUrl}",
          "areaServed": "${dynamicLocationName}", 
          "sameAs": [
            "${baseUrl}",
            "https://www.instagram.com/lps.privatsbmptn/", 
            "https://www.tiktok.com/@lesprivatsbmptn.com?_r=1&_t=ZS-918OcGnyuIS" 
          ],
          "brand": {
            "@type": "Brand",
            "name": "LPS Education",
            "logo": "${baseUrl}/images/LOGO2.webp" 
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-858-8756-2039", 
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian"]
          },
          "keywords": "${articleTags.join(", ")}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}", 
          "inLanguage": "id-ID",
          "description": "${descriptionContent}",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Tes Kemampuan Akademik (TKA) di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian TKA",
            "areaServed": "${dynamicLocationName}",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "url": "${canonicalUrl}"
            }
          }
        },

        {
          "@type": "FAQPage",
          "@id": "${canonicalUrl}#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apa itu Tes Kemampuan Akademik (TKA) yang dimaksud?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TKA adalah tes yang diluncurkan Kemdikbudristek untuk mengukur literasi membaca, numerasi, penalaran, dan keterampilan berpikir kritis siswa di akhir jenjang SD, SMP, dan SMA/SMK."
              }
            },
            {
              "@type": "Question",
              "name": "Materi apa saja yang diajarkan dalam Les Privat TKA LPS Education?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Materi yang diajarkan meliputi Bahasa Indonesia dan Matematika (untuk semua jenjang), serta tambahan Bahasa Inggris dan dua mata pelajaran pilihan untuk jenjang SMA/SMK."
              }
            },
            {
              "@type": "Question",
              "name": "Mengapa hasil TKA penting untuk siswa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Meskipun opsional, hasil TKA dapat menjadi nilai tambah dan bahan pertimbangan penting dalam seleksi masuk jenjang pendidikan selanjutnya (seperti SMP/SMA unggulan) atau seleksi perguruan tinggi melalui jalur SNBP."
              }
            }
          ]
        }
      ]
    }
  `}
        </script>
      </Helmet>

      <div className="container-all">
        {/* Above the fold — langsung render */}
        <HeadingLPSProgramDynamic
          city={dynamicLocationName}
          defaultProgramName={tkaDefaultProgramName}
          imageUrlsDesktop={tkaImagesDescktop}
          imageUrlsMobile={tkaImagesMobile}
          descriptionParagraphs={tkaDescription}
          programName={tkaProgramNameDisplay}
        />
        <StudentChallenge />
        <ProgramTKA />
        <Slider />

        {/* Below the fold — lazy load */}
        <Suspense fallback={null}>
          <KeunggulanEndAlasanMemilih />
          <VisiEndMisiLps />
          <VideoKarantina />
          <ProfileTutor />
          <UnivPengajarLps />
          <AlumniLpsNew city={dynamicLocationName} />
          <GaleryBelajarSiswa />
          <TestimoniWaSlider cityProp={dynamicLocationName} />
          <SuccessStory city={dynamicLocationName} />
          <TestimoniWaSiswa cityProp={dynamicLocationName} />
          <AllAlumniLpsImage city={dynamicLocationName} />
          <ListSiswaLPS />
          <SliderTestimoniSiswa city={dynamicLocationName} />
          <FomoTicker namaProgram={"TKA"} namaWilayah={dynamicLocationName} />
        </Suspense>
      </div>
    </>
  );
};

export default LesPrivatTKASlug;
