// src/data/articles/index.js

import { categories } from "./categories.js";
import { cpnsArticles } from "./cpns.js";
import { mahasiswaArticles } from "./mahasiswa.js";
import { osnArticles } from "./osn.js";
import { pascasarjanaArticles } from "./pascasarjana.js";
import { sdSmpSmaArticles } from "./sdSmpSma.js";
import { simakUIArticles } from "./simakUI.js";
import { tkaArticles } from "./tka.js";
import { utbkArticles } from "./utbk.js";

// Gabung semua articles
export const allArticles = [
  ...utbkArticles,
  ...cpnsArticles,
  ...simakUIArticles,
  ...mahasiswaArticles,
  ...sdSmpSmaArticles,
  ...pascasarjanaArticles,
  ...osnArticles,
  ...tkaArticles,
];

// Export categories
export { categories };

// Helper function - Get articles by category ID
export const getArticlesByCategory = (categoryId) => {
  return allArticles.filter((article) => article.categoryId === categoryId);
};

// Helper function - Get article by slug
export const getArticleBySlug = (slug) => {
  return allArticles.find((article) => article.slug === slug);
};

// Helper function - Get all unique categories
export const getAllCategories = () => {
  return categories;
};

// Helper function - Get category name by ID
export const getCategoryNameById = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : null;
};

// Helper function - Get articles count by category
export const getArticlesCountByCategory = (categoryId) => {
  return allArticles.filter((article) => article.categoryId === categoryId)
    .length;
};

// Helper function - Get latest articles
export const getLatestArticles = (limit = 6) => {
  return allArticles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
};
