import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import FooterNew from "./components/FooterNew/FooterNew";
import Nav from "./components/Navbar/Nav/Nav";
import LoadingSpinner from "./helpers/LoadingSpinner/LoadingSpinner";
import ToTop from "./helpers/ToTop";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import LesPrivatCPNS from "./pages/ProgramLPS/LesPrivatCPNS/LesPrivatCPNS";
import LesPrivatCPNSSlug from "./pages/ProgramLPS/LesPrivatCPNS/LesPrivatCPNSSlug/LesPrivatCPNSSlug";
import LesPrivatMahasiswa from "./pages/ProgramLPS/LesPrivatMahasiswa/LesPrivatMahasiswa";
import LesPrivatMahasiswaSlug from "./pages/ProgramLPS/LesPrivatMahasiswa/LesPrivatMahasiswaSlug/LesPrivatMahasiswaSlug";
import LesPrivatOSN from "./pages/ProgramLPS/LesPrivatOSN/LesPrivatOSN";
import LesPrivatOSNSlug from "./pages/ProgramLPS/LesPrivatOSN/LesPrivatOSNSlug/LesPrivatOSNSlug";
import LesPrivatPascaSarjana from "./pages/ProgramLPS/LesPrivatPascaSarjana/LesPrivatPascaSarjana";
import LesPrivatPascaSarjanaSlug from "./pages/ProgramLPS/LesPrivatPascaSarjana/LesPrivatPascaSarjanaSlug/LesPrivatPascaSarjanaSlug";
import LesPrivatSDSMPSMA from "./pages/ProgramLPS/LesPrivatSDSMPSMA/LesPrivatSDSMPSMA";
import LesPrivatSDSMPSMASlug from "./pages/ProgramLPS/LesPrivatSDSMPSMA/LesPrivatSDSMPSMASlug/LesPrivatSDSMPSMASlug";
import LesPrivatUTBK from "./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBK";
import LesPrivatUTBKSlug from "./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBKSlug/LesPrivatUTBKSlug";
import SimakUIAndKKI from "./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKI";
import SimakUIAndKKISLug from "./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKISLug/SimakUIAndKKISLug";
import TestimonyPage from "./pages/TestimonyPage/TestimonyPage";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1400,
      once: true,
    });

    // Handle page change for loading spinner
    const handlePageChange = () => {
      setLoading(true); // Set loading true on page change
      const timer = setTimeout(() => {
        setLoading(false); // Set loading false after 1 second
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    };

    handlePageChange();
  }, [location]);

  return (
    <>
      <ToTop />
      <Nav />
      {loading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/testimoni-lps" element={<TestimonyPage />}></Route>

        {/* PROGRAM LPS */}

        {/* program utbk */}
        <Route
          path="/les-privat-utbk-terbaik"
          element={<LesPrivatUTBK />}></Route>
        <Route
          path="/les-privat-utbk-terbaik-di/:slug"
          element={<LesPrivatUTBKSlug />}></Route>

        {/* progcontainer-simakUi-KKI-pageram CPNS */}
        <Route
          path="/bimbel-persiapan-cpns-terbaik"
          element={<LesPrivatCPNS />}></Route>
        <Route
          path="/bimbel-persiapan-cpns-terbaik-di/:slug"
          element={<LesPrivatCPNSSlug />}></Route>

        {/* program Simak UI & KKI */}
        <Route
          path="/bimbel-persiapan-masuk-ui-kki-terbaik"
          element={<SimakUIAndKKI />}></Route>
        <Route
          path="/bimbel-persiapan-masuk-ui-kki-terbaik-di/:slug"
          element={<SimakUIAndKKISLug />}></Route>

        {/* program les privat mahasiswa */}
        <Route
          path="/les-privat-mahasiswa-terbaik"
          element={<LesPrivatMahasiswa />}></Route>
        <Route
          path="/les-privat-mahasiswa-terbaik-di/:slug"
          element={<LesPrivatMahasiswaSlug />}></Route>

        {/* program les privat sd smp sma */}
        <Route
          path="/les-privat-sd-smp-sma-terbaik"
          element={<LesPrivatSDSMPSMA />}></Route>
        <Route
          path="/les-privat-sd-smp-sma-terbaik-di/:slug"
          element={<LesPrivatSDSMPSMASlug />}></Route>

        {/* program les privat pascasarjana */}
        <Route
          path="/les-privat-pascasarjana-terbaik"
          element={<LesPrivatPascaSarjana />}></Route>
        <Route
          path="/les-privat-pascasarjana-terbaik-di/:slug"
          element={<LesPrivatPascaSarjanaSlug />}></Route>

        {/* program les privat osn */}
        <Route
          path="/les-privat-osn-terbaik"
          element={<LesPrivatOSN />}></Route>
        <Route
          path="/les-privat-osn-terbaik-di/:slug"
          element={<LesPrivatOSNSlug />}></Route>
      </Routes>
      <FloatingCTA />

      <FooterNew />
    </>
  );
}

export default App;
