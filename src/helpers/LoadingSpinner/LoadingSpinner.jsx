import "./LoadingSpinner.css";
import ClipLoader from "react-spinners/ClipLoader";
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#ff6500" loading={true} size={50} />{" "}
      {/* Ukuran dan warna bisa disesuaikan */}
    </div>
  );
};

export default LoadingSpinner;
