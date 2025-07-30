import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import SuccessStory from "../../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import FasilitasSimakUI from "../../SimakUIAndKKI/Components/FasilitasSimakUI/FasilitasSimakUI";
import AsalUniversitasMahasiswa from "../Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa";
import HeroLPSMahasiswa from "../Components/HeroLPSMahasiswa/HeroLPSMahasiswa";
import LayananLPSMahasiswa from "../Components/LayananLPSMahasiswa/LayananLPSMahasiswa";
import PaketLPSMahasiswa from "../Components/PaketLPSMahasiswa/PaketLPSMahasiswa";

const LesPrivatMahasiswaSlug = () => {
  const { slug } = useParams();

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

        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
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
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${baseUrl}/les-privat-mahasiswa-terbaik", 
                        "name": "Les Privat Mahasiswa"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
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
        <HeroLPSMahasiswa />
        <Slider />
        <LayananLPSMahasiswa />
        <FasilitasSimakUI />
        <PaketLPSMahasiswa />
        <AsalUniversitasMahasiswa />
        {/* <InformationProgram programType={"lesprivat-pascasarjana"} /> */}
        <VisiEndMisiLps />
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa />
        <TestimoniWaSlider />
        <SuccessStory />
        <TestimoniWaSiswa />
      </div>
    </>
  );
};

export default LesPrivatMahasiswaSlug;
