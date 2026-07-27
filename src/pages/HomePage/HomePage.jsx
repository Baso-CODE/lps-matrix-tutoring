import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

// Above-the-fold: langsung load
import Slider from "../../components/Slider/Slider";
import ProfileLps from "./Components/ProfileLps/ProfileLps";
import SolusiSuksesMasukPTN from "./Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";

// Below-the-fold: lazy load
const KeunggulanEndAlasanMemilih = lazy(
  () =>
    import("./Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih"),
);
const VisiEndMisiLps = lazy(
  () => import("./Components/VisiEndMisiLps/VisiEndMisiLps"),
);
const ProgramBelajarLps = lazy(
  () => import("./Components/ProgramBelajarLps/ProgramBelajarLps"),
);
const FiturDanLayanan = lazy(
  () => import("./Components/FiturDanLayanan/FiturDanLayanan"),
);
const VideoKarantina = lazy(
  () => import("../../components/VideoKarantina/VideoKarantina"),
);
const ProfileTutor = lazy(
  () => import("./Components/ProfileTutor/ProfileTutor"),
);
const UnivPengajarLps = lazy(
  () => import("../../components/UnivPengajarLps/UnivPengajarLps"),
);
const AlumniLpsNew = lazy(
  () => import("../../components/AlumniLpsNew/AlumniLpsNew"),
);
const GaleryBelajarSiswa = lazy(
  () => import("../../components/GaleryBelajarSiswa/GaleryBelajarSiswa"),
);
const TestimoniWaSlider = lazy(
  () => import("../../components/TestimoniWaSlider/TestimoniWaSlider"),
);
const SuccessStory = lazy(
  () => import("./Components/SuccessStory/SuccessStory"),
);
const MateriUTBK2026 = lazy(
  () => import("./Components/MateriUTBK2026/MateriUTBK2026"),
);
const TestimoniWaSiswa = lazy(
  () => import("./Components/TestimoniWaSiswa/TestimoniWaSiswa"),
);
const AllAlumniLpsImage = lazy(
  () => import("../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage"),
);
const ListSiswaLPS = lazy(() => import("../ListSiswaLPS/ListSiswaLPS"));
const SliderTestimoniSiswa = lazy(
  () => import("../../components/SliderTestimoniSiswa/SliderTestimoniSiswa"),
);

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          📚 Les Privat SD SMP SMA SIMAK UI OSN MAHASISWA CPNS | LPS EDUCATION✨
        </title>
        <meta
          name="description"
          content="Kursus Les Privat OSN SD SMP SMA CPNS UTBK SIMAK UI CPNS Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami..."
        />
        <meta
          name="keywords"
          content="les privat, bimbel online, bimbel offline, les privat OSN, bimbel Pascasarjana, les privat Mahasiswa, bimbel CPNS, les privat UTBK SNBT, bimbel SIMAK UI, les privat SD, les privat SMP, les privat SMA, guru datang ke rumah, bimbingan belajar, persiapan ujian, PTN favorit, SBMPTN, les privat intensif, program bimbingan belajar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="📚 Les Privat SD SMP SMA SIMAK UI OSN MAHASISWA CPNS | LPS EDUCATION✨"
        />
        <meta
          property="og:description"
          content="Kursus Les Privat OSN SD SMP SMA CPNS UTBK SIMAK UI CPNS Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami..."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/banner.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="📚 Les Privat SD SMP SMA SIMAK UI OSN MAHASISWA CPNS | LPS EDUCATION✨"
        />
        <meta
          name="twitter:description"
          content="Raih prestasi dengan Bimbel & Les Privat Online Offline kami. Program lengkap untuk OSN, Pascasarjana, Mahasiswa, CPNS, UTBK SNBT, SIMAK UI, SD, SMP, SMA. Belajar efektif & terarah."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/banner.webp"
        />
      </Helmet>

      <div className="container-all">
        {/* Above the fold — langsung render */}
        <ProfileLps />
        <SolusiSuksesMasukPTN />
        <Slider />

        {/* Below the fold — lazy load */}
        <Suspense fallback={null}>
          <KeunggulanEndAlasanMemilih />
          <VisiEndMisiLps />
          <ProgramBelajarLps />
          <FiturDanLayanan />
          <VideoKarantina />
          <ProfileTutor />
          <UnivPengajarLps />
          <AlumniLpsNew />
          <GaleryBelajarSiswa />
          <TestimoniWaSlider />
          <SuccessStory />
          <MateriUTBK2026 />
          <TestimoniWaSiswa />
          <AllAlumniLpsImage />
          <ListSiswaLPS />
          <SliderTestimoniSiswa />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
