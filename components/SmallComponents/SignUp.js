import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../context/userContext";

const SignUp = () => {
  const { isSignUp, setSignUp, registerUser, signInWithGoogle } =
    useUserContext();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };
  return (
    <div
      data-aos="fade-up"
      className=" w-[90%]  md:w-[400px] p-10 rounded-2xl drop-shadow-sm bg-white dark:bg-[#302f2f]"
    >
      <h1 className=" font-bold text-xl">Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className=" space-y-5 mt-7">
          <input
            ref={nameRef}
            className=" w-full bg-gray-200 p-3 rounded-xl"
            type="text"
            placeholder="Name"
          />
          <input
            ref={emailRef}
            className=" w-full bg-gray-200 p-3 rounded-xl"
            type="text"
            placeholder="Email"
          />
          <input
            ref={passwordRef}
            className=" w-full bg-gray-200 p-3 rounded-xl"
            type="password"
            placeholder="Password"
          />
          <div onClick={signInWithGoogle} className=" cursor-pointer active:scale-95 flex justify-center items-center space-x-2 w-full bg-gray-100 drop-shadow-md dark:text-black font-medium p-3 rounded-xl">
            <FcGoogle className=" text-xl" /> <p>Sign up with Google</p>
          </div>
          <button
            type="submit"
            className=" transition-all active:scale-95 hover:bg-gradient-to-l hover:from-black hover:to-yellow-500 float-right dark:bg-[#191919] bg-gray-900 text-white p-3 rounded-xl px-5"
          >
            Register
          </button>
        </div>
      </form>
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
