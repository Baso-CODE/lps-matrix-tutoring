import { useEffect, useState } from "react";

export const useRotatingCS = (csDataArray) => {
  const [selectedCS, setSelectedCS] = useState(null);

  useEffect(() => {
    if (!csDataArray || csDataArray.length === 0) return;

    const randomIndex = Math.floor(Math.random() * csDataArray.length);
    const selectedCS = csDataArray[randomIndex];

    setSelectedCS(selectedCS);
  }, [csDataArray]);

  return selectedCS;
};

export default useRotatingCS;
