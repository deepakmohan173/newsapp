import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useStoreState } from "pullstate";
import { LoginStore } from "../store/LoginStore";
import avatar from "../asset/images/avatar.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const isLoggedin = useStoreState(LoginStore, (s) => s.isLoggedIn);
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Token");
    LoginStore.update((s) => {
      s.isLoggedIn = false;
    });
    navigate("/login");
  };

  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0 font-euclid_regular z-10">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <span className="text-3xl font-euclid_medium  mr-1 pt-2">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            The News App
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            <Link to="/">
              <li className="md:ml-8 text-xl md:my-0 my-7">Home</li>
            </Link>
            <Link to="/saved">
              <li
                className={
                  "md:ml-8 text-xl md:my-0 my-7 " + (isLoggedin ? "" : "hidden")
                }
              >
                Saved
              </li>
            </Link>
            <Link to="/login">
              <li
                className={
                  "md:ml-8 text-xl md:my-0 my-7 " + (isLoggedin ? "hidden" : "")
                }
              >
                Login
              </li>
            </Link>
            <li
              className={
                "md:ml-8 text-xl md:my-0 my-7 cursor-pointer " +
                (isLoggedin ? "" : "hidden")
              }
              onClick={onLogout}
            >
              <img src={avatar} className="rounded-full h-8 w-8" />
              Logout
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
