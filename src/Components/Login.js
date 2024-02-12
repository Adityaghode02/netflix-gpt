import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage,seterrorMessage] = useState("");

  const email = useRef();
  const password = useRef();

  const toggleIt = () => {
    setIsLogin(!isLogin);
  };

  const HandleButtonClick = () => {
    //first validate the data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-3/12 mt-44 p-12 bg-black bg-opacity-80 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-5 p-1 ">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password here"
          className="p-2 m-2 w-full bg-gray-700"
        />
        <p className="text-red-400 pl-2 font-bold">{errorMessage}</p>
        <button
          className="p-2 m-2 w-full bg-orange-600"
          onClick={HandleButtonClick}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="pt-8 pl-2 cursor-pointer" onClick={toggleIt}>
          {isLogin
            ? "New to Netflix-gpt ?  sign Up Now"
            : "Already SignUp ? Login Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
