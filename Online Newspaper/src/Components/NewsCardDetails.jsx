import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
const NewsCardDetails = ({ news }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return (
      <div className="min-h-screen flex  justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[417px]">
        <h1 className="text-3xl font-bold">Please Login to see the details</h1>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>

      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/catagory/${news.category_id}`}>
        {" "}
        Back to Category
      </Link>
    </div>
  );
};

export default NewsCardDetails;
