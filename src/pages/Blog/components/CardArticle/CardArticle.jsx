/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getCategoryNameById } from "../../../../data/article";
import { formatDate } from "../../../../utils/formatDate/formatDate";
import "./CardArticle.css";

const CardArticle = ({ articles }) => {
  const FALLBACK_IMAGE = "/images/no-image-article.webp";

  const handleImageError = (e) => {
    e.currentTarget.src = FALLBACK_IMAGE;
  };

  return (
    <div className="card-container-all">
      <div className="articles-grid">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <article key={article.id} className="article-card">
              <span className="article-card-specular" aria-hidden="true" />
              <span className="article-card-refraction" aria-hidden="true" />

              <Link
                to={`/blog/${article.slug}`}
                className="article-card-image-link">
                <div className="article-card-image-wrapper">
                  <img
                    src={article.coverImage || FALLBACK_IMAGE}
                    alt={article.title}
                    className="article-card-image"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="article-card-body">
                <div className="card-meta">
                  <span className="article-category-label">
                    {getCategoryNameById(article.categoryId)}
                  </span>

                  <span className="article-date">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                <h3 className="article-card-title">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="article-card-description">
                  {article.description}
                </p>

                {article.tags && article.tags.length > 0 ? (
                  <div className="card-tags-list">
                    {article.tags.map((tag) => (
                      <span key={tag.id || tag.name} className="card-tag-item">
                        {tag.name}
                      </span>
                    ))}
                  </div>
                ) : null}

                <Link to={`/blog/${article.slug}`} className="read-more-link">
                  <span>Baca Selengkapnya</span>
                  <ChevronRight size={16} strokeWidth={2.2} />
                </Link>
              </div>

              <span className="article-card-orb" aria-hidden="true" />
            </article>
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
