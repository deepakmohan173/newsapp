import React from "react";
import { useState } from "react";

const Login = () => {
  const [isSignin, setIsSignin] = useState(false);

  const InputField = (props) => {
    return (
      <div className="mb-6 ">
        <label
          htmlFor={props.label}
          className={
            " mb-2 text-sm font-medium text-gray-900 " + props.className
          }
        >
          {props.name}
        </label>
        <input
          autoComplete="off"
          type={props.type}
          id={props.label}
          className={
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
            props.className
          }
          required
        />
      </div>
    );
  };

  return (
    <div className="flex h-screen items-center justify-center font-euclid_regular ">
      <form className="w-1/3 shadow-xl p-8 rounded-lg border-2 border-solid border-gray-300">
        <h1 className="text-center mb-2 font-euclid_medium text-2xl">
          {" "}
          {isSignin === true ? "Sign In" : "Sign Up"}{" "}
        </h1>
        <InputField
          className={isSignin === true ? "hidden" : ""}
          name="Full Name"
          label="full name"
          type="text"
        />
        <InputField
          name="Username"
          label="username"
          type="text"
          className={isSignin === true ? "hidden" : ""}
        />
        <InputField name="Email" label="email" type="email" />
        <InputField name="Password" label="password" type="password" />
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
