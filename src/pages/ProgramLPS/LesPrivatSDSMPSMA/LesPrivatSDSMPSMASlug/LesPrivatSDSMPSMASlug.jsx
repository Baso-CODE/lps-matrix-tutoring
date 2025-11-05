import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AlumniLpsNew from "../../../../components/AlumniLpsNew/AlumniLpsNew";
import Slider from "../../../../components/Slider/Slider";
import SliderTestimoniSiswa from "../../../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import TestimoniWaSlider from "../../../../components/TestimoniWaSlider/TestimoniWaSlider";
import UnivPengajarLps from "../../../../components/UnivPengajarLps/UnivPengajarLps";
import VideoKarantina from "../../../../components/VideoKarantina/VideoKarantina";
import { testimoniWaSliderDataSDSMPSMA } from "../../../../helpers/DummyData/SDSMPSMA/sdsmpsma_dummyData";
import FiturDanLayanan from "../../../HomePage/Components/FiturDanLayanan/FiturDanLayanan";
import KeunggulanEndAlasanMemilih from "../../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import ProfileTutor from "../../../HomePage/Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "../../../HomePage/Components/ProgramBelajarLps/ProgramBelajarLps";
import TestimoniWaSiswa from "../../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import VisiEndMisiLps from "../../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import AllAlumniLpsImage from "../../../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../../../ListSiswaLPS/ListSiswaLPS";
import FasilitasSDSMPSMA from "../Components/FasilitasSDSMPSMA/FasilitasSDSMPSMA";
import PaketBelajarSDSMPSMA from "../Components/PaketBelajarSDSMPSMA/PaketBelajarSDSMPSMA";
import ProgramIntensifLpsSDSMPSMA from "../Components/ProgramIntensifLpsSDSMPSMA/ProgramIntensifLpsSDSMPSMA";
import HeadingLPSProgramDynamic from "../../../../components/HeadingLPSProgramDynamic/HeadingLPSProgramDynamic";

