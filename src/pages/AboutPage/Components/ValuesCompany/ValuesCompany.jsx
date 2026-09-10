import "./ValuesCompany.css";

const values = [
  {
    name: "INTEGRITY",
    image: "/images/about-us/integrity.webp",
    alt: "Integrity: A symbol of trust and honesty in our work",
  },
  {
    name: "EXPERT",
    image: "/images/about-us/toga_1.webp",
    alt: "Expertise: Demonstrating knowledge and skill in every aspect",
  },
  {
    name: "SINERGY",
    image: "/images/about-us/profesional.webp",
    alt: "Professionalism: Maintaining high standards and ethics in our work",
  },
];

const ValuesCompany = () => {
  return (
    <section className="values-company">
      <div className="values-company-inner">
        <div className="values-header">
          <span className="values-eyebrow">
            <span className="values-eyebrow-dot" />
            LPS Education
          </span>

          <h2 className="values-title">Our Core Values</h2>

          <p className="values-description">
            These are the principles we uphold in our company:
          </p>
        </div>

        <div className="values-list">
          {values.map((value) => (
            <article key={value.name} className="value-item">
              <span className="value-item-specular" aria-hidden="true" />

              <div className="value-icon-wrapper">
                <img
                  loading="lazy"
                  src={value.image}
                  alt={value.alt}
                  className="emoji"
                />
              </div>

              <span className="value-name">{value.name}</span>

              <span className="value-liquid-orb" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesCompany;
