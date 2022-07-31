import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { LoginStore } from "./store/LoginStore";

const Login = () => {
  const [isSignin, setIsSignin] = useState(false);
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const onLogin = (e) => {
    e.preventDefault();
    const params = {
      username: usernameRef.current,
      password: passwordRef.current,
    };

    axios
    .post("http://localhost:8080/user/login",params)
    .then((res)=>{
      console.log(res.data);
      // localStorage.setItem("Bearer", res.data["Token"]);
      // LoginStore.update(s => {
      //   s.isLoggedIn = true;
      //   s.username = res.data["Username"];
      // });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const onSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstNameRef.current,
      lastName: lastNameRef.current,
      eamil: emailRef.current,
      username: usernameRef.current,
      password: passwordRef.current,
    };

    axios
    .post("http://localhost:8080/user/signup",JSON.stringify(user))
    .then((res)=>{
      console.log(res.data);
      // localStorage.setItem("Bearer", res.data["Token"]);
      // LoginStore.update(s => {
      //   s.isLoggedIn = true;
      //   s.username = res.data["Username"];
      // });
    })
    .catch((err) => {
      console.log(err);
    });
    }

  return (
    <div className="flex mt-12 items-center justify-center font-euclid_regular " style={{height: "calc(100vh - 48px)"}}>
      <form className="w-1/3 shadow-xl p-8 rounded-lg border-2 border-solid border-gray-300" onSubmit={isSignin === true ? onLogin : onSignup}>
        <h1 className="text-center mb-2 font-euclid_medium text-2xl">
          {isSignin === true ? "Sign In" : "Sign Up"}{" "}
        </h1>
        <InputField
          className={isSignin === true ? "hidden" : ""}
          name="First Name"
          label="first name"
          type="text"
          inputRef={firstNameRef}
        />
        <InputField
          className={isSignin === true ? "hidden" : ""}
          name="Last Name"
          label="last name"
          type="text"
          inputRef={lastNameRef}
        />
        <InputField
          name="Username"
          label="username"
          type="text"
          className={isSignin === true ? "hidden" : ""}
          inputRef={usernameRef}
        />
        <InputField name={isSignin === true ? "Email or Username" : "Email"} label="email" type="email" inputRef={emailRef}/>
        <InputField name="Password" label="password" type="password" inputRef={passwordRef}/>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
        <span className="ml-6">
          {isSignin === true
            ? " Do you have an account? "
            : " Don't have an account? "}
          <span
            onClick={() => setIsSignin(!isSignin)}
            className="text-blue-900 cursor-pointer"
          >
            {" "}
            {isSignin === true ? "Sign Up" : "Sign In"}
          </span>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
