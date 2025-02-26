import { Helmet } from "react-helmet-async";
import GaleryBelajarSiswa from "../../components/GaleryBelajarSiswa/GaleryBelajarSiswa";
import Slider from "../../components/Slider/Slider";
import UnivPengajarLps from "../../components/UnivPengajarLps/UnivPengajarLps";
import AlumniLps from "./Components/AlumniLps/AlumniLps";
import FiturDanLayanan from "./Components/FiturDanLayanan/FiturDanLayanan";
import KeunggulanEndAlasanMemilih from "./Components/KeunggulanEndAlasanMemilih/KeunggulanEndAlasanMemilih";
import MateriUTBK2025 from "./Components/MateriUTBK2025/MateriUTBK2025";
import ProfileLps from "./Components/ProfileLps/ProfileLps";
import ProfileTutor from "./Components/ProfileTutor/ProfileTutor";
import ProgramBelajarLps from "./Components/ProgramBelajarLps/ProgramBelajarLps";
import SolusiSuksesMasukPTN from "./Components/SolusiSuksesMasukPTN/SolusiSuksesMasukPTN";
import SuccessStory from "./Components/SuccessStory/SuccessStory";
import TestimoniWaSiswa from "./Components/TestimoniWaSiswa/TestimoniWaSiswa";

import VisiEndMisiLps from "./Components/VisiEndMisiLps/VisiEndMisiLps";
import "./HomePage.css";
import Information from "../../components/Information/Information";
import Promo from "../../components/Promo/Promo";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          Les Privat UTBK SNBT • Undip, Unair, Unpad, UB, Udayana, Simak UI &
          CBT UGM • Online & Guru Datang ke Rumah
        </title>
        <meta
          name="description"
          content="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <meta
          name="keywords"
          content="les privat, bimbingan belajar, LPS Jakarta, masuk PTN favorit, les privat intensif, program bimbingan belajar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Les Privat UTBK SNBT • Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM • Online & Guru Datang ke Rumah"
        />
        <meta
          property="og:description"
          content="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <meta
          property="og:image"
          content="https://apps.lesprivatmasukptn.com/images/banner.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <link rel="canonical" href={window.location.href} />
        <meta
          name="twitter:card"
          content="https://apps.lesprivatmasukptn.com/images/banner.webp"
        />
        <meta
          name="twitter:title"
          content="Les Privat UTBK SNBT • Undip, Unair, Unpad, UB, Udayana, Simak UI & CBT UGM • Online & Guru Datang ke Rumah"
        />
        <meta
          name="twitter:description"
          content="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
        />
        <meta
          name="twitter:image"
          content="https://apps.lesprivatmasukptn.com/images/banner.webp"
        />
      </Helmet>

      <div className="container-all">
        <ProfileLps />
        <KeunggulanEndAlasanMemilih />
        <Slider />
        <VisiEndMisiLps />
        <ProgramBelajarLps />
        <Information />
        <FiturDanLayanan />
        <ProfileTutor />
        <AlumniLps />
        <SuccessStory />
        <MateriUTBK2025 />
        <TestimoniWaSiswa />
        <GaleryBelajarSiswa />
        {/* <GaleriBelajarLps /> */}

        <SolusiSuksesMasukPTN />
        <UnivPengajarLps />
        <Promo />
      </div>
    </>
  );
};

export default HomePage;
