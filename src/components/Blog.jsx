import React from "react";

const Blog = (props) => {
  return (
    <div className="mb-12 lg:mb-0 ">
      <div
        className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
        style={{ backgroundPosition: "50%" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={props.imageurl} className="w-70 h-60 object-center" />
        <a href="#!">
          <div
            className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </div>
      <h5 className="text-lg font-bold mb-3">{props.title}</h5>

      <p className="text-gray-500 line-clamp-3  h-60">{props.description}</p>
    </div>
  );
};

export default Blog;
