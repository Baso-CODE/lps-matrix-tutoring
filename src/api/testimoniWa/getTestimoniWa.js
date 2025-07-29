import { baseUrl } from "../../utils/config";

export async function getTestimoniWa() {
  try {
    const response = await fetch(`${baseUrl}/testimoniWa/all`);
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
