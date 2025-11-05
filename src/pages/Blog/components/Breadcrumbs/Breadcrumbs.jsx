import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import { ChevronRight, Home } from "lucide-react";
import PropTypes from "prop-types";

const Breadcrumbs = ({ articleTitle }) => {
  return (
    <nav className="breadcrumbs-container">
      <ol className="breadcrumbs-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            <Home size={16} />
            <span className="breadcrumb-text">Home</span>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <ChevronRight size={16} className="breadcrumb-separator" />
          <Link to="/blog" className="breadcrumb-link">
            <span className="breadcrumb-text">Blog</span>
          </Link>
        </li>
        <li className="breadcrumb-item">
          <ChevronRight size={16} className="breadcrumb-separator" />
          <span className="breadcrumb-current-page">{articleTitle}</span>
        </li>
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  articleTitle: PropTypes.string.isRequired,
};

export default Breadcrumbs;
