export const formatDescriptionWithHighlight = (text) => {
  if (!text) return null;
  // Memisahkan teks berdasarkan frasa "LPS Education"
  const parts = text.split(/(LPS Education)/g);
  return parts.map((part, index) => {
    if (part === "LPS Education") {
      return (
        <span key={index} className="color-d2b04c-description">
          {part}
        </span>
      );
    }
    return part;
  });
};
