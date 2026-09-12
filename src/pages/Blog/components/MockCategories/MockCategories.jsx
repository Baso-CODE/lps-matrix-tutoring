/* eslint-disable react/prop-types */
import "./MockCategories.css";

const MockCategories = ({
  mockCategories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="category-buttons-container">
      <div className="category-buttons-wrapper">
        {mockCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MockCategories;
