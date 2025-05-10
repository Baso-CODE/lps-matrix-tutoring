// PerbedaanSBMPTAndSNBT.js
import Tilt from "react-parallax-tilt";
import "./PerbedaanSBMPTAndSNBT.css";

const PerbedaanSBMPTAndSNBT = () => {
  return (
    <div className="container-perbedaan-sbmptn-snbt">
      <h1 className="title-perbedaan">Perbedaan SBMPTN dan SNBT</h1>
      <div className="card-container-perbedaan">
        {/* Card 1: SBMPTN */}
        <Tilt>
          <div className="card-perbedaan" data-aos="fade-right">
            <div className="imagePerbedaan">
              <img src="/images/icon/SNBP.webp" alt="SNBP" loading="lazy" />
            </div>
            <h2 className="card-title-perbedaan">SBMPTN</h2>
            <ol className="card-list-perbedaan">
              <li>Seleksi berdasarkan ujian nasional.</li>
              <li>Ujian menguji kemampuan akademik dan potensi skolastik.</li>
              <li>Mengukur pengetahuan dasar siswa untuk masuk PTN.</li>
            </ol>
          </div>
        </Tilt>

        {/* Card 2: SNBT */}
        <Tilt>
          <div className="card-perbedaan" data-aos="fade-left">
            <div className="imagePerbedaan">
              <img src="/images/icon/SNBT.webp" alt="SNBT" loading="lazy" />
            </div>
            <h2 className="card-title-perbedaan">SNBT</h2>
            <ol className="card-list-perbedaan">
              <li>Seleksi nasional berdasarkan tes.</li>
              <li>Fokus pada kemampuan skolastik, literasi, dan numerasi.</li>
              <li>Mengukur kesiapan siswa untuk pendidikan di tingkat PT.</li>
            </ol>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default PerbedaanSBMPTAndSNBT;
