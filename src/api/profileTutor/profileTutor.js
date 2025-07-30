import { baseUrl } from "../../utils/config";

export async function getProfileTutor() {
  try {
    const response = await fetch(`${baseUrl}/profiletutor/getAll`);
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
