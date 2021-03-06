import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../context/userContext";

const SignIn = () => {
  const { isSignUp, setSignUp, signInUser, signInWithGoogle } =
    useUserContext();

  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };
  return (
    <div>
      {" "}
      <div
        data-aos="fade-down"
        className=" w-[90%] mx-auto  md:w-[400px] p-10 rounded-2xl drop-shadow-sm  dark:bg-[#302f2f] bg-white"
      >
        <h1 className=" font-bold text-xl">Sign In</h1>
        <form onSubmit={onSubmit}>
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
            <div
              onClick={signInWithGoogle}
              className=" cursor-pointer active:scale-95 flex justify-center items-center space-x-2 w-full bg-gray-100 dark:text-black drop-shadow-md font-medium p-3 rounded-xl"
            >
              <FcGoogle className=" text-xl" /> <p>Sign in with Google</p>
            </div>
            <button
              type="submit"
              className=" transition-all active:scale-95 hover:bg-gradient-to-l hover:from-black hover:to-yellow-500 float-right dark:bg-[#191919] bg-gray-900 text-white p-3 rounded-xl px-5"
            >
              Sign In
            </button>
          </div>
        </form>
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
