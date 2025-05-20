import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
const CategoryNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const data = useLoaderData();
  //   console.log(data);

  useEffect(() => {
    if (id == "0") {
      setNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setNews(filteredNews);
    }
    // console.log("====================================");
    // console.log("filtered news ", id, news);
    // console.log("====================================");
  }, [id]);

  if (!news) {
    return <span className="loading loading-ring loading-xl"></span>;
  }

  return (
    <div>
      <h1>CategoryNews {id}</h1>
      <h2>News {news.length}</h2>
      {news.map((singleNews) => (
        <NewsCard key={singleNews.id} news={singleNews}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
