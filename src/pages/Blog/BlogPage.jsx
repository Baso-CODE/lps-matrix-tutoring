import { useCallback, useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";

import {
  allArticles,
  categories,
  getArticlesByCategory,
} from "../../data/article";
import LoadingBlogDino from "../../helpers/LoadingBlogDino/LoadingBlogDino";
import CardArticle from "./components/CardArticle/CardArticle";
import MockCategories from "./components/MockCategories/MockCategories";
import Pagination from "./components/Pagination/Pagination";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [categoryList, setCategoryList] = useState([
    { id: null, name: "Semua" },
  ]);
  const [activeCategory, setActiveCategory] = useState({
    id: null,
    name: "Semua",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Init categories dari data lokal
  useEffect(() => {
    setCategoryList([{ id: null, name: "Semua" }, ...categories]);
  }, []);

  // Fetch articles dari data lokal
  const fetchArticles = useCallback(() => {
    setLoading(true);
    setError(null);

    const startTime = Date.now();

    try {
      // Get articles berdasarkan category
      let filteredArticles = allArticles;

      if (activeCategory.id !== null) {
        filteredArticles = getArticlesByCategory(activeCategory.id);
      }

      // Sort by date descending (newest first)
      filteredArticles = filteredArticles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
      );

      // Calculate pagination
      const totalItems = filteredArticles.length;
      const totalPages = Math.ceil(totalItems / articlesPerPage);
      const startIdx = (currentPage - 1) * articlesPerPage;
      const endIdx = startIdx + articlesPerPage;
      const paginatedArticles = filteredArticles.slice(startIdx, endIdx);

      setArticles(paginatedArticles);
      setPaginationData({
        articles: paginatedArticles,
        pagination: {
          currentPage,
          totalPages,
          totalItems,
          itemsPerPage: articlesPerPage,
        },
      });
    } catch (err) {
      setError("Gagal memuat artikel.");
      console.error(err);
    } finally {
      // Minimal loading 1 detik untuk better UX
      const elapsed = Date.now() - startTime;
      const delay = Math.max(1000 - elapsed, 0);
      setTimeout(() => setLoading(false), delay);
    }
  }, [currentPage, articlesPerPage, activeCategory.id]);

  // Fetch articles ketika category atau page berubah
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  // Handle filter by category
  const filterArticles = (categoryName) => {
    const selectedCategory = categoryList.find(
      (cat) => cat.name === categoryName,
    );
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
      setCurrentPage(1);
    }
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= paginationData.pagination?.totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container-blog">
      <Slider />

      {/* Category Filter */}
      <MockCategories
        mockCategories={categoryList.map((cat) => cat.name)}
        activeCategory={activeCategory.name}
        setActiveCategory={filterArticles}
      />

      {/* Loading, Error, atau Articles */}
      {error ? (
        <div className="error-message">{error}</div>
      ) : loading ? (
        <div className="flex justify-center my-8">
          <LoadingBlogDino />
        </div>
      ) : articles.length > 0 ? (
        <>
          <CardArticle articles={articles} />
        </>
      ) : (
        <div className="no-articles">
          <p>Tidak ada artikel di kategori ini.</p>
        </div>
      )}

      {/* Pagination */}
      {paginationData.pagination?.totalPages > 1 && (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={paginationData.pagination?.totalItems}
          paginate={paginate}
          currentPage={paginationData.pagination?.currentPage}
        />
      )}
    </div>
  );
};

export default BlogPage;
