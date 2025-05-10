import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <React.Fragment>
      {/* DESKTOP */}
      {/* <div className="parent-promo-home">
        {dataPromo.length > 0 &&
          dataPromo.map((promo, index) => (
            <img
              key={index}
              className="child-promo-home"
              src={promo.url}
              alt={`Promo les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) ${
                index + 1
              } - Matrix Tutoring`}
            />
          ))}
      </div> */}
      <div className=" parent-promo-home">
        <img
          loading="lazy"
          src="/images/diskon-bulanan.webp"
          alt="Promo les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN"
          className="child-promo-home"
        />
      </div>
    </React.Fragment>
  );
};

export default Promo;
