/* eslint-disable react/prop-types */
import "./InformationProgram.css";
import { useEffect, useState } from "react";
import { getInformationProgram } from "../../api/informationProgram/getInformationProgram";

// Komponen ini akan menerima prop 'programType'
const InformationProgram = ({ programType }) => {
  const [informations, setInformations] = useState([]);

  // Fungsi untuk mengambil data informasi dari API
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const result = await getInformationProgram(programType);

        setInformations(result.data || []);
      } catch (err) {
        console.error(`Error fetching information for ${programType}:`, err);
        setInformations([]);
      }
    };

    // Pastikan programType ada sebelum memanggil API
    if (programType) {
      fetchInformation();
    }
  }, [programType]);

  // Jika tidak ada data informasi yang ditemukan untuk program ini
  if (informations.length === 0) {
    return (
      <div className="information-container">
        <p className="no-data-message">
          Tidak ada informasi tersedia untuk program ini.
        </p>
      </div>
    );
  }

  return (
    <div className="information-container">
      {informations.map((info, index) => (
        <div
          className={`information-item ${
            index % 2 === 1 ? "reverse" : "" // Mengatur layout bolak-balik untuk setiap 2 item
          }`}
          key={info.id || index} // Gunakan info.id sebagai key jika ada, lebih unik
        >
          <div className="information-text">
            <h2 className="information-subtitle">{info.title}</h2>
            {/* Menggunakan innerHTML jika subDesc mengandung HTML/Markdown seperti <br/> atau ** */}
            <p
              className="information-description"
              dangerouslySetInnerHTML={{ __html: info.desc }} // Menggunakan desc dari API
            ></p>
            <p
              className="information-description"
              dangerouslySetInnerHTML={{ __html: info.subDesc }} // Menggunakan subDesc dari API
            ></p>
          </div>
          <div className="information-image-container">
            {info.link_image ? ( // Cek apakah link_image ada
              <img
                loading="lazy"
                src={info.link_image} // Gunakan link_image dari API
                alt={`Ilustrasi informasi ${info.title}`}
                className="information-image"
              />
            ) : (
              // Opsional: Placeholder jika tidak ada gambar dari API
              <div className="no-image-placeholder">{info.title}</div>
            )}
          </div>
        </div>
      ))}

      {/* Bagian Fun Fact & Saran (tetap statis atau bisa Anda sesuaikan) */}
      <div className="additional-info">
        <h2 className="additional-info-title">Fun Fact & Saran</h2>
        <p
          className="additional-info-fact"
          dangerouslySetInnerHTML={{ __html: informations[0].funFact }} // Menggunakan subDesc dari API
        ></p>

        <p
          className="additional-info-advice"
          dangerouslySetInnerHTML={{ __html: informations[0].advice }} // Menggunakan subDesc dari API
        ></p>
      </div>
    </div>
  );
};

export default InformationProgram;
