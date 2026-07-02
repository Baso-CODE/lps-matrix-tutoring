/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getCategoryNameById } from "../../../../data/article";
import { formatDate } from "../../../../utils/formatDate/formatDate";
import "./CardArticle.css";

const CardArticle = ({ articles }) => {
  const FALLBACK_IMAGE = "/images/no-image-article.webp";

  // Function untuk handle image error
  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <div>
      <div className="articles-grid">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              {/* Cover Image dengan Fallback */}
              <Link to={`/blog/${article.slug}`}>
                <img
                  src={article.coverImage || FALLBACK_IMAGE}
                  alt={article.title}
                  className="article-card-image"
                  onError={handleImageError}
                />
              </Link>

              <div className="article-card-body">
                {/* Category dan Date */}
                <div className="card-meta">
                  <span className="article-category-label">
                    {getCategoryNameById(article.categoryId)}
                  </span>
                  <span className="article-date">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="article-card-title">{article.title}</h3>

                {/* Description */}
                <p className="article-card-description">
                  {article.description}
                </p>

                {/* Tags */}
                <div className="card-tags-list">
                  {article.tags && article.tags.length > 0
                    ? article.tags.map((tag) => (
                        <span
                          key={tag.id || tag.name}
                          className="card-tag-item">
                          {tag.name}
                        </span>
                      ))
                    : null}
                </div>

                {/* Read More Link */}
                <Link to={`/blog/${article.slug}`} className="read-more-link">
                  Baca Selengkapnya
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-articles-found">
            <p>Tidak ada artikel yang ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardArticle;
