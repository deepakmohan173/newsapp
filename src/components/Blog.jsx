import React from "react";

const Blog = (props) => {
  return (
    <div className="mb-12 lg:mb-0 ">
      <div
        className="w-full shadow-lg rounded-lg relative overflow-hidden mb-6"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={props.imageurl} className="w-full h-64" alt={props.title} />
        <a rel="noopener noreferrer" target="_blank" href={props.url}>
          <div
            className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </div>
      <h5 className="text-lg font-bold mb-3">{props.title}</h5>

      <p className="text-gray-500 line-clamp-3 ">{props.description}</p>
    </div>
  );
};

export default Blog;
