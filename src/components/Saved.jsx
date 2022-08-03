import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { LoginStore } from "../store/LoginStore";

const Saved = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const unsubscribe = LoginStore.subscribe(s => s.isLoggedIn, (isLoggedIn)=>{
    if(!isLoggedIn) navigate("/");
    });

    const username = localStorage.getItem("Username");
    const token = "Bearer " + localStorage.getItem("Token");
    axios.get("http://localhost:8080/user/"+username+"/saved",{
      headers:{'Authorization': token},
    }).then((res)=>{
      setArticles(res.data);
    })

    return () => {unsubscribe();};
  }, []);

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
              src={props.urlToImage}
              className="w-full"
              alt={props.title}
            />
            <a href={props.url}>
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
          <h5 className="text-lg font-bold mb-3">{props.title}</h5>
          <p className="text-gray-500">
            {props.description}
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
            {articles.length === 0 ? "No Saved articles" : "Saved Articles"}
          </h2>
          {articles.map((article) => <SavedArticle urlToImage={article.urlToImage} url={article.url} title={article.title} description={article.description} key={article.url}/>)}
        </section>
      </div>
    </div>
  );
};

export default Saved;
