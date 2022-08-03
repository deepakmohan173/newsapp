import React from "react";
import { useRef } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    axios
      .get("http://localhost:8080/news?query=" + query)
      .then((res) => {
        props.setSearchResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Back = ({ state, className }) => {
    return (
      <svg
        className={"w-5 text-gray-300 cursor-pointer" + className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        onClick={() => {
          state([]);
          inputRef.current.value = "";
        }}
      >
        <path
          className="bg-gray-400"
          d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
        />
      </svg>
    );
  };

  return (
    <div className="xl:mx-32 mx-8 mt-24  flex  ">
      <Back
        className={props.searchResult.length === 0 ? " hidden" : ""}
        state={props.setSearchResult}
      />
      <form className="w-full mx-8 " onSubmit={handleSubmit}>
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
            autoComplete="off"
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
};

export default SearchBar;
