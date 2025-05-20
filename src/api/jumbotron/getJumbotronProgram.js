import { baseUrlTesting } from "../../utils/config";

export async function getJumbotronProgram(program) {
  try {
    const response = await fetch(
      `${baseUrlTesting}/jumbotron-program/program/${program}`
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
