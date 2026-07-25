import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import FooterNew from "./components/FooterNew/FooterNew";
import BottomNavigationBar from "./components/Navbar/BottomNavigationBar/BottomNavigationBar";
import Nav from "./components/Navbar/Nav/Nav";
import ProgramModal from "./components/Navbar/ProgramModal/ProgramModal";
import StoriesModal from "./components/Navbar/StoriesModal/StoriesModal";
import { Menus } from "./helpers/NavbarMenus/Menus";
import ScrollToTopButton from "./helpers/ScrollToTopButton/ScrollToTopButton";
import ToTop from "./helpers/ToTop";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";

// Lazy load semua halaman
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PageLinkTree = lazy(() => import("./pages/PageLinkTree/PageLinkTree"));
const BlogPage = lazy(() => import("./pages/Blog/BlogPage"));
const BlogDetail = lazy(
  () => import("./pages/Blog/components/BlogDetail/BlogDetail"),
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const TestimonyPage = lazy(() => import("./pages/TestimonyPage/TestimonyPage"));
const SuccessStoriesPage = lazy(
  () => import("./pages/SuccesStoriesPage/SuccessStoriesPage"),
);
const ListSiswaPage = lazy(() => import("./pages/ListSiswaLPS/ListSiswaPage"));
const LesPrivatUTBK = lazy(
  () => import("./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBK"),
);
const LesPrivatUTBKSlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatUTBK/LesPrivatUTBKSlug/LesPrivatUTBKSlug"),
);
const LesPrivatCPNS = lazy(
  () => import("./pages/ProgramLPS/LesPrivatCPNS/LesPrivatCPNS"),
);
const LesPrivatCPNSSlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatCPNS/LesPrivatCPNSSlug/LesPrivatCPNSSlug"),
);
const SimakUIAndKKI = lazy(
  () => import("./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKI"),
);
const SimakUIAndKKISLug = lazy(
  () =>
    import("./pages/ProgramLPS/SimakUIAndKKI/SimakUIAndKKISLug/SimakUIAndKKISLug"),
);
const LesPrivatMahasiswa = lazy(
  () => import("./pages/ProgramLPS/LesPrivatMahasiswa/LesPrivatMahasiswa"),
);
const LesPrivatMahasiswaSlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatMahasiswa/LesPrivatMahasiswaSlug/LesPrivatMahasiswaSlug"),
);
const LesPrivatSDSMPSMA = lazy(
  () => import("./pages/ProgramLPS/LesPrivatSDSMPSMA/LesPrivatSDSMPSMA"),
);
const LesPrivatSDSMPSMASlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatSDSMPSMA/LesPrivatSDSMPSMASlug/LesPrivatSDSMPSMASlug"),
);
const LesPrivatPascaSarjana = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatPascaSarjana/LesPrivatPascaSarjana"),
);
const LesPrivatPascaSarjanaSlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatPascaSarjana/LesPrivatPascaSarjanaSlug/LesPrivatPascaSarjanaSlug"),
);
const LesPrivatTKA = lazy(
  () => import("./pages/ProgramLPS/LesPrivatTKA/LesPrivatTKA"),
);
const LesPrivatTKASlug = lazy(
  () => import("./pages/ProgramLPS/LesPrivatTKA/LesPrivatTKASlug"),
);
const LesPrivatOSN = lazy(
  () => import("./pages/ProgramLPS/LesPrivatOSN/LesPrivatOSN"),
);
const LesPrivatOSNSlug = lazy(
  () =>
    import("./pages/ProgramLPS/LesPrivatOSN/LesPrivatOSNSlug/LesPrivatOSNSlug"),
);

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];
const storiesSubMenuData =
  Menus.find((menu) => menu.name === "Stories")?.subMenu || [];

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const isLinksPage = location.pathname === "/links";
  const isBlogDetailPage =
    location.pathname.startsWith("/blog/") &&
    location.pathname.split("/").length > 2;
  const shouldShowGlobalComponents = !isBlogDetailPage && !isLinksPage;

  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showStoriesModal, setShowStoriesModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  useEffect(() => {
    AOS.init({ duration: 1400, once: true });
  }, [location, isLinksPage]);

  return (
    <>
      {shouldShowGlobalComponents && (
        <>
          <Nav />
          <FloatingCTA />
          <BottomNavigationBar
            onProgramClick={() => setShowProgramModal(true)}
            onStoriesClick={() => setShowStoriesModal(true)}
          />
          <ToTop />
          <ScrollToTopButton />
        </>
      )}

      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/links" element={<PageLinkTree />} />
            <Route path="*" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/testimoni-lps" element={<TestimonyPage />} />
            <Route
              path="/success-stories-lps"
              element={<SuccessStoriesPage />}
            />
            <Route path="/list-siswa-lps" element={<ListSiswaPage />} />

            <Route
              path="/les-privat-utbk-terbaik"
              element={<LesPrivatUTBK />}
            />
            <Route
              path="/les-privat-utbk-terbaik-di/:slug"
              element={<LesPrivatUTBKSlug />}
            />

            <Route
              path="/bimbel-persiapan-cpns-terbaik"
              element={<LesPrivatCPNS />}
            />
            <Route
              path="/bimbel-persiapan-cpns-terbaik-di/:slug"
              element={<LesPrivatCPNSSlug />}
            />

            <Route
              path="/bimbel-persiapan-masuk-ui-kki-terbaik"
              element={<SimakUIAndKKI />}
            />
            <Route
              path="/bimbel-persiapan-masuk-ui-kki-terbaik-di/:slug"
              element={<SimakUIAndKKISLug />}
            />

            <Route
              path="/les-privat-mahasiswa-terbaik"
              element={<LesPrivatMahasiswa />}
            />
            <Route
              path="/les-privat-mahasiswa-terbaik-di/:slug"
              element={<LesPrivatMahasiswaSlug />}
            />

            <Route
              path="/les-privat-sd-smp-sma-terbaik"
              element={<LesPrivatSDSMPSMA />}
            />
            <Route
              path="/les-privat-sd-smp-sma-terbaik-di/:slug"
              element={<LesPrivatSDSMPSMASlug />}
            />

            <Route
              path="/les-privat-pascasarjana-terbaik"
              element={<LesPrivatPascaSarjana />}
            />
            <Route
              path="/les-privat-pascasarjana-terbaik-di/:slug"
              element={<LesPrivatPascaSarjanaSlug />}
            />

            <Route
              path="/les-privat-tes-kemampuan-akademik"
              element={<LesPrivatTKA />}
            />
            <Route
              path="/les-privat-tes-kemampuan-akademik-di/:slug"
              element={<LesPrivatTKASlug />}
            />

            <Route path="/les-privat-osn-terbaik" element={<LesPrivatOSN />} />
            <Route
              path="/les-privat-osn-terbaik-di/:slug"
              element={<LesPrivatOSNSlug />}
            />
          </Routes>
        </Suspense>
      </main>

      {shouldShowGlobalComponents && <FooterNew />}

      <ProgramModal
        isOpen={showProgramModal}
        onClose={() => setShowProgramModal(false)}
        programSubMenu={programSubMenuData}
      />
      <StoriesModal
        isOpen={showStoriesModal}
        onClose={() => setShowStoriesModal(false)}
        storiesSubMenu={storiesSubMenuData}
      />
    </>
  );
}

export default App;
