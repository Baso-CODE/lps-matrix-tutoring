import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import { testimoniWaSliderPascaSarjanaData } from "../../../../helpers/DummyData/Pascasarjana/pascasarjanaDammyData";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import FasilitasPascaSarjana from "../Components/FasilitasPascaSarjana";
import PaketBelajarPascaSarjana from "../Components/PaketBelajarPascaSarjana/PaketBelajarPascaSarjana";
import ProgramIntensiPascaSarjana from "../Components/ProgramIntensiPascaSarjana/ProgramIntensiPascaSarjana";
const LesPrivatPascaSarjanaSlug = () => {
  const { slug } = useParams();

  const pascaSarjanaImagesDescktop = [
    "/images/program/program-LPS-UJIAN-MASUK-PASCASARJANA-S2-S3.webp",
  ];

  const pascaSarjanaImagesMobile = [
    "/images/program/program-LPS-UJIAN-MASUK-PASCASARJANA-S2-S3-mobile.webp",
  ];
  const pascaSarjanaDefaultProgramName =
    "Les Privat Ujian Masuk Pascasarjana (S2/S3)";
  const pascaSarjanaProgramNameDisplay =
    "Super Intensif Privat Ujian Masuk Simak UI S2/S3 & Pascasarjana PTN Favorit";

  const pascaSarjanaDescription = [
    `Menghadapi ujian masuk Pascasarjana seperti <span class='color-highlight'>SIMAK UI S2/S3</span> dan seleksi Pascasarjana universitas lainnya membutuhkan strategi belajar yang tepat, pemahaman materi yang mendalam, serta pendampingan belajar secara intensif.`,
    `<span class='color-highlight'>LPS Education</span> memiliki Layanan Program Les Privat Persiapan Ujian Masuk Pascasarjana S2/S3 untuk berbagai Perguruan Tinggi di antaranya UI, UGM, ITB, Unpad, UNJ, Unair, dan lainnya. Kami hadir sebagai pendamping belajar Anda agar sukses meraih impian melanjutkan studi ke jenjang yang lebih tinggi.`,
    `Layanan kami mencakup Les Privat Simak UI S2/S3/Profesi/Spesialis, Les Privat SMUP Unpad Pascasarjana, Les Privat SM ITB Pascasarjana, Les Privat UM UGM Pascasarjana, dan ujian masuk Pascasarjana PTN lainnya.`,
    `Program belajar difokuskan pada pendalaman konsep dasar materi dan peningkatan keterampilan penyelesaian soal-soal Ujian Masuk Pascasarjana S2/S3, yaitu <span class='color-highlight'>TPA dan Bahasa Inggris</span>. Kami menjamin jadwal belajar fleksibel dan tutor yang kompeten.`,
  ];

  const formatSlugToTitle = (textSlug) => {
    return textSlug
      ? textSlug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : "";
  };

  const dynamicLocationName = formatSlugToTitle(slug) || "Online";

  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const canonicalUrl = `${baseUrl}/les-privat-pascasarjana-terbaik-di/${slug}`;
  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/PASCA-SARJANA.webp"; //

  const pageTitle = `🎓 Les Privat Pasca Sarjana di ${dynamicLocationName} |  Persiapan S2/S3 - LPS Education`;
  const descriptionContent = `Bimbingan Les Privat Pasca Sarjana di ${dynamicLocationName} Terbaik dari LPS Education ✔️ Guru Datang ke Rumah/Online ✔️ Untuk Kedokteran, Akuntansi, Teknik & Jurusan Lain. Tingkatkan IPK, sukses skripsi/tes.`;
  const ogTitle = `Les Privat Pasca Sarjana di ${dynamicLocationName} |  Persiapan S2/S3 - LPS Education`;
  const ogDescription = `Dapatkan bimbingan privat komprehensif untuk pascasarjana di ${dynamicLocationName} dari berbagai jurusan. Tingkatkan pemahaman materi, raih IPK tinggi, dan sukseskan studi Anda bersama pengajar profesional LPS Education.`;
  const twitterTitle = `Les Privat Pasca Sarjana di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Bimbingan privat untuk pascasarjana Kedokteran, Akuntansi, Ekonomi, Manajemen, dan jurusan lainnya di ${dynamicLocationName}. Tersedia online dan guru datang ke rumah dari LPS Education. Dukungan akademik untuk kesuksesan Anda.`;

  const ogImageAlt = `Les Privat Pasca Sarjana ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "les privat pascasarjana",
    "bimbingan pascasarjana",
    "les online pascasarjana",
    "guru privat pascasarjana",
    "les Kedokteran",
    "les Akuntansi",
    "les Ekonomi",
    "les Manajemen",
    "les Teknik",
    "les Hukum",
    "persiapan skripsi",
    "persiapan ujian universitas",
    "IPK tinggi",
    "bimbingan akademik",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "les kalkulus",
    "les statistika",
    "les fisika dasar",
    "les kimia dasar",
    "les algoritma",
    "les pemrograman",
    "les metode penelitian",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat pascasarjana ${dynamicLocationName}, bimbingan pascasarjana ${dynamicLocationName}, les online pascasarjana ${dynamicLocationName}, guru privat pascasarjana ${dynamicLocationName}, les Kedokteran ${dynamicLocationName}, les Akuntansi ${dynamicLocationName}, les Ekonomi ${dynamicLocationName}, les Manajemen ${dynamicLocationName}, les Teknik ${dynamicLocationName}, les Hukum ${dynamicLocationName}, persiapan skripsi, persiapan ujian universitas, IPK tinggi, bimbingan akademik, LPS Education, les kalkulus ${dynamicLocationName}, les statistika ${dynamicLocationName}, les fisika dasar ${dynamicLocationName}, les kimia dasar ${dynamicLocationName}, les algoritma ${dynamicLocationName}, les pemrograman ${dynamicLocationName}, les metode penelitian ${dynamicLocationName}`}
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
        <meta property="article:section" content="Les Privat Pasca Sarjana" />

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
                "@id": "${baseUrl}/les-privat-pascasarjana-terbaik", 
                "name": "Les Privat Pascasarjana"
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "Les Privat Pascasarjana di ${dynamicLocationName}"
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Les Privat Pascasarjana (S2/S3) terbaik di ${dynamicLocationName}. Fokus pada persiapan ujian TPA dan Bahasa Inggris untuk SIMAK UI S2/S3, UGM, ITB, dan PTN lainnya.",
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
            "name": "Les Privat Ujian Masuk Pascasarjana (S2/S3) di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Ujian Seleksi Pascasarjana",
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
              "name": "Materi ujian masuk Pascasarjana apa saja yang diajarkan LPS Education?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami fokus pada materi inti ujian Pascasarjana, yaitu Tes Potensi Akademik (TPA) atau Tes Kemampuan Dasar Akademik (TKDA) dan Bahasa Inggris (seperti TOEFL/IELTS/EAP) yang dipersyaratkan oleh UI, UGM, ITB, dan PTN lainnya."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat Pascasarjana melayani semua jenjang (S2, S3, Profesi, Spesialis)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, kami melayani persiapan intensif untuk jenjang Magister (S2), Doktor (S3), Profesi, dan Spesialis (PPDS), termasuk ujian SIMAK UI S2/S3/Spesialis dan seleksi Pascasarjana PTN favorit lainnya."
              }
            },
            {
              "@type": "Question",
              "name": "Sistem belajar apa yang digunakan untuk Les Privat Pascasarjana?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kami menawarkan sistem belajar Privat Offline (guru datang ke rumah/tempat lain yang disepakati) dan Privat Online melalui platform digital, memberikan fleksibilitas penuh bagi calon mahasiswa Pascasarjana."
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
          defaultProgramName={pascaSarjanaDefaultProgramName}
          imageUrlsDesktop={pascaSarjanaImagesDescktop}
          imageUrlsMobile={pascaSarjanaImagesMobile}
          descriptionParagraphs={pascaSarjanaDescription}
          programName={pascaSarjanaProgramNameDisplay}
        />
        <Slider />
        <FasilitasPascaSarjana />
        <PaketBelajarPascaSarjana />
        <ProgramIntensiPascaSarjana />
        <VisiEndMisiLps />
        <ProfileTutor />
        <UnivPengajarLps />
        <GaleryBelajarSiswa />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          title={testimoniWaSliderPascaSarjanaData.title}
          description={testimoniWaSliderPascaSarjanaData.description}
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

export default LesPrivatPascaSarjanaSlug;
