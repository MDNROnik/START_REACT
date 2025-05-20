import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import NewsCardDetails from "../Components/NewsCardDetails";
import RightComponents from "../Components/RightComponents";

const NewsLayout = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <nav className="bg-gray-100 py-3">
        <NavBar />
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsCardDetails news={news}></NewsCardDetails>
        </section>
        <aside className="col-span-3">
          <RightComponents></RightComponents>
        </aside>
      </main>
    </div>
  );
};

export default NewsLayout;
