import { useCallback, useEffect, useState } from "react";
import { getAllArticleByCategoryWithPagination } from "../../api/article/getAllArticleByCategoryWithPagination";
import { getAllCategoryArticle } from "../../api/article/getCategoryArticle";
import Slider from "../../components/Slider/Slider";
import LoadingBlogDino from "../../helpers/LoadingBlogDino/LoadingBlogDino";
import CardArticle from "./components/CardArticle/CardArticle";
import MockCategories from "./components/MockCategories/MockCategories";
import Pagination from "./components/Pagination/Pagination";

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  const [paginationData, setPaginationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [categories, setCategories] = useState([{ name: "Semua", id: null }]);

  const [activeCategory, setActiveCategory] = useState({
    name: "Semua",
    id: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getAllCategoryArticle();
        if (result?.data) {
          setCategories([{ name: "Semua", id: null }, ...result.data]);
        }
      } catch (err) {
        console.error("Gagal memuat kategori:", err);
      }
    };
    fetchCategories();
  }, []);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);

    const startTime = Date.now();
    try {
      const result = await getAllArticleByCategoryWithPagination(
        currentPage,
        articlesPerPage,
        activeCategory.id
      );

      setArticles(result.data.articles);
      setPaginationData(result.data.pagination);
    } catch (err) {
      setError("Gagal memuat artikel.");
      console.error(err);
    } finally {
      const elapsed = Date.now() - startTime;
      const delay = Math.max(1000 - elapsed, 0); // minimal tampil 1 detik
      setTimeout(() => setLoading(false), delay);
    }
  }, [currentPage, articlesPerPage, activeCategory.id]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const filterArticles = (category) => {
    const selectedCategory = categories.find((cat) => cat.name === category);
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
      setCurrentPage(1);
    }
  };

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= paginationData.totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container-blog">
      <Slider />
      {/* <HeroSection /> */}
      <MockCategories
        mockCategories={categories.map((cat) => cat.name)}
        activeCategory={activeCategory.name}
        setActiveCategory={filterArticles}
      />

      {/* Artikel atau Loading */}
      {error ? (
        <div>{error}</div>
      ) : loading ? (
        <div className="flex justify-center my-8">
          <LoadingBlogDino />
        </div>
      ) : (
        <>
          <CardArticle articles={articles} />
        </>
      )}
      {paginationData.totalPages > 1 && (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={paginationData.totalItems}
          paginate={paginate}
          currentPage={paginationData.currentPage}
        />
      )}
    </div>
  );
};

export default BlogPage;
