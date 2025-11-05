import Tilt from "react-parallax-tilt";
import "./PerbedaanSBMPTAndSNBT.css";

const PerbedaanSBMPTAndSNBT = () => {
  return (
    <div className="container-perbedaan-sbmptn-snbt">
      <h1 className="title-perbedaan">Perbedaan SNBP dan SNBT</h1>
      <div className="card-container-perbedaan">
        {/* Card 1: SBMPTN */}
        <Tilt>
          <div className="card-perbedaan" data-aos="fade-right">
            <div className="imagePerbedaan">
              <img src="/images/icon/SNBP.webp" alt="SNBP" loading="lazy" />
            </div>
            {/* <h2 className="card-title-perbedaan">SNBP</h2> */}
            <ol className="card-list-perbedaan">
              <li>
                Seleksi berdasarkan nilai rapor dan prestasi akademik lainnya.
              </li>
              <li>Menilai rekam jejak akademik siswa selama di sekolah.</li>
              <li>
                Juga mempertimbangkan portofolio dan prestasi non-akademik (jika
                ada).
              </li>
              <li>
                Menggunakan nilai Tes Kemampuan Akademik (TKA) sebagai instrumen
                tambahan untuk penilaian.
              </li>
            </ol>
          </div>
        </Tilt>

        {/* Card 2: SNBT */}
        <Tilt>
          <div className="card-perbedaan" data-aos="fade-left">
            <div className="imagePerbedaan">
              <img src="/images/icon/SNBT.webp" alt="SNBT" loading="lazy" />
            </div>
            {/* <h2 className="card-title-perbedaan">SNBT</h2> */}
            <ol className="card-list-perbedaan">
              <li>
                Seleksi berdasarkan hasil Ujian Tulis Berbasis Komputer (UTBK).
              </li>
              <li>
                Materi ujian meliputi Tes Potensi Skolastik (TPS), Literasi, dan
                Penalaran Matematika.
              </li>
              <li>
                Bertujuan mengukur kemampuan penalaran dan pemecahan masalah.
              </li>
            </ol>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default PerbedaanSBMPTAndSNBT;
