import { baseUrlTesting } from "../../utils/config";

export async function getAllArticleByCategoryWithPagination(
  page = 1,
  limit = 6,
  categoryId = null
) {
  try {
    let url = `${baseUrlTesting}/articles/all/category?page=${page}&limit=${limit}`;
    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
