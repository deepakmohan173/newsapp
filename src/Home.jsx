import React, { useEffect, useState } from "react";
import Blog from "./components/Blog";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/news?query=java")
      .then((res) => {
        // console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-12 text-center">Hot News</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Blog
                imageurl={blog.urlToImage}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
