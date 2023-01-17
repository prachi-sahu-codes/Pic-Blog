import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops!!</h2>
      <p>The page you are looking for doesn't exist.</p>

      <Link to="/" className="backHome">
        Back to Home...
      </Link>
    </div>
  );
};

export default NotFound;
