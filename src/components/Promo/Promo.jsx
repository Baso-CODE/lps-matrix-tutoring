import React, { useEffect, useState } from "react";
import "./Promo.css";
import { getPromo } from "../../api/promo/getPromo";

const Promo = () => {
  const [promoData, setDataPromo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPromo();
        setDataPromo(result.data);
      } catch (error) {
        console.error("errot fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className=" parent-promo-home">
        {promoData.map((promo) => (
          <img
            key={promo.id}
            loading="lazy"
            src={promo.link_image}
            alt="Promo les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN"
            className="child-promo-home"
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Promo;
