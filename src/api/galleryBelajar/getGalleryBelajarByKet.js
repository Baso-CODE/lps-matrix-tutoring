import { baseUrl } from "../../utils/config";

export async function getGalleryBelajarByKet(keterangan) {
  try {
    const response = await fetch(
      `${baseUrl}/gallery-belajar/keterangan/${keterangan}`
    );
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
