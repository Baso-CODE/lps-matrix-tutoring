import { Helmet } from "react-helmet-async";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import HeadingLPSProgramDynamic from "../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";
import Slider from "../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import {
  galleryBelajarCPNSData,
  testimonialWaCPNSData,
  testimoniWaSliderData,
} from "../../../helpers/DummyData/CPNS/cpnsDammyData";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../ListSiswaLPS/ListSiswaLPS";
import AsalSiswaLPS from "../LesPrivatUTBK/Components/AsalSiswaLPS/AsalSiswaLPS";
import ApaAjaYgDiPeroleh from "./Components/ApaAjaYgDiPeroleh/ApaAjaYgDiPeroleh";
import BenefitLolosCPNS from "./Components/BenefitLolosCPNS/BenefitLolosCPNS";
import CpnsStages from "./Components/CpnsStages/CpnsStages";
import JadwalBelajarCPNS from "./Components/JadwalBelajarCPNS/JadwalBelajarCPNS";
import MateriLPSCPNS from "./Components/MateriLPSCPNS/MateriLPSCPNS";
import PaketBelajarCPNS from "./Components/PaketBelajarCPNS/PaketBelajarCPNS";
import ProgramCPNS from "./Components/ProgramCPNS/ProgramCPNS";
import ProgramIntensifCPNS from "./Components/ProgramIntensifCPNS/ProgramIntensifCPNS";
import SuccesStoryCPNS from "./Components/SuccesStoryCPNS/SuccesStoryCPNS";
import "./LesPrivatCPNS.css";

const LesPrivatCPNS = () => {
  const baseUrl = "https://apps.lesprivatmasukptn.com";
  const canonicalUrl = `${baseUrl}/bimbel-persiapan-cpns`;

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

  const ogImage = "https://apps.lesprivatmasukptn.com/images/program/CPNS.webp";

  // Judul dan Deskripsi yang dioptimalkan
  const pageTitle = `🎓 Bimbel & Les Privat CPNS Online Offline | Persiapan TWK TIU TKP Terbaik - LPS Education`;
  const descriptionContent = `Bimbel & Les Privat CPNS Online & Offline terbaik dari LPS Education. Persiapan intensif Tes CPNS TWK, TIU, TKP dengan guru profesional & kurikulum lengkap. Lolos CPNS di seluruh Indonesia.`;
  const ogTitle = `Bimbel & Les Privat CPNS Online Offline | Persiapan TWK TIU TKP Terbaik - LPS Education`;
  const ogDescription = `Dapatkan bimbingan intensif CPNS secara online & offline untuk persiapan ujian TWK, TIU, TKP di seluruh Indonesia. Pengajar berpengalaman LPS Education, kurikulum terupdate, jaminan hasil terbaik.`;
  const twitterTitle = `Bimbel & Les Privat CPNS | Persiapan TWK TIU TKP - LPS Education`;
  const twitterDescription = `Persiapan optimal menuju CPNS dengan bimbel & les privat online/offline dari LPS Education. Fokus pada tes TWK, TIU, TKP. Daftar sekarang dan raih impian Anda!`;

  const ogImageAlt = "Bimbel Les Privat CPNS Online Offline LPS Education";

  const articleTags = [
    "bimbel CPNS",
    "les privat CPNS online",
    "les privat CPNS offline",
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
    "CPNS Indonesia",
    "LPS Education",
    "SKD CPNS",
    "SKB CPNS",
    "cat cpns",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`bimbel CPNS, les privat CPNS online, les privat CPNS offline, persiapan tes CPNS, TWK, TIU, TKP, materi CPNS, soal CPNS, bimbingan CPNS, guru CPNS, ujian CPNS, lolos CPNS, Latsar CPNS, CPNS Indonesia, LPS Education, SKD CPNS, SKB CPNS, cat cpns`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />{" "}
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
        <meta property="article:section" content="CPNS" />{" "}
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
          defaultProgramName={cpnsDefaultProgramName}
          imageUrlsDesktop={cpnsImagesDesktop}
          imageUrlsMobile={cpnsImagesMobile}
          descriptionParagraphs={cpnsDescription}
          programName={cpnsProgramNameDisplay}
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
        <ProfileTutor />
        <UnivPengajarLps />
        <GaleryBelajarSiswa description={galleryBelajarCPNSData.description} />
        <TestimoniWaSlider
          description={testimoniWaSliderData.description}
          title={testimoniWaSliderData.title}
        />
        <AsalSiswaLPS />
        <SuccesStoryCPNS />
        <TestimoniWaSiswa
          title={testimonialWaCPNSData.title}
          description={testimonialWaCPNSData.description}
          imageDesktop={testimonialWaCPNSData.imageDesktop}
          imageMobile={testimonialWaCPNSData.imageMobile}
        />
        <AllAlumniLpsImage />
        <ListSiswaLPS />
        <SliderTestimoniSiswa />
      </div>
    </>
  );
};

export default LesPrivatCPNS;
