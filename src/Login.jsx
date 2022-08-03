import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField } from "./components/InputField";
import { LoginStore } from "./store/LoginStore";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [signupForm, setsignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/login", {
        username: signupForm.username,
        password: signupForm.password,
      })
      .then((res) => {
        localStorage.setItem("Token", res.data["Token"]);
        LoginStore.update((s) => {
          s.isLoggedIn = true;
        });
        console.log(localStorage.getItem("Token"));
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/signup", signupForm)
      .then((res) => {
        localStorage.setItem("Token", res.data["Token"]);
        LoginStore.update((s) => {
          s.isLoggedIn = true;
        });
        console.log(localStorage.getItem("Token"));
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  };

  return (
    <div
      className="flex mt-12 items-center justify-center font-euclid_regular "
      style={{ height: "calc(100vh - 48px)" }}
    >
      <form
        className="w-1/3 shadow-xl p-8 rounded-lg border-2 border-solid border-gray-300"
        onSubmit={isSignin === true ? onLogin : onSignup}
      >
        <h1 className="text-center mb-2 font-euclid_medium text-2xl">
          {isSignin === true ? "Sign In" : "Sign Up"}{" "}
        </h1>
        <InputField
          className={isSignin === true ? "hidden" : ""}
          name="First Name"
          label="firstName"
          type="text"
          signupForm={signupForm}
          setsignupForm={setsignupForm}
          required={!isSignin}
        />
        <InputField
          className={isSignin === true ? "hidden" : ""}
          name="Last Name"
          label="lastName"
          type="text"
          signupForm={signupForm}
          setsignupForm={setsignupForm}
          required={!isSignin}
        />
        <InputField
          name={isSignin === true ? "Email or Username" : "Username"}
          name={isSignin === true ? "Email or Username" : "Email"}
          label="username"
          type="text"
          signupForm={signupForm}
          setsignupForm={setsignupForm}
        />
        <InputField
          name="Email"
          label="email"
          type="email"
          className={isSignin === true ? "hidden" : ""}
          signupForm={signupForm}
          setsignupForm={setsignupForm}
          required={!isSignin}
        />
        <InputField
          name="Password"
          label="password"
          type="password"
          signupForm={signupForm}
          setsignupForm={setsignupForm}
        />
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
