import React, { useEffect, useState } from "react";
import Blog from "./components/Blog";
import axios from "axios";
import SearchBar from "./components/SearchBar";

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const getArticles = (category, location, setBlogs) => {
    let url = "http://localhost:8080/feed?country="+location;
    url = category === null ? url : url + "&category=" + category;
    axios
      .get(url)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    let location = "IN";
    // axios.get(process.env.REACT_APP_LOC_API).then((res) => {
    //   location = res.data["location"]["country"];
    //   console.log(location);
    // })

    getArticles(null, location, setHeadlines);
    getArticles("business", location, setBusiness);
    getArticles("entertainment", location, setEntertainment);
  }, []);

  const ArticleSection = props => {
    return (
    <section className="mt-12 mb-32 text-gray-800 text-center lg:text-left">
    <h2 className="text-4xl font-bold mb-12 text-center">{props.category}</h2>
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {props.blogs.map((blog) => (
        <Blog
          imageurl={blog.urlToImage === null ? "https://via.placeholder.com/150?text=No+Image" : blog.urlToImage}
          title={blog.title}
          description={blog.description}
          key={blog.title}
        />
      ))}
    </div>
    </section>);
  }

  return (
    <div>
<<<<<<< HEAD
      <SearchBar />
      <div
        className={
          loading === true
            ? "hidden"
            : searchResult.length !== 0
            ? "hidden"
            : ""
        }
      >
        <div className="container my-24 px-6 mx-auto pt-7 ">
          <section className="mb-32 text-gray-800 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-12 text-center">Hot News</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Blog
                  imageurl={
                    blog.urlToImage === null
                      ? "https://via.placeholder.com/125?Text= No Image"
                      : blog.urlToImage
                  }
                  title={blog.title}
                  description={blog.description}
                  key={blog.title}
                />
              ))}
            </div>
          </section>
=======
      <SearchBar setLoading={setLoading} setSearchResult={setSearchResult}/>
      <div className="container px-24 mx-auto pt-7">
        <div
          className={
            loading === true
              ? "hidden"
              : searchResult.length !== 0
              ? "hidden"
              : ""
          }
        >
          <ArticleSection category="Hot News 🔥" blogs={headlines}/>
          <ArticleSection category="Entertainment 🎭" blogs={entertainment}/>
          <ArticleSection category="Business 💼" blogs={business}/>
        </div>
        <div
          className={
              searchResult.length !== 0
              ? ""
              : "hidden"
          }
        >
          <ArticleSection category={"Search Results"} blogs={searchResult}/>
>>>>>>> caf5e8893197ba2f71b577aee019a28ea9e586db
        </div>
      </div>
    </div>
  );
};

export default Home;
