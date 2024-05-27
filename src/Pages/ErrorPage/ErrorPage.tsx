import { Link } from "react-router-dom";
import PageNotFound from "../../assets/PageNotFound.svg";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <img src={PageNotFound} alt="Page Not found" width="30%" height="100%" />
      <Link to="/">
        <p className="text-blue-700 underline">Go to Home Page...</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
