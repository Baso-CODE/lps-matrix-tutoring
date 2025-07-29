import { baseUrl } from "../../utils/config";

export async function getAllAlumniLps(page = 1, limit = 9) {
  // Tambahkan parameter page dan limit
  try {
    const response = await fetch(
      `${baseUrl}/alumnilps/getAll?page=${page}&limit=${limit}`
    ); // Kirim sebagai query params
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
