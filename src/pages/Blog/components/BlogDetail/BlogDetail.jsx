import { useEffect, useState } from "react";
import "./BlogDetail.css";
import { getAllArticleBySlug } from "../../../../api/article/geArticleBySlug";
import { useParams } from "react-router-dom";
import { formatDate } from "../../../../utils/formatDate/formatDate";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const BlogDetail = () => {
  const { slug } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllArticleBySlug(slug);
      setData(result.data);
    };
    fetchData();
  }, [slug]);
  return (
    <div>
      {" "}
      {/* Gambar Sampul */}
      <img src={data?.coverImage} alt={data?.title} className="cover-image" />
      <div className="blog-detail-container">
        <div className="blog-detail-wrapper">
          {/* Tambahkan Breadcrumbs di sini */}
          <Breadcrumbs articleTitle={data?.title} />

          <div className="article-content-wrapper">
            {/* Header Artikel */}
            <div className="article-header">
              <h1 className="article-title">{data?.title}</h1>
              <div className="article-meta">
                <span className="meta-item">
                  Oleh <span className="meta-value">{data?.author}</span>
                </span>
                <span className="meta-separator">•</span>
                <span className="meta-item">
                  Kategori:{" "}
                  <span className="meta-value-category">
                    {data?.categoriesarticle.name}
                  </span>
                </span>
                <span className="meta-separator">•</span>
                <span className="meta-item">
                  Tanggal:{" "}
                  <span className="meta-value">
                    {formatDate(data?.publishedAt)}
                  </span>
                </span>
              </div>
              {/* Tag Artikel */}
              <div className="tag-list">
                {data?.tags.map((tag) => (
                  <span key={tag.id} className="tag-item">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="article-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}>
                {data?.content || ""}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
