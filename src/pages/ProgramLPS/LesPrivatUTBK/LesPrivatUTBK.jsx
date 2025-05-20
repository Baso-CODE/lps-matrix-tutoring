import { Helmet } from "react-helmet-async";
import ContactFooter from "../../../components/ContactFooter/ContactFooter";
import GaleryBelajarSiswa from "../../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import UnivPengajarLps from "../../../components/UnivPengajarLps/UnivPengajarLps";
import AlumniLps from "../../HomePage/Components/AlumniLps/AlumniLps";
import SuccessStory from "../../HomePage/Components/SuccessStory/SuccessStory";
import AsalSiswaLPS from "./Components/AsalSiswaLPS/AsalSiswaLPS";
import CaraBelajarOfflineAtauOnline from "./Components/CaraBelajarOfflineAtauOnline/CaraBelajarOfflineAtauOnline";
import HeadingUTBK from "./Components/HeadingUTBK/HeadingUTBK";
import MataPelajaranLPS from "./Components/MataPelajaranLPS/MataPelajaranLPS";
import MateriUjianSNBT from "./Components/MateriUjianSNBT/MateriUjianSNBT";
import PerbedaanSBMPTAndSNBT from "./Components/PerbedaanSBMPTAndSNBT/PerbedaanSBMPTAndSNBT";
import TigaJalurMasukPTN from "./Components/TigaJalurMasukPTN/TigaJalurMasukPTN";
import "./LesPrivatUTBK.css";
import Promo from "../../../components/Promo/Promo";
import ContactButton from "../../../components/ContactButton/ContactButton";
import TestimoniWaSiswa from "../../HomePage/Components/TestimoniWaSiswa/TestimoniWaSiswa";
import Slider from "../../../components/Slider/Slider";
import ProfileTutor from "../../HomePage/Components/ProfileTutor/ProfileTutor";
import VisiEndMisiLps from "../../HomePage/Components/VisiEndMisiLps/VisiEndMisiLps";
import KeunggulanEndAlasanMemilih from "../../HomePage/Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import Information from "../../../components/Information/Information";
import SolusiSuksesMasukPTN from "../../HomePage/Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";

const LesPrivatUTBK = () => {
  return (
    <>
      <Helmet>
        <title>
          Les Privat UTBK SNBT Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT
          UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™
        </title>
        <meta
          name="description"
          content="Dapatkan persiapan UTBK SNBT terbaik bersama LPS Matrix Indonesia dengan pengajar profesional, metode belajar yang efektif, dan fasilitas lengkap. Siapkan diri Anda untuk masuk PTN impian!"
        />
        <meta
          name="keywords"
          content="UTBK, SNBT, les privat UTBK, bimbingan UTBK, les SNBT, program LPS Matrix"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Les Privat UTBK SNBT Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™"
        />
        <meta
          property="og:description"
          content="Program bimbingan intensif UTBK SNBT dengan pengajar profesional untuk persiapan terbaik masuk PTN favorit Anda."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/program/UTBK.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/program/UTBK.webp"
        />
        <meta
          name="twitter:title"
          content="Les Privat UTBK SNBT Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM Online & Guru Datang ke Rumah LES PRIVAT SBMPTN ™"
        />
        <meta
          name="twitter:description"
          content="Persiapan UTBK SNBT terbaik dengan pengajar berpengalaman dan fasilitas lengkap dari LPS Matrix Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/program/UTBK.webp"
        />
      </Helmet>

      <div className="container-all">
        <HeadingUTBK />
        <MataPelajaranLPS />
        <TigaJalurMasukPTN />
        <PerbedaanSBMPTAndSNBT />
        <MateriUjianSNBT />
        <Information />
        <Slider />
        <VisiEndMisiLps />
        <ProfileTutor />
        <KeunggulanEndAlasanMemilih />
        <GaleryBelajarSiswa />
        <SolusiSuksesMasukPTN />
        <CaraBelajarOfflineAtauOnline />
        <AsalSiswaLPS />
        <AlumniLps />
        <SuccessStory />
        <TestimoniWaSiswa />
        <ContactFooter />
        <UnivPengajarLps />
        <Promo />
        <ContactButton />
      </div>
    </>
  );
};

export default LesPrivatUTBK;
