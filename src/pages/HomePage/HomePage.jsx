import { Helmet } from "react-helmet-async";
import GaleryBelajarSiswa from "../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../components/Slider/Slider";
import UnivPengajarLps from "../../components/UnivPengajarLps/UnivPengajarLps";
import FiturDanLayanan from "./Components/FiturDanLayanan/FiturDanLayanan";
import KeunggulanEndAlasanMemilih from "./Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import MateriUTBK2026 from "./Components/MateriUTBK2026/MateriUTBK2026";
import ProfileLps from "./Components/ProfileLps/ProfileLps";
import ProfileTutor from "./Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "./Components/ProgramBelajarLps/ProgramBelajarLps";
import SolusiSuksesMasukPTN from "./Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "./Components/TestimoniWaSiswa/TestimoniWaSiswa";

import AlumniLpsNew from "../../components/AlumniLpsNew/AlumniLpsNew";
import TestimoniWaSlider from "../../components/TestimoniWaSlider/TestimoniWaSlider";
import VisiEndMisiLps from "./Components/VisiEndMisiLps/VisiEndMisiLps";
import "./HomePage.css";
import AllAlumniLpsImage from "../ListSiswaLPS/AllAlumniLps/AllAlumniLpsImage";
import ListSiswaLPS from "../ListSiswaLPS/ListSiswaLPS";
import SliderTestimoniSiswa from "../../components/SliderTestimoniSiswa/SliderTestimoniSiswa";
import VideoKarantina from "../../components/VideoKarantina/VideoKarantina";
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
          content="  📚 Les Privat SD SMP SMA SIMAK UI OSN MAHASISWA CPNS | LPS EDUCATION✨"
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
        <meta name="twitter:card" content="summary_large_image" />{" "}
        <meta
          name="twitter:title"
          content="  📚 Les Privat SD SMP SMA SIMAK UI OSN MAHASISWA CPNS | LPS EDUCATION✨"
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
        <SolusiSuksesMasukPTN />
        <Slider />
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
      </div>
    </>
  );
};

export default HomePage;
