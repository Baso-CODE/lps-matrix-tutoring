import { Helmet } from "react-helmet";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import FasilitasSimakUI from "./Components/FasilitasSimakUI/FasilitasSimakUI";
import PaketBelajarSimakUI from "./Components/PaketBelajarSimakUI/PaketBelajarSimakUI";
import "./SimakUIAndKKI.css";

import AlumniLpsNew from "../../../components/AlumniLpsNew/AlumniLpsNew";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import VideoKarantina from "../../../components/VideoKarantina/VideoKarantina";
import {
  galleryBelajarSiswaSimakUI,
  successStoryWaSliderSimakUI,
} from "../../../helpers/DummyData/SIMAK-UI/simak-ui_dummyData";
import FiturDanLayanan from "../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";

const SimakUIAndKKI = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";

  const simakUIImages = ["/images/program/program-LPS-SIMAK-UI-KKI.png"];

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

  const canonicalUrl = `${baseUrl}/bimbel-persiapan-masuk-ui-kki-terbaik`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SIMAK-UI.webp";

  const pageTitle = `🏫 Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | Terbaik - LPS Education`;
  const descriptionContent = `Bimbel & Les Privat SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) terbaik dari LPS Education. Persiapan intensif, pengajar berpengalaman, dan fasilitas lengkap untuk lolos UI & UGM impian Anda.`;
  const ogTitle = `Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | Terbaik - LPS Education`; // Tanpa emoji di OG title
  const ogDescription = `Program bimbingan intensif SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dari LPS Education. Dapatkan persiapan terbaik untuk lolos seleksi UI & UGM. Pengajar handal & materi komprehensif.`;
  const twitterTitle = `Bimbel & Les Privat SIMAK UI, KKI, UTUL UGM | LPS Education`;
  const twitterDescription = `Siapkan diri Anda untuk SIMAK UI, KKI UI, dan UTUL UGM (CBT UGM) dengan bimbingan terbaik dari LPS Education. Fasilitas lengkap dan pengajar berpengalaman.`;

  const ogImageAlt = "Bimbel Les Privat SIMAK UI KKI UTUL UGM LPS Education";

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
    "LPS Education", // Mengganti LPS Education dengan LPS Education
    "lolos UI",
    "lolos UGM",
    "SIMAK UI S1",
    "SIMAK UI Vokasi",
    "SIMAK UI Internasional",
    "UTUL UGM CBT",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel SIMAK UI, les privat SIMAK UI, persiapan SIMAK UI, SIMAK KKI UI, les privat KKI UI, bimbel UTUL UGM, CBT UGM, bimbingan masuk UI, bimbingan masuk UGM, les privat PTN, tryout SIMAK UI, materi SIMAK UI, LPS Education, lolos UI, lolos UGM, SIMAK UI S1, SIMAK UI Vokasi, SIMAK UI Internasional, UTUL UGM CBT`}
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
        <meta property="article:section" content="SIMAK UI & UTUL UGM" />{" "}
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
        <HeadingLPSProgramDynamic
          defaultProgramName={simakUIDefaultProgramName}
          imageUrls={simakUIImages}
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
        <ProfileTutor />
        <UnivPengajarLps />
        <AlumniLpsNew />
        <GaleryBelajarSiswa
          description={galleryBelajarSiswaSimakUI.description}
        />
        <TestimoniWaSlider
          title={successStoryWaSliderSimakUI.title}
          description={successStoryWaSliderSimakUI.description}
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

export default SimakUIAndKKI;
