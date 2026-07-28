import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

// Above-the-fold: langsung load
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import TigaJalurMasukPTN from "../Components/TigaJalurMasukPTN/TigaJalurMasukPTN";

// Below-the-fold: lazy load
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

import { galleryBelajarSiswaUTBK } from "../../../../helpers/DummyData/UTBK/utbk_dummyData";

const LesPrivatUTBKSlug = () => {
  const { slug } = useParams();

  const utbkImagesDescktop = ["/images/program/program-LPS-UTBK-SNBT.webp"];
  const utbkImagesMobile = [
    "/images/program/program-LPS-SUPERCAMP-UTBK-SNBT-mobile.webp",
    "/images/program/program-LPS-UTBK-SNBT-mobile.webp",
  ];
  const utbkDefaultProgramName = "Les Privat Persiapan UTBK SNBT";
  const utbkDescription = [
    `Program <span class='color-highlight'>Super Intensif UTBK SNBT</span> menawarkan pembelajaran privat yang berfokus pada pemahaman mendalam konsep dasar dan latihan intensif untuk kesiapan UTBK. Dengan bimbingan tutor berpengalaman, kami hadir di rumah atau secara online. Program ini dirancang untuk meningkatkan keterampilan mengerjakan soal dan pemahaman materi esensial, didukung evaluasi berkala oleh <span class='color-highlight'>Tim Akademik LPS Education</span> yang akan memberikan rekomendasi untuk mendukung kemajuan belajar siswa.`,
    `Tujuan program ini adalah memastikan siswa dapat meraih hasil terbaik dan lolos ke perguruan tinggi impian mereka melalui pendampingan yang fokus dan strategis.`,
  ];

  const formatSlugToTitle = (textSlug) =>
    textSlug
      ? textSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";

  const dynamicLocationName = formatSlugToTitle(slug) || "Indonesia";
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-utbk-terbaik-di/${slug}`;
  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/UTBK.webp";
  const pageTitle = `🎓 Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | Masuk PTN Favorit - LPS Education`;
  const descriptionContent = `Kursus Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Persiapan Komprehensif Masuk PTN Favorit. Daftar? Segera kunjungi situs LPS Education...`;
  const ogTitle = `Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | Masuk PTN Favorit - LPS Education`;
  const ogDescription = `Siapkan diri Anda untuk UTBK SNBT dengan bimbingan intensif dari LPS Education di ${dynamicLocationName}. Program terbaik untuk lolos PTN favorit. Jaminan belajar fokus dan materi lengkap.`;
  const twitterTitle = `Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Lolos UTBK SNBT & masuk PTN impian Anda! Bimbel & Les Privat LPS Education di ${dynamicLocationName} hadir dengan program persiapan terbaik online & offline.`;
  const ogImageAlt = `Bimbel Les Privat UTBK SNBT ${dynamicLocationName} LPS Education`;
  const articleTags = [
    "bimbel UTBK SNBT",
    "les privat UTBK",
    "les SNBT",
    "persiapan masuk PTN",
    "UTBK online",
    "UTBK offline",
    "guru privat UTBK",
    "soal UTBK",
    "tryout UTBK",
    "bimbingan SBMPTN",
    "Simak UI",
    "UTUL UGM",
    "jalur mandiri PTN",
    "masuk Kedokteran",
    "materi TPS",
    "penalaran matematika",
    "literasi bahasa",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "SNBP",
    "SNPMB",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel UTBK SNBT ${dynamicLocationName}, les privat UTBK ${dynamicLocationName}, les SNBT ${dynamicLocationName}, persiapan masuk PTN ${dynamicLocationName}, UTBK online ${dynamicLocationName}, UTBK offline ${dynamicLocationName}, guru privat UTBK ${dynamicLocationName}, soal UTBK ${dynamicLocationName}, tryout UTBK ${dynamicLocationName}, bimbingan SBMPTN ${dynamicLocationName}, Simak UI ${dynamicLocationName}, UTUL UGM ${dynamicLocationName}, jalur mandiri PTN ${dynamicLocationName}, masuk Kedokteran ${dynamicLocationName}, TPS ${dynamicLocationName}, penalaran matematika ${dynamicLocationName}, literasi bahasa ${dynamicLocationName}, LPS Education, SNBP ${dynamicLocationName}, SNPMB ${dynamicLocationName}`}
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
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {articleTags.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta property="article:section" content="UTBK SNBT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "@id": "${canonicalUrl}#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@id": "${baseUrl}", "name": "Home" } },
            { "@type": "ListItem", "position": 2, "item": { "@id": "${baseUrl}/les-privat-utbk-terbaik", "name": "Bimbel & Les Privat UTBK SNBT" } },
            { "@type": "ListItem", "position": 3, "item": { "@id": "${canonicalUrl}", "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}" } }
          ]
        },
        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Bimbel & Les Privat UTBK SNBT terbaik di ${dynamicLocationName} untuk memastikan siswa lolos PTN favorit.",
          "url": "${canonicalUrl}",
          "areaServed": "${dynamicLocationName}",
          "sameAs": ["${baseUrl}", "https://www.instagram.com/lps.privatsbmptn/", "https://www.tiktok.com/@lesprivatsbmptn.com"],
          "brand": { "@type": "Brand", "name": "LPS Education", "logo": "${baseUrl}/images/LOGO2.webp" },
          "contactPoint": { "@type": "ContactPoint", "telephone": "+62-858-8756-2039", "contactType": "Customer Service", "areaServed": "ID", "availableLanguage": ["Indonesian"] },
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
            "name": "Bimbel & Les Privat UTBK SNBT di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Masuk Perguruan Tinggi Negeri",
            "areaServed": "${dynamicLocationName}",
            "offers": { "@type": "Offer", "priceCurrency": "IDR", "availability": "https://schema.org/InStock", "url": "${canonicalUrl}" }
          }
        },
        {
          "@type": "FAQPage",
          "@id": "${canonicalUrl}#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Apa perbedaan Bimbel dan Les Privat UTBK SNBT yang ditawarkan LPS Education di ${dynamicLocationName}?",
              "acceptedAnswer": { "@type": "Answer", "text": "Bimbel adalah bimbingan dalam kelas kecil (kelompok), sedangkan Les Privat adalah bimbingan 1-on-1 yang lebih personal, fleksibel, dan fokus pada kelemahan spesifik siswa." }
            },
            {
              "@type": "Question",
              "name": "Apakah LPS Education menjamin kelulusan siswa ke PTN Favorit?",
              "acceptedAnswer": { "@type": "Answer", "text": "LPS Education berkomitmen memberikan program terbaik, materi terstruktur, dan bimbingan tutor ahli. Kami memberikan garansi pengulangan program untuk beberapa skema, namun kelulusan sangat bergantung pada usaha dan kedisiplinan siswa." }
            },
            {
              "@type": "Question",
              "name": "Bagaimana LPS Education menyusun jadwal belajar UTBK SNBT?",
              "acceptedAnswer": { "@type": "Answer", "text": "Jadwal disusun secara fleksibel dan personal. Kami akan menyesuaikan ketersediaan waktu siswa dan tutor, memastikan sesi belajar tidak mengganggu aktivitas sekolah atau kegiatan lainnya." }
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
          defaultProgramName={utbkDefaultProgramName}
          imageUrlsDesktop={utbkImagesDescktop}
          imageUrlsMobile={utbkImagesMobile}
          descriptionParagraphs={utbkDescription}
          programName="Bimbel & Les Privat UTBK SNBT"
          city={dynamicLocationName}
        />
        <TigaJalurMasukPTN />
        <Slider />

        {/* Below the fold — lazy load */}
        <Suspense fallback={null}>
          <MataPelajaranLPSNew />
          <PerbedaanSBMPTAndSNBT />
          <MateriUjianSNBT />
          <VisiEndMisiLps />
          <VideoKarantina />
          <ProfileTutor city={dynamicLocationName} />
          <UnivPengajarLps />
          <KeunggulanEndAlasanMemilih />
          <SolusiSuksesMasukPTN />
          <CaraBelajarOfflineAtauOnline />
          <AlumniLpsNew city={dynamicLocationName} />
          <GaleryBelajarSiswa
            description={galleryBelajarSiswaUTBK.description}
          />
          <TestimoniWaSlider cityProp={dynamicLocationName} />
          <SuccessStory city={dynamicLocationName} />
          <TestimoniWaSiswa cityProp={dynamicLocationName} />
          <AllAlumniLpsImage city={dynamicLocationName} />
          <ListSiswaLPS />
          <SliderTestimoniSiswa city={dynamicLocationName} />
          <FomoTicker
            namaWilayah={dynamicLocationName}
            namaProgram={"UTBK SNBT"}
          />
        </Suspense>
      </div>
    </>
  );
};

export default LesPrivatUTBKSlug;
