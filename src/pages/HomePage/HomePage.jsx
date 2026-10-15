import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import LazySection from "../../components/LazySection/LazySection";
import ProfileLps from "./Components/ProfileLps/ProfileLps";

const SolusiSuksesMasukPTN = lazy(
  () => import("./Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN"),
);
const Slider = lazy(() => import("../../components/Slider/Slider"));
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

const DeferredSection = ({ children, minHeight = 350 }) => (
  <LazySection minHeight={minHeight} rootMargin="300px 0px">
    <Suspense fallback={null}>{children}</Suspense>
  </LazySection>
);

export default function HomePage() {
  const canonicalUrl = "https://apps.lesprivatmasukptn.com/";

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
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
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
        <ProfileLps />

        <DeferredSection minHeight={450}>
          <SolusiSuksesMasukPTN />
        </DeferredSection>

        <DeferredSection minHeight={250}>
          <Slider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <KeunggulanEndAlasanMemilih />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VisiEndMisiLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProgramBelajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <FiturDanLayanan />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <VideoKarantina />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ProfileTutor />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <UnivPengajarLps />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AlumniLpsNew />
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <GaleryBelajarSiswa />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSlider />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <SuccessStory />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <MateriUTBK2026 />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <TestimoniWaSiswa />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <AllAlumniLpsImage />
        </DeferredSection>

        <DeferredSection minHeight={450}>
          <ListSiswaLPS />
        </DeferredSection>

        <DeferredSection minHeight={350}>
          <SliderTestimoniSiswa />
        </DeferredSection>
      </div>
    </>
  );
}
