import { Helmet } from "react-helmet-async";
import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../../components/Slider/Slider";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AsalUniversitasMahasiswa from "./Components/AsalUniversitasMahasiswa/AsalUniversitasMahasiswa";
import FasilitasMahasiswa from "./Components/FasilitasMahasiswa/FasilitasMahasiswa";
import HeroLPSMahasiswa from "./Components/HeroLPSMahasiswa/HeroLPSMahasiswa";
import LayananLPSMahasiswa from "./Components/LayananLPSMahasiswa/LayananLPSMahasiswa";
import PaketLPSMahasiswa from "./Components/PaketLPSMahasiswa/PaketLPSMahasiswa";
import "./LesPrivatMahasiswa.css";
import {
  galleryBelajarMahasiswaData,
  testimoniWaSliderMahasiswaData,
} from "../../../helpers/DummyData/Mahasiswa/mahasiswa_dummyData";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";

const LesPrivatMahasiswa = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const canonicalUrl = `${baseUrl}/les-privat-mahasiswa-terbaik`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/MAHASISWA.webp";

  // Judul dan Deskripsi yang dioptimalkan dengan branding "LPS Education"
  const pageTitle = `🎓 Les Privat Mahasiswa Online & Offline | Kedokteran, Akuntansi, Teknik - LPS Education`;
  const descriptionContent = `Bimbingan Les Privat Mahasiswa online dan guru datang ke rumah dari LPS Education untuk berbagai jurusan: Kedokteran, Akuntansi, Ekonomi, Manajemen, Hukum, Teknik, dll. Tingkatkan IPK, sukses skripsi/tes. Pengajar profesional.`;
  const ogTitle = `Les Privat Mahasiswa Online & Offline | Kedokteran, Akuntansi, Teknik - LPS Education`;
  const ogDescription = `Dapatkan bimbingan privat komprehensif untuk mahasiswa dari berbagai jurusan. Tingkatkan pemahaman materi, raih IPK tinggi, dan sukseskan studi Anda bersama pengajar profesional LPS Education.`;
  const twitterTitle = `Les Privat Mahasiswa | LPS Education`;
  const twitterDescription = `Bimbingan privat untuk mahasiswa Kedokteran, Akuntansi, Ekonomi, Manajemen, dan jurusan lainnya. Tersedia online dan guru datang ke rumah dari LPS Education. Dukungan akademik untuk kesuksesan Anda.`;

  const ogImageAlt = "Les Privat Mahasiswa Online Offline LPS Education";

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
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat mahasiswa, bimbingan mahasiswa, les online mahasiswa, guru privat mahasiswa, les Kedokteran, les Akuntansi, les Ekonomi, les Manajemen, les Teknik, les Hukum, persiapan skripsi, persiapan ujian universitas, IPK tinggi, bimbingan akademik, LPS Education, les kalkulus, les statistika, les fisika dasar, les kimia dasar, les algoritma, les pemrograman, les metode penelitian`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />{" "}
        {/* Diubah ke "article" */}
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
        <meta property="article:section" content="Les Privat Mahasiswa" />{" "}
        {/* Tambahkan section */}
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
        <LayananLPSMahasiswa />
        <Slider />
        <FasilitasMahasiswa />
        <PaketLPSMahasiswa />
        <AsalUniversitasMahasiswa />
        {/* <InformationProgram programType={"lesprivat-pascasarjana"} /> */}
        <VisiEndMisiLps />
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa
          title={galleryBelajarMahasiswaData.title}
          description={galleryBelajarMahasiswaData.description}
        />
        <TestimoniWaSlider
          title={testimoniWaSliderMahasiswaData.title}
          description={testimoniWaSliderMahasiswaData.description}
        />
        {/* <SuccessStory /> */}
        <TestimoniWaSiswa />
        <AllAlumniLpsImage />
        <ListSiswaLPS />
        <SliderTestimoniSiswa />
      </div>
    </>
  );
};

export default LesPrivatMahasiswa;
