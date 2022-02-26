import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../context/userContext";

const SignIn = () => {
  const { isSignUp, setSignUp } = useUserContext();

  return (
    <div>
      {" "}
      <div
        data-aos="flip-right"
        className=" w-[90%] mx-auto  md:w-[400px] p-10 rounded-2xl drop-shadow-sm bg-white"
      >
        <h1 className=" font-bold text-xl">Sign In</h1>
        <div className=" space-y-5 mt-7">
          <input
            className=" w-full bg-gray-200 p-3 rounded-xl"
            type="text"
            placeholder="Email"
          />
          <input
            className=" w-full bg-gray-200 p-3 rounded-xl"
            type="password"
            placeholder="Password"
          />
          <div className=" cursor-pointer active:scale-95 flex justify-center items-center space-x-2 w-full bg-gray-100 drop-shadow-md font-medium p-3 rounded-xl">
            <FcGoogle className=" text-xl" /> <p>Sign in with Google</p>
          </div>
          <button className=" transition-all active:scale-95 hover:bg-gradient-to-l hover:from-black hover:to-yellow-500 float-right bg-gray-900 text-white p-3 rounded-xl px-5">
            Sign In
          </button>
        </div>
        <p className=" mt-24 text-center  ">
          New to ecommerce.{" "}
          <span
            onClick={() => setSignUp(true)}
            className=" cursor-pointer underline"
          >
            Register
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
