import React, { useState } from "react";
import share from "../asset/images/share.png";
import copy from "../asset/images/copy.png";
import save from "../asset/images/bookmark.png";
import saved from "../asset/images/bookmark (1).png";

import {
  EmailIcon,
  EmailShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import axios from "axios";

const Blog = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(props.isSaved);
  const token = "Bearer " + localStorage.getItem("Token");
  return (
    <div className=" bg-white shadow-lg p-3 rounded-lg">
      <div className="mb-12 h-full flex flex-col justify-between lg:mb-0 ">
        <div
          className="w-full shadow-lg rounded-lg relative overflow-hidden mb-6"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <img src={props.urlToImage} className="w-full h-64" alt={props.title} />
          <a rel="noopener noreferrer" target="_blank" href={props.url}>
            <div
              className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </div>
        <h5 className="text-lg font-bold mb-3">{props.title}</h5>
        <p className="text-gray-500 line-clamp-3 ">{props.description}</p>
        <div className="flex justify-start gap-7 pb-4">
          <img
            src={share}
            className="h-5 w-5 mt-4 cursor-pointer"
            alt="share"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isSaved ? (
            <img
              src={saved}
              alt="savefill"
              onClick={() => {
                setIsSaved(!isSaved);
                axios.delete("http://localhost:8080/feed/delete",{
                  headers: {"Authorization":token},
                  data: props.url,
                });
              }}
              className="h-5 w-5 mt-4 cursor-pointer"
            />
          ) : (
            <img
              src={save}
              alt="save"
              className="h-5 w-5 mt-4 cursor-pointer"
              onClick={() => {
                setIsSaved(!isSaved);
                axios.put("http://localhost:8080/feed/save",{
                  username: localStorage.getItem("Username"),
                  news: props
                },{
                  headers: {"Authorization": token}
                });
              }}
            />
          )}
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } z-30 w-full h-full absolute top-0 left-0 flex flex-col items-center bg-opacity-70 bg-black justify-start pt-52`}
        >
          <div
            className={`  rounded-2xl  border-black  w-3/12 bg-white shadow-slate-400 h-56`}
          >
            <div className="flex justify-between p-5">
              <h3 className=" font-euclid_medium m-2 ">Share this article</h3>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-700  text-white text-sm font-euclid_medium px-5 py-3 rounded-xl"
              >
                Close
              </button>
            </div>
            <div className="flex flex-wrap justify-around items-center h-40 rounded-xl bg-white">
              <TwitterShareButton
                url={props.url}
                title={`Hey, check out this awesome blog on ${props.title} \n`}
              >
                <TwitterIcon size={44} round />
              </TwitterShareButton>
              <WhatsappShareButton
                url={props.url}
                title={`Hey, check out this awesome blog on ${props.title} \n`}
                className="Demo_some-network_share-button"
              >
                <WhatsappIcon size={44} round />
              </WhatsappShareButton>
              <EmailShareButton
                url={props.url}
                subject={props.title}
                body={`Hey, check out this awesome blog on ${props.title} \n`}
                className="Demo_some-network_share-button"
              >
                <EmailIcon size={44} round />
              </EmailShareButton>
              <div className="bg-slate-300 p-4  rounded-full">
                <img
                  src={copy}
                  className="h-5 w-5"
                  alt=""
                  onClick={() => navigator.clipboard.writeText(props.url)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
