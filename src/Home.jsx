import React, { useEffect, useState } from "react";
import Blog from "./components/Blog";
import axios from "axios";
import SearchBar from "./components/SearchBar";

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [business, setBusiness] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const getArticles = (category, location, setBlogs) => {
    let url = "http://localhost:8080/feed?country=" + location;
    url = category === null ? url : url + "&category=" + category;
    axios
      .get(url)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const username = localStorage.getItem("Username");
    const token = "Bearer " + localStorage.getItem("Token");
    let location = "IN";
    // axios.get(process.env.REACT_APP_LOC_API).then((res) => {
    //   location = res.data["location"]["country"];
    //   console.log(location);
    // })

    getArticles(null, location, setHeadlines);
    getArticles("business", location, setBusiness);
    getArticles("entertainment", location, setEntertainment);
    axios.get("http://localhost:8080/user/"+username+"/saved",{
      headers: {"Authorization": token}
    }).then((res)=>{
      setSavedArticles(res.data);
    })
  }, []);

  const ArticleSection = (props) => {
    return (
      <section className="mt-12 mb-32 text-gray-800 text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {props.category}
        </h2>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {props.blogs.map((blog) => (
            <Blog
            urlToImage={
                blog.urlToImage === null
                  ? "https://via.placeholder.com/150?text=No+Image"
                  : blog.urlToImage
              }
              title={blog.title}
              description={blog.description}
              key={blog.url}
              url={blog.url}
              isSaved={savedArticles.find(article => article.url === blog.url) !== undefined ? true : false}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div>
      <SearchBar
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      <div className=" px-32 pt-7">
        <div className={searchResult.length !== 0 ? "hidden" : ""}>
          <ArticleSection
            className=" font-euclid_bold"
            category="Trending News 🔥"
            blogs={headlines}
          />
          <ArticleSection
            className=" font-euclid_bold"
            category="Entertainment 🎭"
            blogs={entertainment}
          />
          <ArticleSection
            className=" font-euclid_bold"
            category="Business 💼"
            blogs={business}
          />
        </div>
        <div className={searchResult.length !== 0 ? "" : "hidden"}>
          <ArticleSection
            className=" font-euclid_bold"
            category="Search Results"
            blogs={searchResult}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
