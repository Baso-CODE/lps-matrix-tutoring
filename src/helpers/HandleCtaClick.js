export const handleCTAClickLogic = (
  targetUrl,
  e = null,
  openInNewTab = false
) => {
  if (e) {
    e.preventDefault();
  }

  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(targetUrl);

    setTimeout(() => {
      if (openInNewTab) {
        window.open(targetUrl, "_blank");
      } else {
        window.location.href = targetUrl;
      }
    }, 100);
  } else {
    console.warn(
      "gtag_report_conversion is not defined. Redirecting directly."
    );
  }
};
