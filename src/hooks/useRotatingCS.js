import { useEffect, useState } from "react";

export const useRotatingCS = (csDataArray) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ambil indeks terakhir saat komponen dimuat
  useEffect(() => {
    if (!csDataArray || csDataArray.length === 0) return;

    const STORAGE_KEY = "current_cs_index";
    const savedIndex = localStorage.getItem(STORAGE_KEY);

    if (savedIndex !== null) {
      const parsedIndex = parseInt(savedIndex, 10);
      if (!isNaN(parsedIndex)) {
        setCurrentIndex(parsedIndex % csDataArray.length);
      }
    }
  }, [csDataArray]);

  // Fungsi untuk menggeser giliran CS ke berikutnya secara langsung
  const rotateToNext = () => {
    if (!csDataArray || csDataArray.length === 0) return;

    const nextIndex = (currentIndex + 1) % csDataArray.length;
    setCurrentIndex(nextIndex);
    localStorage.setItem("current_cs_index", nextIndex.toString());
  };

  const selectedCS =
    csDataArray && csDataArray.length > 0 ? csDataArray[currentIndex] : null;

  return { selectedCS, rotateToNext };
};

export default useRotatingCS;
