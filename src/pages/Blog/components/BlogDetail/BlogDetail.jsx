import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

import {
  getArticleBySlug,
  getCategoryNameById,
} from "../../../../data/article";
import { formatDate } from "../../../../utils/formatDate/formatDate";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FALLBACK_IMAGE = "/images/no-image-article.webp";
  const SITE_URL = "https://apps.lesprivatmasukptn.com";

  const handleImageError = (e) => {
    e.target.src = FALLBACK_IMAGE;
  };

  const renderStructuredContent = (contentArray) => {
    return contentArray.map((block, index) => {
      switch (block.type) {
        case "heading": {
          const HeadingTag = `h${block.level}`;
          return (
            <HeadingTag
              key={index}
              className={`article-body-heading heading-level-${block.level}`}>
              {block.content}
            </HeadingTag>
          );
        }
        case "paragraph":
          return (
            <p key={index} className="article-body-paragraph">
              {block.content}
            </p>
          );
        case "list":
          return (
            <ul key={index} className="article-body-list">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="article-body-list-item">
                  {item}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  const extractPlainText = (content) => {
    if (Array.isArray(content)) {
      return content
        .filter((block) => block.type === "paragraph")
        .map((block) => block.content)
        .join(" ")
        .substring(0, 160);
    } else if (typeof content === "string") {
      return content
        .replace(/[#*`[\]]/g, "")
        .split("\n")[0]
        .substring(0, 160);
    }
    return "";
  };

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      const article = getArticleBySlug(slug);

      if (article) {
        const transformedData = {
          id: article.id,
          title: article.title,
          coverImage: article.coverImage,
          author: article.author,
          publishedAt: article.publishedAt,
          categoriesarticle: {
            id: article.categoryId,
            name: getCategoryNameById(article.categoryId),
          },
          tags: article.tags,
          content: article.content,
          description: article.description,
          slug: article.slug,
        };

        setData(transformedData);
      } else {
        setError("Artikel tidak ditemukan.");
      }
    } catch (err) {
      setError("Gagal memuat artikel.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <div className="blog-detail-loading">Loading...</div>;
  if (error) return <div className="blog-detail-error">{error}</div>;
  if (!data)
    return <div className="blog-detail-error">Artikel tidak ditemukan.</div>;

  const metaDescription = data?.description || extractPlainText(data?.content);
  const articleUrl = `${SITE_URL}/blog/${data?.slug}`;
  const imageUrl = data?.coverImage || `${SITE_URL}${FALLBACK_IMAGE}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data?.title,
    description: metaDescription,
    image: imageUrl,
    datePublished: data?.publishedAt,
    dateModified: data?.publishedAt,
    author: { "@type": "Person", name: data?.author },
    publisher: {
      "@type": "Organization",
      name: "LPS Education",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    articleSection: data?.categoriesarticle?.name,
    keywords: data?.tags?.map((tag) => tag.name).join(", "),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LPS Education",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Les Privat Terbaik untuk Persiapan UTBK, CPNS, dan Ujian Lainnya",
    sameAs: [
      "https://www.facebook.com/lpsmatrix",
      "https://www.instagram.com/lpsmatrix",
      "https://www.youtube.com/@lpsmatrix",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{data?.title} | LPS Education Blog</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content={data?.tags?.map((tag) => tag.name).join(", ")}
        />
        <meta name="author" content={data?.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={data?.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:site_name" content="LPS Education" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data?.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />

        <meta property="article:published_time" content={data?.publishedAt} />
        <meta property="article:modified_time" content={data?.publishedAt} />
        <meta property="article:author" content={data?.author} />
        <meta
          property="article:section"
          content={data?.categoriesarticle?.name}
        />
        {data?.tags?.map((tag) => (
          <meta key={tag.id} property="article:tag" content={tag.name} />
        ))}

        <link rel="canonical" href={articleUrl} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div>
        <img
          src={data?.coverImage || FALLBACK_IMAGE}
          alt={data?.title}
          className="cover-image"
          onError={handleImageError}
        />

        <div className="blog-detail-container">
          <div className="blog-detail-wrapper">
            <Breadcrumbs articleTitle={data?.title} />

            <div className="article-content-wrapper">
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
                      {data?.categoriesarticle?.name}
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

                <div className="tag-list">
                  {data?.tags && data?.tags.length > 0
                    ? data?.tags.map((tag, index) => (
                        <span
                          key={tag.id ? `tag-${tag.id}` : `tag-${index}`}
                          className="tag-item">
                          {tag.name}
                        </span>
                      ))
                    : null}
                </div>

                {data?.description && (
                  <p className="article-description">{data?.description}</p>
                )}
              </div>

              <div className="article-body">
                {Array.isArray(data?.content) ? (
                  renderStructuredContent(data?.content)
                ) : typeof data?.content === "string" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data?.content || ""}
                  </ReactMarkdown>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
