import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCared from "../Components/NewsCared";
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

  return (
    <div>
      <h1>CategoryNews {id}</h1>
      <h2>News {news.length}</h2>
      {
        news?.map((singleNews) => (
            <NewsCared key={singleNews.id} news={singleNews}></NewsCared>
        ))
      }
    </div>
  );
};

export default CategoryNews;
