import {
  BookCheck,
  BookOpenText,
  Briefcase,
  GraduationCap,
  Medal,
  School,
  University,
  UserCog,
  Users,
} from "lucide-react";

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Program",
    subMenu: [
      {
        name: "Les Privat UTBK 2026",
        desc: "Les untuk Persiapan UTBK",
        icon: BookCheck, // Ikon buku untuk program UTBK
        link: "/les-privat-utbk-terbaik",
      },
      {
        name: "Bimbel CPNS",
        desc: "Bimbel untuk persiapan CPNS",
        icon: Briefcase, // Ikon tas kerja untuk program CPNS
        link: "/bimbel-persiapan-cpns-terbaik",
      },
      {
        name: "Bimbel SIMAK UI & KKI",
        desc: "Bimbel untuk persiapan masuk UI & KKI",
        icon: School, // Ikon sekolah untuk program masuk UI & KKI
        link: "/bimbel-persiapan-masuk-ui-kki-terbaik",
      },
      {
        name: "Les Privat Mahasiswa",
        desc: "Les Privat Untuk Mahasiswa",
        icon: BookOpenText, // Ikon buku terbuka untuk program mahasiswa
        link: "/les-privat-mahasiswa-terbaik",
      },
      {
        name: "Les Privat SD SMP SMA",
        desc: "Les Privat Untuk SD SMP SMA",
        icon: University, // Ikon sekolah untuk SD SMP SMA
        link: "/les-privat-sd-smp-sma-terbaik",
      },
      {
        name: "Les Privat Pascasarjana",
        desc: "Les Privat Untuk Pascasarjana",
        icon: GraduationCap, // Ikon kelulusan untuk Pascasarjana
        link: "/les-privat-pascasarjana-terbaik",
      },
      {
        name: "Les Privat OSN ISO IMO",
        desc: "Les Privat Untuk persiapan OSN ISO IMO",
        icon: Medal, // Ikon medali untuk program olimpiade
        link: "/les-privat-osn-terbaik",
      },
      {
        name: "Bimbel Karantina PTN",
        desc: "Bimbel Untuk Persiapan PTN",
        icon: Users, // Ikon topi kelulusan untuk program PTN
        link: "https://supercampmatrix.co.id/",
      },
    ],
    gridCols: 2,
  },
  {
    name: "About Us",
    link: "/about-us", // Link untuk About Us
  },
  {
    name: "Stories",
    subMenu: [
      {
        name: "Alumni LPS",
        desc: "Semua Siswa LPS",
        icon: UserCog,
        link: "/list-siswa-lps",
      },
      {
        name: "Testimonies",
        desc: "Semua Testimoni",
        icon: BookCheck,
        link: "/testimoni-lps",
      },
      {
        name: "Succcess Stories",
        desc: "Semua Success Stories",
        icon: Briefcase,
        link: "/success-stories-lps",
      },
    ],
    gridCols: 1,
  },
];
