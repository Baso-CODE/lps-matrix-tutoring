import { useEffect, useState } from "react";
import { getSuccessStory } from "../../../../api/successStory/getSuccessStory";
import "./SuccessStory.css";

const SuccessStory = () => {
  const [dataSuccessStory, setDataSuccessStory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSuccessStory();
        setDataSuccessStory(result.data);
      } catch (error) {
        console.error("errot fetch data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section id="success-story">
      <div className="succesStory-lps-container">
        <div className="succesStory-lps-header">
          <h2>Success Stories</h2>
        </div>
        <p className="additional-description-about__us">
          Setiap foto ini punya kisah sendiri, bukti nyata kalau bimbingan kami
          mendampingi kamu sampai dengan lolos PTN.
        </p>
        {/* Image Gallery */}
        <div className="success-story-gallery">
          {dataSuccessStory.map((item, index) => (
            <img
              loading="lazy"
              src={item.link_image}
              alt={`Success Story Image ${item.name}`}
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

export default SuccessStory;
