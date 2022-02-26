import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../context/userContext";

const SignUp = () => {
  const { isSignUp, setSignUp } = useUserContext();
  return (
    <div
      data-aos="flip-left"
      className=" w-[90%]  md:w-[400px] p-10 rounded-2xl drop-shadow-sm bg-white"
    >
      <h1 className=" font-bold text-xl">Sign Up</h1>
      <div className=" space-y-5 mt-7">
        <input
          className=" w-full bg-gray-200 p-3 rounded-xl"
          type="text"
          placeholder="Name"
        />
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
          <FcGoogle className=" text-xl" /> <p>Sign up with Google</p>
        </div>
        <button className=" transition-all active:scale-95 hover:bg-gradient-to-l hover:from-black hover:to-yellow-500 float-right bg-gray-900 text-white p-3 rounded-xl px-5">
          Register
        </button>
      </div>
      <p className=" mt-24 text-center  ">
        already have account{" "}
        <span
          onClick={() => setSignUp(false)}
          className=" cursor-pointer underline"
        >
          sign in
        </span>{" "}
      </p>
    </div>
  );
};

export default SignUp;
