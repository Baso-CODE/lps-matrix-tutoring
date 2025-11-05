import "./LoadingBlog.css";

const LoadingBlog = () => {
  return (
    <div className="loading-spinner">
      <div className="typewriter">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default LoadingBlog;
