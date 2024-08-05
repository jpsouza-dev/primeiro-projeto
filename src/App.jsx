import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Article } from "./components/Article/Article";
import { Audio } from "react-loader-spinner";
import axios from "axios";

// import { Counter } from "./components/Counter/Counter";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/?format=json"
      );
      const newsData = response.data.results;
      console.log(newsData);
      setNews(newsData);
    }
    loadNews();
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.newsSite}
                description={article.summary}
                thumbnail={article.image_url}
              ></Article>
            );
          })
        )}
      </section>
    </>
  );
}
export default App;
