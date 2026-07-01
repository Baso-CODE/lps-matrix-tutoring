import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import FomoTicker from "../../../../components/FomoTicker/FomoTicker";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarCPNSData,
  testimonialWaCPNSData,
  testimoniWaSliderData,
} from "../../../../helpers/DummyData/CPNS/cpnsDammyData";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import AsalSiswaLPS from "../../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS";
import ApaAjaYgDiPeroleh from "../Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh";
import BenefitLolosCPNS from "../Components/BenefitLolosCPNS/BenefitLolosCPNS";
import CpnsStages from "../Components/CpnsStages/CpnsStages";
import JadwalBelajarCPNS from "../Components/JadwalBelajarCPNS/JadwalBelajarCPNS";
import MateriLPSCPNS from "../Components/MateriLPSCPNS/MateriLPSCPNS";
import PaketBelajarCPNS from "../Components/PaketBelajarCPNS/PaketBelajarCPNS";
import ProgramCPNS from "../Components/ProgramCPNS/ProgramCPNS";
import ProgramIntensifCPNS from "../Components/ProgramIntensifCPNS/ProgramIntensifCPNS";
import SuccesStoryCPNS from "../Components/SuccesStoryCPNS/SuccesStoryCPNS";

const LesPrivatCPNSSlug = () => {
  const { slug } = useParams();

  const cpnsImagesDesktop = [
    "/images/program/program-LPS-CPNS.webp",
    "/images/program/program-LPS-SEKOLAH KEDINASAN.webp",
  ];
  const cpnsImagesMobile = [
    "/images/program/program-LPS-CPNS-mobile.webp",
    "/images/program/program-LPS-SEKOLAH-KEDINASAN-mobile.webp",
  ];

  const cpnsDefaultProgramName = "Guru Les Privat CPNS Terbaik";
  const cpnsProgramNameDisplay =
    "Les Privat Persiapan CPNS (SKD TWK, TIU, TKP)";

  const cpnsDescription = [
    // Paragraf 1
    `Menjadi PNS adalah impian dari jutaan peserta Tes CPNS. Oleh karena itu, para peserta diharapkan memiliki kompetensi yang mumpuni untuk bisa tembus tes CPNS, utamanya pada tahap ujian akademik SKD CPNS <span class='color-highlight'>TWK, TIU, dan TKP</span>.`,

    // Paragraf 2
    `Bagi Anda yang sedang mencari <span class='color-highlight'>les privat CPNS offline</span> (guru les privat ke rumah) maupun les privat online persiapan SKD CPNS, Anda berada di halaman yang tepat. <span class='color-highlight'>LPS Education</span> memiliki ribuan guru les privat yang tersebar di Jabodetabek. Kami membuka dua program: Offline (ke rumah) dan Online (menggunakan Zoom).`,

    // Paragraf 3
    `Guru privat CPNS kami adalah tutor terbaik di bidangnya yang sudah memenuhi standar dan berkompeten dalam mengajari materi soal – soal CPNS. Layanan privat berupa pembekalan materi dan latihan soal sebelum menghadapi tes sehingga Anda akan lebih siap dalam menghadapi tes CPNS.`,

    // Paragraf 4
    `<span class='color-highlight'>LPS Education</span> adalah lembaga penyedia layanan guru les privat ke rumah area Jabodetabek dan les privat Online untuk seluruh Indonesia. Selain program <span class='color-highlight'>les privat CPNS</span>, kami memiliki banyak program unggulan lainnya. Kami senantiasa memberikan layanan privat terbaik agar hasil sesuai target yang diinginkan siswa/peserta.`,
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

  const canonicalUrl = `${baseUrl}/bimbel-persiapan-cpns-terbaik-di/${slug}`;

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/CPNS.webp";

  const pageTitle = `🎓 Bimbel & Les Privat CPNS ${dynamicLocationName} | TWK TIU TKP Terbaik - LPS Education`;
  const descriptionContent = `Kursus Bimbel & Les Privat CPNS di ${dynamicLocationName} Terbaik ✔️ Dibimbing GURU PROFESIONAL ✔️ Fokus TWK, TIU, TKP ✔️ Jaminan Lolos! Daftar? Segera kunjungi situs LPS Education...`;
  const ogTitle = `Bimbel & Les Privat CPNS ${dynamicLocationName} | TWK TIU TKP Terbaik - LPS Education`;
  const ogDescription = `Persiapan CPNS dengan bimbel & les privat intensif di ${dynamicLocationName}. Pengajar berpengalaman LPS Education siap membimbing Anda lolos tes TWK, TIU, TKP. Kelas online & offline tersedia.`;
  const twitterTitle = `Bimbel & Les Privat CPNS ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Bimbel les privat CPNS untuk persiapan TWK, TIU, TKP di ${dynamicLocationName}. Raih sukses bersama LPS Education. Tersedia online & offline.`;

  const ogImageAlt = `Bimbel Les Privat CPNS ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "bimbel CPNS",
    "les privat CPNS",
    "persiapan tes CPNS",
    "TWK",
    "TIU",
    "TKP",
    "materi CPNS",
    "soal CPNS",
    "bimbingan CPNS",
    "guru CPNS",
    "ujian CPNS",
    "lolos CPNS",
    "Latsar CPNS",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "SKD CPNS",
    "SKB CPNS",
    "cat cpns",
    "cpns online",
    "cpns offline",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel CPNS ${dynamicLocationName}, les privat CPNS ${dynamicLocationName}, persiapan tes CPNS ${dynamicLocationName}, TWK, TIU, TKP, materi CPNS ${dynamicLocationName}, soal CPNS ${dynamicLocationName}, bimbingan CPNS ${dynamicLocationName}, guru CPNS ${dynamicLocationName}, ujian CPNS ${dynamicLocationName}, lolos CPNS ${dynamicLocationName}, Latsar CPNS ${dynamicLocationName}, LPS Education, SKD CPNS ${dynamicLocationName}, SKB CPNS ${dynamicLocationName}, cat cpns ${dynamicLocationName}`}
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
        <meta property="article:section" content="CPNS" />
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
                "@id": "${baseUrl}/bimbel-persiapan-cpns-terbaik", 
                "name": "Bimbel & Les Privat CPNS" 
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
          "description": "LPS Education menyediakan Bimbel & Les Privat CPNS terbaik di **${dynamicLocationName}** dengan fokus pada materi TWK, TIU, dan TKP. Solusi komprehensif untuk lolos seleksi CASN/CPNS.",
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
            "name": "Bimbel & Les Privat Persiapan CPNS (TWK TIU TKP) di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Seleksi CPNS / CASN",
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
              "name": "Materi apa saja yang diajarkan dalam Bimbel CPNS LPS Education di ${dynamicLocationName}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Program kami fokus pada Tes Karakteristik Pribadi (TKP), Tes Intelegensi Umum (TIU), dan Tes Wawasan Kebangsaan (TWK) yang merupakan materi inti dalam Seleksi Kompetensi Dasar (SKD) CPNS."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat CPNS LPS Education menggunakan sistem CAT?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami menggunakan simulasi dan Try Out berbasis Computer Assisted Test (CAT) untuk membiasakan siswa dengan format ujian CPNS yang sebenarnya, melatih kecepatan dan akurasi mereka."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama idealnya waktu persiapan CPNS?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Persiapan yang ideal adalah minimal 3 hingga 6 bulan sebelum tanggal ujian. Ini memberikan waktu yang cukup untuk menguasai semua materi TWK, TIU, dan TKP, serta melakukan Try Out secara berkala."
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
          defaultProgramName={cpnsDefaultProgramName}
          imageUrlsDesktop={cpnsImagesDesktop}
          imageUrlsMobile={cpnsImagesMobile}
          descriptionParagraphs={cpnsDescription}
          programName={cpnsProgramNameDisplay}
          city={dynamicLocationName}
        />
        <ProgramIntensifCPNS />
        <MateriLPSCPNS />
        <BenefitLolosCPNS />
        <CpnsStages />
        <Slider />
        <PaketBelajarCPNS />
        <ProgramCPNS />
        <ApaAjaYgDiPeroleh />
        <JadwalBelajarCPNS />
        <VisiEndMisiLps />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <GaleryBelajarSiswa description={galleryBelajarCPNSData.description} />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          description={testimoniWaSliderData.description}
          title={testimoniWaSliderData.title}
        />
        <AsalSiswaLPS />
        <SuccesStoryCPNS city={dynamicLocationName} />
        <TestimoniWaSiswa
          cityProp={dynamicLocationName}
          title={testimonialWaCPNSData.title}
          description={testimonialWaCPNSData.description}
          imageDesktop={testimonialWaCPNSData.imageDesktop}
          imageMobile={testimonialWaCPNSData.imageMobile}
        />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />{" "}
        <FomoTicker
          namaWilayah={dynamicLocationName}
          namaProgram={"CPNS & Kedinasan"}
        />
      </div>
    </>
  );
};

export default LesPrivatCPNSSlug;
