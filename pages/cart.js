import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartProducts from "../components/CartProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
// ..
function Cart() {
  const { page, setPage } = useUserContext();

  useEffect(() => {
    AOS.init();
    setPage("cart")
  },[]);
  const items = useSelector(selectItems);
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommercee - Online shopping website</title>
      </Head>
      <div className="   w-screen dark:bg-[#191919]   bg-[#ebeaef]">
        <div className=" max-w-7xl mx-auto px-3 sm:px-5">
          <Header />
          <img data-aos="fade-down" className=" mt-5 rounded-xl dark:brightness-75" src="banners/cartBanner.png" alt="" />
          <CartProducts data={items} />
          {items.length === 0 ? (
            <div className=" text-center mt-10">
              No Item in cart go to{" "}
              <span
              data-aos-delay="300"
              data-aos="zoom-out"
                onClick={() => router.push("/")}
                className=" cursor-pointer ml-3 bg-black text-gray-50 dark:bg-gray-200 dark:text-gray-900 px-4 py-2 font-medium rounded-md"
              >
                Home
              </span>
            </div>
          ) : (
            ""
          )}
          {items.length !== 0 ? (
            <div className=" mt-10">
              <h1 className=" text-xl font-semibold">
                Total Items : {items.length}{" "}
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Cart;
