import "./ValuesCompany.css";

const ValuesCompany = () => {
  return (
    <div className="values-company">
      <h1 className="values-title">Our Core Values</h1>
      <p className="values-description">
        These are the principles we uphold in our company:
      </p>
      <div className="values-list">
        <div className="value-item">
          <img
            loading="lazy"
            src="/images/about-us/integrity.webp"
            alt="Integrity: A symbol of trust and honesty in our work"
            className="emoji"
          />
          <span>INTEGRITY</span>
        </div>
        <div className="value-item">
          <img
            loading="lazy"
            src="/images/about-us/toga_1.webp"
            alt="Expertise: Demonstrating knowledge and skill in every aspect"
            className="emoji"
          />
          <span>EXPERTISE</span>
        </div>
        <div className="value-item">
          <img
            loading="lazy"
            src="/images/about-us/profesional.webp"
            alt="Professionalism: Maintaining high standards and ethics in our work"
            className="emoji"
          />
          <span>PROFESSIONALISM</span>
        </div>
      </div>
    </div>
  );
};

export default ValuesCompany;
