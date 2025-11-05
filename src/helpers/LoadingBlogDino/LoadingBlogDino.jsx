import "./LoadingBlogDino.css";

const LoadingBlogDino = () => {
  return (
    <div>
      <div className="loading-spinner-blog">
        <div className="typewriter">
          <div className="slide">
            <i></i>
          </div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBlogDino;
