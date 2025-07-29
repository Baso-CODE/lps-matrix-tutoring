import { baseUrl } from "../../utils/config";

export async function getInformationProgram(program) {
  try {
    const response = await fetch(
      `${baseUrl}/information-program/program/${program}`
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
