import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import FooterNew from "./components/FooterNew/FooterNew";
import BottomNavigationBar from "./components/Navbar/BottomNavigationBar/BottomNavigationBar";
import Nav from "./components/Navbar/Nav/Nav";
import ProgramModal from "./components/Navbar/ProgramModal/ProgramModal";
import StoriesModal from "./components/Navbar/StoriesModal/StoriesModal";
import LoadingSpinner from "./helpers/LoadingSpinner/LoadingSpinner";
import { Menus } from "./helpers/NavbarMenus/Menus";
import ScrollToTopButton from "./helpers/ScrollToTopButton/ScrollToTopButton";
import ToTop from "./helpers/ToTop";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetail from "./pages/Blog/components/BlogDetail/BlogDetail";
import HomePage from "./pages/HomePage/HomePage";
import ListSiswaPage from "./pages/ListSiswaLPS/ListSiswaPage";
import PageLinkTree from "./pages/PageLinkTree/PageLinkTree";
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
import LesPrivatTKA from "./pages/ProgramLPS/LesPrivatTKA/LesPrivatTKA";
import LesPrivatTKASlug from "./pages/ProgramLPS/LesPrivatTKA/LesPrivatTKASlug";
import LesPrivatUTBK from "./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBK";
import LesPrivatUTBKSlug from "./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBKSlug/LesPrivatUTBKSlug";
import SimakUIAndKKI from "./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKI";
import SimakUIAndKKISLug from "./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKISLug/SimakUIAndKKISLug";
import SuccessStoriesPage from "./pages/SuccesStoriesPage/SuccessStoriesPage";
import TestimonyPage from "./pages/TestimonyPage/TestimonyPage";

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];

const storiesSubMenuData =
  Menus.find((menu) => menu.name === "Stories")?.subMenu || [];

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const dispatch = useAppDispatch();
  const isLinksPage = location.pathname === "/links";

  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
    });

    const handlePageChange = () => {
      if (!isLinksPage) {
        setLoading(true);

        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      } else {
        setLoading(false);
      }
    };

    handlePageChange();
  }, [location, isLinksPage]);

  const [showProgramModal, setShowProgramModal] = useState(false);
  const handleOpenProgramModal = () => {
    setShowProgramModal(true);
  };
  const handleCloseProgramModal = () => {
    setShowProgramModal(false);
  };

  // State dan handler BARU untuk Stories Modal
  const [showStoriesModal, setShowStoriesModal] = useState(false);
  const handleOpenStoriesModal = () => {
    setShowStoriesModal(true);
  };
  const handleCloseStoriesModal = () => {
    setShowStoriesModal(false);
  };

  const isBlogDetailPage =
    location.pathname.startsWith("/blog/") &&
    location.pathname.split("/").length > 2;

  const shouldShowGlobalComponents = !isBlogDetailPage && !isLinksPage;
  return (
    <>
      {loading && <LoadingSpinner />}

      {!loading && (
        <>
          {shouldShowGlobalComponents && (
            <>
              {/* Komponen Global */}
              <ToTop />
              <ScrollToTopButton />
              <Nav />
              <FloatingCTA />
              {/* <PromoFloating /> */}
              <BottomNavigationBar
                onProgramClick={handleOpenProgramModal}
                onStoriesClick={handleOpenStoriesModal}
              />
              <ToTop />
              <ScrollToTopButton />
              {/* <FooterNew /> */}
            </>
          )}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/links" element={<PageLinkTree />} />
            <Route path="*" element={<HomePage />} />

            {/* BLOG */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/testimoni-lps" element={<TestimonyPage />} />
            <Route
              path="/success-stories-lps"
              element={<SuccessStoriesPage />}
            />
            <Route path="/list-siswa-lps" element={<ListSiswaPage />} />

            {/* program utbk */}
            <Route
              path="/les-privat-utbk-terbaik"
              element={<LesPrivatUTBK />}
            />
            <Route
              path="/les-privat-utbk-terbaik-di/:slug"
              element={<LesPrivatUTBKSlug />}
            />

            {/* program CPNS */}
            <Route
              path="/bimbel-persiapan-cpns-terbaik"
              element={<LesPrivatCPNS />}
            />
            <Route
              path="/bimbel-persiapan-cpns-terbaik-di/:slug"
              element={<LesPrivatCPNSSlug />}
            />

            {/* program Simak UI & KKI */}
            <Route
              path="/bimbel-persiapan-masuk-ui-kki-terbaik"
              element={<SimakUIAndKKI />}
            />
            <Route
              path="/bimbel-persiapan-masuk-ui-kki-terbaik-di/:slug"
              element={<SimakUIAndKKISLug />}
            />

            {/* program les privat mahasiswa */}
            <Route
              path="/les-privat-mahasiswa-terbaik"
              element={<LesPrivatMahasiswa />}
            />
            <Route
              path="/les-privat-mahasiswa-terbaik-di/:slug"
              element={<LesPrivatMahasiswaSlug />}
            />

            {/* program les privat sd smp sma */}
            <Route
              path="/les-privat-sd-smp-sma-terbaik"
              element={<LesPrivatSDSMPSMA />}
            />
            <Route
              path="/les-privat-sd-smp-sma-terbaik-di/:slug"
              element={<LesPrivatSDSMPSMASlug />}
            />

            {/* program les privat pascasarjana */}
            <Route
              path="/les-privat-pascasarjana-terbaik"
              element={<LesPrivatPascaSarjana />}
            />
            <Route
              path="/les-privat-pascasarjana-terbaik-di/:slug"
              element={<LesPrivatPascaSarjanaSlug />}
            />
            {/* program les privat tes kemampuan akademik */}
            <Route
              path="/les-privat-tes-kemampuan-akademik"
              element={<LesPrivatTKA />}
            />
            <Route
              path="/les-privat-tes-kemampuan-akademik-di/:slug"
              element={<LesPrivatTKASlug />}
            />

            {/* program les privat osn */}
            <Route path="/les-privat-osn-terbaik" element={<LesPrivatOSN />} />
            <Route
              path="/les-privat-osn-terbaik-di/:slug"
              element={<LesPrivatOSNSlug />}
            />
          </Routes>
          {shouldShowGlobalComponents && <FooterNew />}
          <ProgramModal
            isOpen={showProgramModal}
            onClose={handleCloseProgramModal}
            programSubMenu={programSubMenuData}
          />
          <StoriesModal // Modal BARU untuk Stories
            isOpen={showStoriesModal}
            onClose={handleCloseStoriesModal}
            storiesSubMenu={storiesSubMenuData}
          />
        </>
      )}
    </>
  );
}

export default App;
