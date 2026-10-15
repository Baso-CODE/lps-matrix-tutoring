import "aos/dist/aos.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import FooterNew from "./components/FooterNew/FooterNew";
import BottomNavigationBar from "./components/Navbar/BottomNavigationBar/BottomNavigationBar";
import Nav from "./components/Navbar/Nav/Nav";
import { Menus } from "./helpers/NavbarMenus/Menus";
import ScrollToTopButton from "./helpers/ScrollToTopButton/ScrollToTopButton";
import ToTop from "./helpers/ToTop";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";
import HomePage from "./pages/HomePage/HomePage";

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

const ProgramModal = lazy(
  () => import("./components/Navbar/ProgramModal/ProgramModal"),
);
const StoriesModal = lazy(
  () => import("./components/Navbar/StoriesModal/StoriesModal"),
);

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];

const storiesSubMenuData =
  Menus.find((menu) => menu.name === "Stories")?.subMenu || [];

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showStoriesModal, setShowStoriesModal] = useState(false);

  const isLinksPage = location.pathname === "/links";
  const isBlogDetailPage =
    location.pathname.startsWith("/blog/") &&
    location.pathname.split("/").length > 2;

  const shouldShowGlobalComponents = !isBlogDetailPage && !isLinksPage;

  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  useEffect(() => {
    let cancelled = false;
    let idleId;
    let timeoutId;

    const initializeAOS = async () => {
      try {
        const { default: AOS } = await import("aos");
        if (cancelled) return;

        if (!window.__LPS_AOS_INITIALIZED__) {
          AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            disableMutationObserver: false,
          });
          window.__LPS_AOS_INITIALIZED__ = true;
        } else {
          AOS.refreshHard();
        }
      } catch (error) {
        console.error("Failed to initialize AOS:", error);
      }
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(initializeAOS, {
        timeout: 1500,
      });
    } else {
      timeoutId = window.setTimeout(initializeAOS, 200);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    setShowProgramModal(false);
    setShowStoriesModal(false);
  }, [location.pathname]);

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

      <main style={{ minHeight: "100vh" }}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/links" element={<PageLinkTree />} />
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

            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>

      {shouldShowGlobalComponents && <FooterNew />}

      <Suspense fallback={null}>
        {showProgramModal && (
          <ProgramModal
            isOpen={showProgramModal}
            onClose={() => setShowProgramModal(false)}
            programSubMenu={programSubMenuData}
          />
        )}

        {showStoriesModal && (
          <StoriesModal
            isOpen={showStoriesModal}
            onClose={() => setShowStoriesModal(false)}
            storiesSubMenu={storiesSubMenuData}
          />
        )}
      </Suspense>
    </>
  );
}

export default App;
