import { useState } from "react";

export const FALLBACK_CS_DATA = [
  {
    id: 2,
    nama_cs: "Kak Fina",
    nomor_hp: "081311778441",
    link_cta:
      "https://api.whatsapp.com/send?phone=6281311778441&text=Halo%20Kak%20Fina%20...%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com%0ASaya%20mau%20tanya%20program%20LPS%20Education%20...",
    display_order: 1,
    weight: 1,
    isDeleted: false,
  },
  {
    id: 6,
    nama_cs: "Kak Ririn",
    nomor_hp: "085774023474",
    link_cta:
      "https://api.whatsapp.com/send?phone=6285774023474&text=Halo%20Kak%20Ririn%20...%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com%0ASaya%20mau%20tanya%20program%20LPS%20Education%20...",
    display_order: 2,
    weight: 1,
    isDeleted: false,
  },
  {
    id: 4,
    nama_cs: "Kak Fani",
    nomor_hp: "082258689993",
    link_cta:
      "https://api.whatsapp.com/send?phone=6282258689993&text=Halo%20Kak%20Fani%20...%0Ahttps%3A%2F%2Fapps.lesprivatmasukptn.com%0ASaya%20mau%20tanya%20program%20LPS%20Education%20...",
    display_order: 3,
    weight: 1,
    isDeleted: false,
  },
];

export const useCSData = () => {
  const [csData] = useState(() => {
    return FALLBACK_CS_DATA.filter((cs) => !cs.isDeleted).sort(
      (a, b) => (a.display_order || 0) - (b.display_order || 0),
    );
  });

  return { csData, loading: false, error: null };
};

export default useCSData;
