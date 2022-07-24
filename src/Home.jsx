import React, { useEffect, useRef, useState } from "react";
import Blog from "./components/Blog";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  // const [ loading, setLoading ] = useState( true );
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

  function SearchBar() {
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      const query = inputRef.current.value;
      axios
        .get("http://localhost:8080/news?query=" + query)
        .then((res) => {
          setSearchResult(res.data);
          console.log(searchResult);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="m-24">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              ref={inputRef}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-blue-400"
              placeholder="Search News"
              required
            ></input>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div>
      <SearchBar />
      <div className="hidden">
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
