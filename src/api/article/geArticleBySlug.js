import { baseUrlTesting } from "../../utils/config";

export async function getAllArticleBySlug(slug) {
  try {
    let url = `${baseUrlTesting}/articles/${slug}`;

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
