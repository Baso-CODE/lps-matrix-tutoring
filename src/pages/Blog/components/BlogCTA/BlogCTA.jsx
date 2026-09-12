import { useCSData } from "../../../../hooks/useCSData";
import { useRotatingCS } from "../../../../hooks/useRotatingCS";
import "./BlogCTA.css";

const ArrowRightIcon = () => (
  <svg
    className="btn-arrow"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <path
      d="M3.75 9h10.5M9.75 4.5 14.25 9l-4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
    <section className="blog-cta">
      <span className="blog-cta-specular" aria-hidden="true" />
      <span className="blog-cta-refraction" aria-hidden="true" />

      <div className="cta-wrapper">
        <div className="cta-eyebrow">
          <span className="cta-eyebrow-dot" aria-hidden="true" />
          Konsultasi Gratis
        </div>

        <div className="cta-content">
          <h2 className="cta-title">
            Siap tingkatkan{" "}
            <span className="cta-title-accent">prestasi akademik</span> Anda?
          </h2>

          <p className="cta-text">
            Bimbingan personal dari tutor berpengalaman, program yang
            disesuaikan dengan kebutuhan Anda — tanpa komitmen awal.
          </p>

          <ul className="cta-features" aria-label="Keunggulan program">
            <li>
              <span className="cta-feature-check" aria-hidden="true">
                ✓
              </span>
              <span>Tutor dari PTN terkemuka</span>
            </li>

            <li>
              <span className="cta-feature-check" aria-hidden="true">
                ✓
              </span>
              <span>Program personal & fleksibel</span>
            </li>

            <li>
              <span className="cta-feature-check" aria-hidden="true">
                ✓
              </span>
              <span>Konsultasi gratis, tanpa syarat</span>
            </li>
          </ul>

          <div className="cta-buttons">
            <a
              href={contactCS.link_cta}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer">
              <span className="btn-primary-specular" aria-hidden="true" />

              <span className="btn-primary-text">
                Hubungi {contactCS.nama_cs}
              </span>

              <ArrowRightIcon />

              <span className="btn-primary-orb" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <span className="blog-cta-liquid-orb" aria-hidden="true" />
    </section>
  );
};

export default BlogCTA;
