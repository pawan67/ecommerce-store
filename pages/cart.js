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
// ..
function Cart() {
  useEffect(() => {
    AOS.init();
  });
  const items = useSelector(selectItems);
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommerce - Online shopping website</title>
      </Head>
      <div className="   w-screen    bg-[#ebeaef]">
        <div className=" max-w-7xl mx-auto px-3 sm:px-5">
          <Header />
          <img data-aos="fade-down" className=" rounded-xl" src="banners/cartBanner.png" alt="" />
          <CartProducts data={items} />
          {items.length === 0 ? (
            <div className=" text-center mt-10">
              No Item in cart go to{" "}
              <span
              data-aos-delay="300"
              data-aos="zoom-out"
                onClick={() => router.push("/")}
                className=" cursor-pointer ml-3 bg-black text-gray-50 px-4 py-2 rounded-md"
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