const LesPrivatSDSMPSMASlug = () => {
  const { slug } = useParams();

  const sdsmpSmaImages = [
    "/images/program/program-LPS-SD.png",
    "/images/program/program-LPS-SMP.png",
    "/images/program/program-LPS-SMA.png",
  ];

  const sdsmpSmaDescription = [
    `<span class='color-highlight'>Program Intensif Privat SD SMP SMA</span> adalah program belajar fokus Akademik Sekolah dan persiapan Ujian dengan sistem belajar <span class='color-highlight'>Privat Offline (guru datang ke rumah)</span> dan <span class='color-highlight'>Privat Online</span>. Program ini didukung dengan guru les berpengalaman dan berkompeten mengajar siswa SD SMP SMA.`,

    `Program belajar ini difokuskan pada pendalaman konsep dan peningkatan keterampilan pengerjaan soal untuk <span class='color-highlight'>PR, Ulangan, Ujian Semester, Ujian Kenaikan Kelas, dan Ujian Sekolah</span>, serta persiapan <span class='color-highlight'>TKA (Tes Kemampuan Akademik)</span> dan Ujian Masuk Sekolah Unggulan. Progress belajar siswa akan dimonitoring dan dievaluasi oleh Tim Akademik LPS Education.`,

    `Target utama Program <span class='color-highlight'>Intensif Privat SD SMP SMA</span> adalah mendampingi siswa mencapai prestasi Akademik yang memuaskan dan bisa diterima di sekolah impian. Kami memberikan rekomendasi yang dibutuhkan sesuai dengan progres belajar siswa.`,
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

  const canonicalUrl = `${baseUrl}/les-privat-sd-smp-sma-terbaik-di/${slug}`;

  const ogImage =
    "https://apps.lesprivatmasukptn.com/images/program/SD,SMP,SMA.webp";

  const pageTitle = `📖 Les Privat SD, SMP, SMA di ${dynamicLocationName} | Semua Mapel - LPS Education`;
  const descriptionContent = `Dapatkan les privat SD, SMP, dan SMA di ${dynamicLocationName} terbaik dari LPS Education ✔️ Guru Datang ke Rumah/Online ✔️ Untuk Semua Mata Pelajaran. Tingkatkan prestasi akademik siswa.`;
  const ogTitle = `Les Privat SD, SMP, SMA di ${dynamicLocationName} | Semua Mata Pelajaran - LPS Education`;
  const ogDescription = `Bimbingan belajar privat SD, SMP, SMA intensif di ${dynamicLocationName} dengan pengajar berpengalaman dari LPS Education. Tersedia online dan offline. Bantu tingkatkan prestasi akademik siswa.`;
  const twitterTitle = `Les Privat SD, SMP, SMA di ${dynamicLocationName} | LPS Education`;
  const twitterDescription = `Tingkatkan prestasi belajar SD, SMP, SMA dengan les privat dari LPS Education di ${dynamicLocationName}. Program fleksibel, guru profesional, online atau offline.`;

  const ogImageAlt = `Les Privat SD SMP SMA ${dynamicLocationName} LPS Education`;

  const articleTags = [
    "les privat SD",
    "les privat SMP",
    "les privat SMA",
    "bimbingan belajar online",
    "guru privat datang ke rumah",
    "les privat semua mata pelajaran",
    "les privat Matematika",
    "les privat IPA",
    "les privat Bahasa Inggris",
    "persiapan Ujian Nasional",
    "persiapan PTS PAS",
    "LPS Education",
    dynamicLocationName.toLowerCase(),
    "les privat Fisika",
    "les privat Kimia",
    "les privat Biologi",
    "les privat Sejarah",
    "les privat Geografi",
    "les privat Sosiologi",
    "les privat Ekonomi",
    "les privat Akuntansi",
  ];

  return (
    <>
      <Helmet>
        {/* Basic SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content={`les privat SD ${dynamicLocationName}, les privat SMP ${dynamicLocationName}, les privat SMA ${dynamicLocationName}, bimbingan belajar ${dynamicLocationName}, guru privat ${dynamicLocationName}, les privat semua mata pelajaran ${dynamicLocationName}, les privat Matematika ${dynamicLocationName}, les privat IPA ${dynamicLocationName}, les privat Bahasa Inggris ${dynamicLocationName}, persiapan Ujian Nasional ${dynamicLocationName}, persiapan PTS PAS ${dynamicLocationName}, LPS Education, les privat Fisika ${dynamicLocationName}, les privat Kimia ${dynamicLocationName}, les privat Biologi ${dynamicLocationName}, les privat Sejarah ${dynamicLocationName}, les privat Geografi ${dynamicLocationName}, les privat Sosiologi ${dynamicLocationName}, les privat Ekonomi ${dynamicLocationName}, les privat Akuntansi ${dynamicLocationName}`}
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
        <meta property="article:section" content="Les Privat SD SMP SMA" />

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
                        "@id": "${baseUrl}/les-privat-sd-smp-sma-terbaik",
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
        <HeadingLPSProgramDynamic
          defaultProgramName="Les Privat SD SMP SMA"
          imageUrls={sdsmpSmaImages}
          descriptionParagraphs={sdsmpSmaDescription}
          programName="Les Privat SD SMP SMA"
          city={dynamicLocationName}
        />
        <FasilitasSDSMPSMA />
        <ProgramIntensifLpsSDSMPSMA />
        <PaketBelajarSDSMPSMA />
        {/* <PaketSesiSDSMPSMA /> */}
        <Slider />
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <FiturDanLayanan />
        <KeunggulanEndAlasanMemilih />
        <VideoKarantina />
        <ProfileTutor city={dynamicLocationName} />
        <UnivPengajarLps />
        <AlumniLpsNew city={dynamicLocationName} />
        <TestimoniWaSlider
          cityProp={dynamicLocationName}
          title={testimoniWaSliderDataSDSMPSMA.title}
          description={testimoniWaSliderDataSDSMPSMA.description}
        />
        <TestimoniWaSiswa cityProp={dynamicLocationName} />
        <AllAlumniLpsImage city={dynamicLocationName} />
        <ListSiswaLPS />
        <SliderTestimoniSiswa city={dynamicLocationName} />
      </div>
    </>
  );
};

export default LesPrivatSDSMPSMASlug;
