import { Helmet } from "react-helmet-async";
import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarOSNData,
  successStoryWaSliderOSN,
} from "../../../helpers/DummyData/OSN/osn_dummy_data";
import FiturDanLayanan from "../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import FasilitasOSN from "./Components/FasilitasOSN";
import OsnCurriculumOverview from "./Components/OsnCurriculumOverview/OsnCurriculumOverview";
import OsnWinnerBenefits from "./Components/OsnWinnerBenefits/OsnWinnerBenefits";
import PaketBelajarOSN from "./Components/PaketBelajarOSN/PaketBelajarOSN";
import ProgramIntensiOSN from "./Components/ProgramIntensiOSN/ProgramIntensiOSN";
import "./LesPrivatOSN.css";

const LesPrivatOSN = () => {
  const osnImagesDescktop = ["/images/program/program-LPS-OLIMPIADE.png"];
  const osnImagesMobile = ["/images/program/program-LPS-OLIMPIADE-mobile.png"];

  const osnDefaultProgramName = "Les Privat OSN, ISO, IMO, SEAMO";
  const osnProgramNameDisplay =
    "Les Privat OSN, ISO, IMO, SEAMO (ONLINE & OFFLINE)";

  const osnDescription = [
    `<span class='color-highlight'>LPS Education</span> - Program Les Privat OSN, ISO, IMO dirancang khusus untuk siswa yang ingin meraih prestasi luar biasa di ajang <span class='color-highlight'>Olimpiade Sains Nasional (OSN)</span> serta kompetisi internasional seperti ISO, IMO, dan SEAMO. Program ini tersedia dalam format <span class='color-highlight'>Privat Offline</span> dan <span class='color-highlight'>Privat Online</span>.`,
    `Dengan guru les privat yang berpengalaman mendampingi siswa persiapan Olimpiade di tingkat nasional maupun internasional, program ini memastikan <span class='color-highlight'>pendalaman konsep dasar</span>, penyelesaian soal-soal tingkat tinggi, dan bimbingan intensif. Progress belajar siswa dipantau secara berkala oleh Tim Akademik.`,
    `Target utama kami adalah mendukung siswa dalam meraih medali bergengsi pada ajang Olimpiade. Fokus utama kami terletak pada penguasaan materi yang mendalam dan pencapaian prestasi akademik yang luar biasa. Wujudkan potensi terbaik Anda di bidang akademik dengan <span class='color-highlight'>Program Super Intensif Privat OSN dan Olimpiade Internasional</span>.`,
  ];
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/les-privat-osn-terbaik`;

  const pageTitle = `📚 Les Privat Olimpiade OSN (Olimpiade Sains Nasional) Online & Offline Terbaik | LPS Education`;
  const descriptionContent = `Bimbel Les Privat OSN (Olimpiade Sains Nasional) terbaik dari LPS Education. Persiapan intensif OSN Matematika, Fisika, Kimia, Biologi, Komputer, dll. Guru datang ke rumah & kelas online. Jamin Juara!`;
  const ogTitle = `Les Privat Olimpiade OSN (Olimpiade Sains Nasional) Online & Offline Terbaik - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Persiapkan diri untuk Olimpiade Sains Nasional (OSN) dengan les privat intensif dari LPS Education. Pengajar berpengalaman siap membimbing siswa SD, SMP, SMA meraih medali. Tersedia guru datang ke rumah & online.`;
  const twitterTitle = `Les Privat Olimpiade OSN (Olimpiade Sains Nasional) | LPS Education`;
  const twitterDescription = `Bimbel les privat OSN (Olimpiade Sains Nasional) untuk siswa SD, SMP, SMA. Tingkatkan kemampuan sains dan raih prestasi bersama LPS Education. Tersedia online & offline.`;
  // --- AKHIR PERUBAHAN UTAMA ---

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/OSN.webp";
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
    "LPS Education",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat OSN, bimbingan OSN, Olimpiade Sains Nasional, persiapan OSN SD, persiapan OSN SMP, persiapan OSN SMA, OSN Matematika, OSN Fisika, OSN Kimia, OSN Biologi, OSN Komputer, OSN Astronomi, OSN Kebumian, OSN Geografi, OSN Ekonomi, OSN online, guru privat OSN, LPS Education, bimbel OSN, kursus OSN, juara OSN`}
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
        <meta property="article:section" content="Olimpiade" />
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
        <HeadingLPSProgramDynamic
          defaultProgramName={osnDefaultProgramName}
          imageUrlsDesktop={osnImagesDescktop}
          imageUrlsMobile={osnImagesMobile}
          descriptionParagraphs={osnDescription}
          programName={osnProgramNameDisplay}
        />
        <ProgramIntensiOSN />
        <Slider />
        <FasilitasOSN />
        <PaketBelajarOSN />
        <OsnCurriculumOverview />
        <OsnWinnerBenefits />
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa
          title={galleryBelajarOSNData.title}
          description={galleryBelajarOSNData.description}
        />
        <TestimoniWaSlider
          description={successStoryWaSliderOSN.description}
          title={successStoryWaSliderOSN.title}
        />
        <SuccessStory />
        <TestimoniWaSiswa />
        <AllAlumniLpsImage />
        <ListSiswaLPS />
        <SliderTestimoniSiswa />
      </div>
    </>
  );
};

export default LesPrivatOSN;
