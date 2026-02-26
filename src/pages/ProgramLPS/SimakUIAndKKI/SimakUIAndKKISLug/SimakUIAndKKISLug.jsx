import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import VideoKarantina from "../../../../components/VideoKarantina/VideoKarantina";
import {
  galleryBelajarSiswaSimakUI,
  successStoryWaSliderSimakUI,
} from "../../../../helpers/DummyData/SIMAK-UI/simak-ui_dummyData";
import FiturDanLayanan from "../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import FasilitasSimakUI from "../Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarSimakUI from "../Components/PaketBelajarSimakUI/PaketBelajarSimakUI";

const SimakUIAndKKISLug = () => {
  const { slug } = useParams();

  const simakUIImagesDescktop = [
    "/images/program/program-LPS-SIMAK-UI-KKI.webp",
  ];
  const simakUIImagesMobile = [
    "/images/program/program-LPS-SIMAK-UI-KKI-mobile.webp",
  ];
  const simakUIDefaultProgramName =
    "Bimbingan Belajar Intensif Les Privat Simak UI";
  const simakUIProgramNameDisplay =
    "Bimbingan Belajar Intensif Les Privat Simak UI dan KKI";
  const simakUIDescription = [
    // Paragraf 1 (Definisi Program)
    `Program <span class='color-highlight'>Super Intensif Privat Simak UI</span> merupakan suatu bentuk program belajar fokus Intensif Persiapan Ujian Simak UI dengan sistem belajar <span class='color-highlight'>Privat Offline</span> (guru datang ke rumah) dan <span class='color-highlight'>Privat Online</span>. Program ini disusun secara sistematis dan didukung dengan guru les privat berpengalaman untuk program Seleksi Masuk Universitas Indonesia. Program belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan keterampilan penyelesaian soal-soal Simak UI.`,

    // Paragraf 2 & 3 (Monitoring dan Target, digabung)
    `Progress belajar akan dimonitoring oleh Tim Akademik LPS Education. Kami akan memberikan rekomendasi yang dibutuhkan sesuai dengan progres belajar siswa. Target Program Super Intensif Simak UI adalah mengantarkan siswa <span class='color-highlight'>Sukses Masuk UI sesuai jurusan yang diinginkan</span>.`,

    // Paragraf 4 (Jenis Layanan SIMAK UI yang dicakup)
    `<span class='color-highlight'>LPS Education</span> memiliki Layanan Intensif Les Privat Simak UI dan KKI yang ditujukan untuk siswa SMA dan alumni untuk jenjang Sarjana Reguler, Vokasi (D3/D4), dan S1 Kelas Internasional UI (KKI). Selain itu, kami juga memiliki layanan Les Privat Simak UI untuk <span class='color-highlight'>S2 dan S3 (Pascasarjana)</span>.`,
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
  // URL kanonis untuk halaman slug ini
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-simak-ui-utul-ugm-di/${slug}`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp";

  // Judul dan Deskripsi yang Optimal dengan brand "LPS Education" dan lokasi dinamis
  const pageTitle = `🏫 Bimbel & Les Privat SIMAK UI di ${dynamicLocationName} | KKI UI & UTUL UGM - LPS Education`;
  const descriptionContent = `Kursus Bimbel & Les Privat SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU PROFESIONAL ✔️ Jaminan Lolos UI & UGM. Daftar? Segera kunjungi situs LPS Education.`;
  const ogTitle = `Bimbel & Les Privat SIMAK UI di ${dynamicLocationName} | KKI UI & UTUL UGM - LPS Education`;
  const ogDescription = `Program bimbingan intensif SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dari LPS Education di ${dynamicLocationName}. Dapatkan persiapan terbaik untuk lolos seleksi UI & UGM.`;
  const twitterTitle = `Bimbel & Les Privat SIMAK UI di ${dynamicLocationName} | KKI UI & UTUL UGM - LPS Education`;
  const twitterDescription = `Siapkan diri Anda untuk SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dengan bimbingan terbaik di ${dynamicLocationName} dari LPS Education. Fasilitas lengkap dan pengajar berpengalaman.`;

  const ogImageAlt = `Bimbel Les Privat SIMAK UI KKI UTUL UGM ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "bimbel SIMAK UI",
    "les privat SIMAK UI",
    "persiapan SIMAK UI",
    "SIMAK KKI UI",
    "les privat KKI UI",
    "bimbel UTUL UGM",
    "CBT UGM",
    "bimbingan masuk UI",
    "bimbingan masuk UGM",
    "les privat PTN",
    "tryout SIMAK UI",
    "materi SIMAK UI",
    "LPS Education",
    "lolos UI",
    "lolos UGM",
    "SIMAK UI S1",
    "SIMAK UI Vokasi",
    "SIMAK UI Internasional",
    "UTUL UGM CBT",
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
          content={`bimbel SIMAK UI ${dynamicLocationName}, les privat SIMAK UI ${dynamicLocationName}, persiapan SIMAK UI ${dynamicLocationName}, SIMAK KKI UI ${dynamicLocationName}, les KKI UI ${dynamicLocationName}, bimbel UTUL UGM ${dynamicLocationName}, CBT UGM ${dynamicLocationName}, bimbingan masuk UI ${dynamicLocationName}, bimbingan masuk UGM ${dynamicLocationName}, les privat PTN ${dynamicLocationName}, tryout SIMAK UI ${dynamicLocationName}, materi SIMAK UI ${dynamicLocationName}, LPS Education, lolos UI ${dynamicLocationName}, lolos UGM ${dynamicLocationName}, SIMAK UI S1 ${dynamicLocationName}, SIMAK UI Vokasi ${dynamicLocationName}, SIMAK UI Internasional ${dynamicLocationName}, UTUL UGM CBT ${dynamicLocationName}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        {/* Open Graph Meta Tags (for social media sharing) */}
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
        <meta property="article:section" content="SIMAK UI & UTUL UGM" />
        {/* Twitter Card Meta Tags */}
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
                "@id": "${baseUrl}/bimbel-les-privat-simak-ui-utul-ugm", 
                "name": "Bimbel & Les Privat SIMAK UI & UTUL UGM" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}" 
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Bimbel & Les Privat SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) terbaik di **${dynamicLocationName}**. Bimbingan intensif oleh tutor berpengalaman untuk menguasai materi ujian mandiri.",
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
            "name": "Bimbel & Les Privat SIMAK UI, KKI UI, UTUL UGM di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Mandiri PTN (UI & UGM)",
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
              "name": "Apa yang membuat Bimbel SIMAK UI/UTUL UGM LPS Education di ${dynamicLocationName} berbeda?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami fokus pada penguasaan materi inti, strategi pengerjaan soal khusus SIMAK dan UTUL, serta menyediakan try out berkala dengan sistem penilaian yang mendekati standar ujian mandiri kedua universitas tersebut."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat ini juga mencakup materi KKI UI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, program kami memiliki kurikulum khusus untuk SIMAK UI Kelas Internasional (KKI UI) yang sering kali memiliki materi dan format ujian yang berbeda dari SIMAK Reguler."
              }
            },
            {
              "@type": "Question",
              "name": "Bisakah saya memilih guru spesialis SIMAK UI atau UTUL UGM?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Kami memiliki tim guru spesialis yang berpengalaman dalam membimbing siswa untuk ujian mandiri UI dan UGM, memungkinkan Anda memilih guru yang paling sesuai dengan kebutuhan mata pelajaran yang diujikan."
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
        <HeadingLPSProgramDynamic
          city={dynamicLocationName}
          defaultProgramName={simakUIDefaultProgramName}
          imageUrlsDesktop={simakUIImagesDescktop}
          imageUrlsMobile={simakUIImagesMobile}
          descriptionParagraphs={simakUIDescription}
          programName={simakUIProgramNameDisplay}
        />
        <FasilitasSimakUI />
        <PaketBelajarSimakUI />
        {/* <ProgramBelajarSIMAKUI /> */}
        <Slider />
        {/* <InformationProgram programType={"simak-ui"} /> */}
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <VideoKarantina />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <AlumniLpsNew city={dynamicLocationName} />
        <GaleryBelajarSiswa
          description={galleryBelajarSiswaSimakUI.description}
        />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          title={successStoryWaSliderSimakUI.title}
          description={successStoryWaSliderSimakUI.description}
        />
        <SuccessStory city={dynamicLocationName} />
        <TestimoniWaSiswa cityProp={dynamicLocationName} />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />
      </div>
    </>
  );
};

export default SimakUIAndKKISLug;
