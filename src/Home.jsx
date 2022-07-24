import React, { useEffect, useRef, useState } from "react";
import Blog from "./components/Blog";
import axios from "axios";
import {SearchBar} from "./components/SearchBar"

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // let location;
    // axios.get(process.env.REACT_APP_LOC_API).then((res) => {
    //   location = res.data["location"]["country"];
    //   console.log(location);
    // })

    axios
      .get("http://localhost:8080/news?query=java")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SearchBar setLoading={setLoading} setSearchResult={setSearchResult}/>
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
                  imageurl={blog.urlToImage}
                  title={blog.title}
                  description={blog.description}
                  key={blog.title}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
