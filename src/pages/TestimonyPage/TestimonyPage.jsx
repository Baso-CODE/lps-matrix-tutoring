import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TestimoniWa from "./Components/TestimoniWa/TestimoniWa";
import "./TestimonyPage.css";

const TestimonyPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="container-all">
      <TestimoniWa />
      {/* <SuccessStory /> */}
    </div>
  );
};

export default TestimonyPage;
