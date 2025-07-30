import { useEffect, useState } from "react";
import "./TestimoniWa.css";
import { getTestimoniWa } from "../../../../api/testimoniWa/getTestimoniWa";

const TestimoniWa = () => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTestimoniWa();
        setDataTestimoniWa(result.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="TESTIMONI">
      <div className="succesStory-lps-container">
        <div className="succesStory-lps-header">
          <h2>Testimonials</h2>
        </div>
        <p className="additional-description-about__us">
          Berikut adalah kumpulan testimoni dari siswa dan orang tua yang telah
          merasakan manfaat LPS Education. Bukti nyata keberhasilan mereka dalam
          meraih impian dan PTN Favorit impian!
        </p>
        {/* Image Gallery */}
        <div className="success-story-wa-siswa-page">
          {dataTestimoniWa.map((item, index) => (
            <img
              loading="lazy"
              src={item.link_image}
              alt="Bimbel Les Privat ONLINE dan Les Privat Datang ke Rumah untuk Program SBMPTN UTBK SNBT Simak UI UTUL UGM. Guru Privat Masuk UI ITB UGM dan Kedokteran di PTN Favorit."
              key={index}
              className="success-story-image"
            />
          ))}
        </div>
        <p className="additional-description-about__us">
          Dan masih banyak lagi kisah sukses yang terus bertambah setiap
          tahunnya, membuktikan komitmen kami dalam mengantar siswa lolos ke
          Kedokteran dan berbagai Program Studi unggulan di PTN Favorit impian
          Anda! ...
        </p>
      </div>
    </section>
  );
};

export default TestimoniWa;
