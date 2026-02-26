import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarMahasiswaData,
  testimoniWaSliderMahasiswaData,
} from "../../../../helpers/DummyData/Mahasiswa/mahasiswa_dummyData";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import AsalUniversitasMahasiswa from "../Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa";
import FasilitasMahasiswa from "../Components/FasilitasMahasiswa/FasilitasMahasiswa";
import LayananLPSMahasiswa from "../Components/LayananLPSMahasiswa/LayananLPSMahasiswa";
import PaketLPSMahasiswa from "../Components/PaketLPSMahasiswa/PaketLPSMahasiswa";

const LesPrivatMahasiswaSlug = () => {
  const { slug } = useParams();

  const mahasiswaImagesDescktop = [
    "/images/program/program-LPS-MAHASISWA.webp",
    "/images/program/program-LPS-KELAS-INTERNASIONAL.webp",
  ];

  const mahasiswaImagesMobile = [
    "/images/program/program-LPS-MAHASISWA-mobile.webp",
    "/images/program/program-LPS-KELAS-INTERNASIONAL-mobile.webp",
  ];
  const mahasiswaDefaultProgramName = "Program Les Privat Mahasiswa";
  const mahasiswaProgramNameDisplay =
    "Program Les Privat Mahasiswa - Privat Offline dan Online";

  const mahasiswaDescription = [
    // Paragraf 1
    `Program Les Privat Mahasiswa adalah suatu bentuk program belajar fokus Intensif belajar Mata Kuliah Jurusan dan Universitas dengan sistem belajar <span class='color-highlight'>Privat Offline (guru datang ke rumah)</span> dan <span class='color-highlight'>Privat Online</span>.`,

    // Paragraf 2
    `Tim Pengajar Les Privat Mahasiswa adalah alumni - alumni terbaik dari UI, ITB, UGM, Unpad, IPB, STAN, STIS, dan perguruan tinggi lainnya yang berpengalaman dan berkompeten di bidangnya, serta telah melalui serangkaian proses seleksi ketat.`,

    // Paragraf 3
    `Pendaftar Program Les Privat Mahasiswa juga bisa menuliskan kriteria pengajar yang diinginkan, misalnya harus dari Universitas dan Jurusan yang sama, atau pernah menjadi Asisten Dosen, dan sebagainya.`,
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

  const canonicalUrl = `${baseUrl}/les-privat-mahasiswa-terbaik-di/${slug}`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/MAHASISWA.webp"; // Pastikan URL gambar ini relevan

  // Judul dan Deskripsi yang Optimal dengan brand "LPS Education" dan lokasi dinamis
  const pageTitle = `🎓 Les Privat Mahasiswa di ${dynamicLocationName} | Kedokteran, Akuntansi, Teknik - LPS Education`;
  const descriptionContent = `Bimbingan Les Privat Mahasiswa di ${dynamicLocationName} Terbaik dari LPS Education ✔️ Guru Datang ke Rumah/Online ✔️ Untuk Kedokteran, Akuntansi, Teknik & Jurusan Lain. Tingkatkan IPK, sukses skripsi/tes.`;
  const ogTitle = `Les Privat Mahasiswa di ${dynamicLocationName} | Kedokteran, Akuntansi, Teknik - LPS Education`;
  const ogDescription = `Dapatkan bimbingan privat komprehensif untuk mahasiswa di ${dynamicLocationName} dari berbagai jurusan. Tingkatkan pemahaman materi, raih IPK tinggi, dan sukseskan studi Anda bersama pengajar profesional LPS Education.`;
  const twitterTitle = `Les Privat Mahasiswa di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Bimbingan privat untuk mahasiswa Kedokteran, Akuntansi, Ekonomi, Manajemen, dan jurusan lainnya di ${dynamicLocationName}. Tersedia online dan guru datang ke rumah dari LPS Education. Dukungan akademik untuk kesuksesan Anda.`;

  const ogImageAlt = `Les Privat Mahasiswa ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "les privat mahasiswa",
    "bimbingan mahasiswa",
    "les online mahasiswa",
    "guru privat mahasiswa",
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
    dynamicLocationName.toLowerCase(), // Tambahkan slug lokasi sebagai tag
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
          content={`les privat mahasiswa ${dynamicLocationName}, bimbingan mahasiswa ${dynamicLocationName}, les online mahasiswa ${dynamicLocationName}, guru privat mahasiswa ${dynamicLocationName}, les Kedokteran ${dynamicLocationName}, les Akuntansi ${dynamicLocationName}, les Ekonomi ${dynamicLocationName}, les Manajemen ${dynamicLocationName}, les Teknik ${dynamicLocationName}, les Hukum ${dynamicLocationName}, persiapan skripsi, persiapan ujian universitas, IPK tinggi, bimbingan akademik, LPS Education, les kalkulus ${dynamicLocationName}, les statistika ${dynamicLocationName}, les fisika dasar ${dynamicLocationName}, les kimia dasar ${dynamicLocationName}, les algoritma ${dynamicLocationName}, les pemrograman ${dynamicLocationName}, les metode penelitian ${dynamicLocationName}`}
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
        <meta property="article:section" content="Les Privat Mahasiswa" />

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
                "@id": "${baseUrl}/les-privat-mahasiswa-terbaik", 
                "name": "Les Privat Mahasiswa" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "Les Privat Mahasiswa di ${dynamicLocationName}" 
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "LPS Education",
          "description": "LPS Education menyediakan Les Privat Mahasiswa terbaik di ${dynamicLocationName}. Bimbingan mata kuliah jurusan (Kedokteran, Teknik, dll.) untuk meningkatkan IPK.",
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
            "name": "Les Privat Mahasiswa (Mata Kuliah Jurusan) di ${dynamicLocationName}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Bimbingan Belajar Akademik Universitas",
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
              "name": "Mata kuliah apa saja yang bisa dileskan untuk mahasiswa di ${dynamicLocationName}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "LPS Education melayani les privat untuk berbagai mata kuliah, termasuk Kalkulus, Statistika, Fisika Dasar, Kimia Dasar, Akuntansi, Teknik, Kedokteran, dan mata kuliah spesifik jurusan lainnya."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tutor Les Privat Mahasiswa LPS Education berasal dari PTN terkemuka?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, tim pengajar kami adalah alumni dan mahasiswa berprestasi dari PTN ternama seperti UI, ITB, UGM, Unpad, IPB, dan lain-lain, yang berkompeten di bidang mata kuliah masing-masing."
              }
            },
            {
              "@type": "Question",
              "name": "Berapa lama durasi belajar privat untuk mahasiswa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Durasi belajar sangat fleksibel. Biasanya per sesi adalah 90 atau 120 menit, dan jumlah sesi per minggu disesuaikan dengan kebutuhan mahasiswa, jadwal ujian, serta tingkat kesulitan mata kuliah."
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
          defaultProgramName={mahasiswaDefaultProgramName}
          imageUrlsDesktop={mahasiswaImagesDescktop}
          imageUrlsMobile={mahasiswaImagesMobile}
          descriptionParagraphs={mahasiswaDescription}
          programName={mahasiswaProgramNameDisplay}
        />
        <LayananLPSMahasiswa />
        <Slider />
        <FasilitasMahasiswa />
        <PaketLPSMahasiswa />
        <AsalUniversitasMahasiswa />
        {/* <InformationProgram programType={"lesprivat-pascasarjana"} /> */}
        <VisiEndMisiLps />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <AlumniLpsNew city={dynamicLocationName} />
        <GaleryBelajarSiswa
          title={galleryBelajarMahasiswaData.title}
          description={galleryBelajarMahasiswaData.description}
        />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          title={testimoniWaSliderMahasiswaData.title}
          description={testimoniWaSliderMahasiswaData.description}
        />
        {/* <SuccessStory /> */}
        <TestimoniWaSiswa cityProp={dynamicLocationName} />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />
      </div>
    </>
  );
};

export default LesPrivatMahasiswaSlug;
