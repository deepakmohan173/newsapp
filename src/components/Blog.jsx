import React from "react";

const Blog = (props) => {
  return (
    <div class="mb-12 lg:mb-0">
      <div
        class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
        style={{ backgroundPosition: "50%" }}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={props.imageurl} class="w-full" />
        <a href="#!">
          <div
            class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
          ></div>
        </a>
      </div>
      <h5 class="text-lg font-bold mb-3">{props.title}</h5>

      <p class="text-gray-500  ">{props.description}</p>
    </div>
  );
};

export default Blog;
