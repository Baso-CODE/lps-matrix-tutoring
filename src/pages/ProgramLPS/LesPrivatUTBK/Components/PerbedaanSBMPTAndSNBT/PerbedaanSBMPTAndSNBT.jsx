import Tilt from "react-parallax-tilt";
import "./PerbedaanSBMPTAndSNBT.css";

const PerbedaanSBMPTAndSNBT = () => {
  return (
    <section className="container-perbedaan-sbmptn-snbt">
      <div className="perbedaan-header">
        <h2 className="title-perbedaan">Perbedaan SNBP dan SNBT</h2>
      </div>

      <div className="card-container-perbedaan">
        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          perspective={1200}
          scale={1.015}
          transitionSpeed={700}
          glareEnable={false}
          className="perbedaan-tilt">
          <article className="card-perbedaan" data-aos="fade-right">
            <span className="card-perbedaan-specular" aria-hidden="true" />

            <span className="card-perbedaan-refraction" aria-hidden="true" />

            <div className="imagePerbedaan">
              <span className="image-perbedaan-specular" aria-hidden="true" />

              <img src="/images/icon/SNBP.webp" alt="SNBP" loading="lazy" />
            </div>

            <div className="perbedaan-card-label">SNBP</div>

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
          </article>
        </Tilt>

        <Tilt
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          perspective={1200}
          scale={1.015}
          transitionSpeed={700}
          glareEnable={false}
          className="perbedaan-tilt">
          <article className="card-perbedaan" data-aos="fade-left">
            <span className="card-perbedaan-specular" aria-hidden="true" />

            <span className="card-perbedaan-refraction" aria-hidden="true" />

            <div className="imagePerbedaan">
              <span className="image-perbedaan-specular" aria-hidden="true" />

              <img src="/images/icon/SNBT.webp" alt="SNBT" loading="lazy" />
            </div>

            <div className="perbedaan-card-label">SNBT</div>

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
          </article>
        </Tilt>
      </div>
    </section>
  );
};

export default PerbedaanSBMPTAndSNBT;
