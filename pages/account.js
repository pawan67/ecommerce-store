import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/SmallComponents/SignUp";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import SignIn from "../components/SmallComponents/SignIn";
import { useUserContext } from "../context/userContext";
import AccountPage from "../components/AccountPage";
const Account = () => {
  const { isSignUp, setSignUp } = useUserContext();
  const { page, setPage, user } = useUserContext();

  useEffect(() => {
    AOS.init();
    setPage("account");
  });
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommercee - Online shopping website</title>
      </Head>
      <div className=" h-screen  w-screen     bg-[#ebeaef]">
        <div className=" max-w-7xl  mx-auto px-3 sm:px-5">
          <Header />
          {user ? (
            <AccountPage />
          ) : (
            <div className=" mt-10 md:mt-32 md:space-x-5 flex justify-center items-center">
              <img
                className=" hidden md:block w-80"
                src="images/register.svg"
                alt=""
              />
              {isSignUp ? <SignUp /> : <SignIn />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
