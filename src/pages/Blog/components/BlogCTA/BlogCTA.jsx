import { useCSData } from "../../../../hooks/useCSData";
import { useRotatingCS } from "../../../../hooks/useRotatingCS";
import "./BlogCTA.css";

const BlogCTA = () => {
  const { csData } = useCSData();
  const selectedCS = useRotatingCS(csData);
  const fallbackCS = {
    nama_cs: "Tim LPS Education",
    link_cta:
      "https://api.whatsapp.com/send?phone=6281311778441&text=Halo,%20saya%20tertarik%20dengan%20program%20LPS%20Education",
  };
  const contactCS = selectedCS || fallbackCS;

  return (
    <div className="blog-cta">
      <div className="cta-wrapper">
        <div className="cta-content">
          <h2 className="cta-title">
            Siap meningkatkan prestasi akademik Anda?
          </h2>
          <p className="cta-text">
            Dapatkan bimbingan personal dari tutor berpengalaman. Konsultasi
            gratis dan tanpa komitmen untuk membantu Anda mencapai target.
          </p>
          {/* Features List */}
          <ul className="cta-features">
            <li>✓ Tutor berpengalaman dari PTN terkemuka</li>
            <li>✓ Program disesuaikan dengan kebutuhan Anda</li>
            <li>✓ Konsultasi gratis dan tanpa komitmen</li>
          </ul>
          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href={contactCS.link_cta} className="btn btn-primary">
              Hubungi {contactCS.nama_cs}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCTA;
