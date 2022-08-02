import React from "react";
import { useEffect } from "react";
import { LoginStore } from "../store/LoginStore";

const Saved = (props) => {
  useEffect(() => {
    
  
  }, [])
  
  const SavedArticle = (props) => {
    return (
      <div className="flex flex-wrap mb-6">
        <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
          <div
            className=" relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/city/018.jpg"
              className="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
          <h5 className="text-lg font-bold mb-3">Welcome to California</h5>

          <p className="text-gray-500 mb-6">
            <small>
              Published <u>13.01.2022</u> by Anna Maria Doe
            </small>
          </p>
          <p className="text-gray-500">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-12 text-center font-euclid_bold ">
            Saved articles
          </h2>
          <SavedArticle />
          {/* {props.articles.map((article) => <SavedArticle/>)} */}
        </section>
      </div>
    </div>
  );
};

export default Saved;
