/* eslint-disable react/prop-types */
import { ChevronRight } from "lucide-react";
import "./CardArticle.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../utils/formatDate/formatDate";
const CardArticle = ({ articles }) => {
  return (
    <div>
      <div className="articles-grid">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              <Link to={`/blog/${article.slug}`}>
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="article-card-image"
                />
              </Link>
              <div className="article-card-body">
                {/* Bagian untuk kategori dan tanggal publikasi */}
                <div className="card-meta">
                  <span className="article-category-label">
                    {article.categoriesarticle.name}
                  </span>
                  <span className="article-date">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                <h3 className="article-card-title">{article.title}</h3>

                {/* Bagian untuk tag */}
                <div className="card-tags-list">
                  {article.tags.map((tag) => (
                    <span key={tag.id} className="card-tag-item">
                      {tag.name}
                    </span>
                  ))}
                </div>

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
