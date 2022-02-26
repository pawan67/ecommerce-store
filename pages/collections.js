import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data.json";
import Products from "../components/SmallComponents/Products";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..
const Collections = () => {
  useEffect(() => {
    AOS.init();
  });
  const router = useRouter();
  const [collection, setCollection] = useState("");
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommerce - Online shopping website</title>
      </Head>
      <div className="  w-screen     bg-[#ebeaef]">
        <div className=" max-w-7xl mx-auto px-3 sm:px-5">
          <Header />
          <div className=" mt-5 sm:mt-14">
            <div className=" flex-col  space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row  flex ">
              <div  data-aos="zoom-in">
                <img
                  onClick={() => {
                    router.push("/collections/#collection");
                    setCollection("men");
                  }}
                  className=" cursor-pointer transition-all hover:shadow-2xl rounded-2xl shadow-xl"
                  src="banners/men.png"
                  alt=""
                />
              </div>
              <div data-aos-delay="100" data-aos="zoom-in">
                <img
                  onClick={() => {
                    router.push("/collections/#collection");
                    setCollection("women");
                  }}
                  className="transition-all hover:shadow-2xl  cursor-pointer rounded-2xl shadow-xl"
                  src="banners/women.png"
                  alt=""
                />
              </div>
            </div>
            <div className="sm:space-y-0 mt-5 flex-col  space-y-5 sm:space-x-5 sm:flex-row  flex ">
              <div data-aos-delay="200" data-aos="zoom-in">
                <img
                  onClick={() => {
                    router.push("/collections/#collection");
                    setCollection("electronics");
                  }}
                  className="transition-all hover:shadow-2xl   cursor-pointer rounded-2xl shadow-xl"
                  src="banners/electronics.png"
                  alt=""
                />
              </div>
              <div data-aos-delay="300" data-aos="zoom-in">
                <img
                  onClick={() => {
                    router.push("/collections/#collection");
                    setCollection("jewelery");
                  }}
                  className="transition-all hover:shadow-2xl   cursor-pointer rounded-2xl shadow-xl"
                  src="banners/jewelery.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {collection && (
            <div
              id="collection"
              className=" text-center text-xl font-semibold m-10"
            >
              Only showing{" "}
              <span className=" uppercase font-bold"> {collection}</span>
            </div>
          )}
          <div className=" flex mt-3  flex-wrap gap-5 sm:gap-7 justify-center  ">
            {collection === "men"
              ? data
                  .slice(0, 4)
                  .map(
                    ({
                      id,
                      category,
                      description,
                      title,
                      image,
                      price,
                      rating,
                    }) => (
                      <Products
                        key={id}
                        category={category}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                        rating={rating}
                      />
                    )
                  )
              : ""}
            {collection === "jewelery"
              ? data
                  .slice(5, 8)
                  .map(
                    ({
                      id,
                      category,
                      description,
                      title,
                      image,
                      price,
                      rating,
                    }) => (
                      <Products
                        key={id}
                        category={category}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                        rating={rating}
                      />
                    )
                  )
              : ""}
            {collection === "electronics"
              ? data
                  .slice(9, 14)
                  .map(
                    ({
                      id,
                      category,
                      description,
                      title,
                      image,
                      price,
                      rating,
                    }) => (
                      <Products
                        key={id}
                        category={category}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                        rating={rating}
                      />
                    )
                  )
              : ""}
            {collection === "women"
              ? data
                  .slice(14, 20)
                  .map(
                    ({
                      id,
                      category,
                      description,
                      title,
                      image,
                      price,
                      rating,
                    }) => (
                      <Products
                        key={id}
                        category={category}
                        title={title}
                        description={description}
                        image={image}
                        price={price}
                        rating={rating}
                      />
                    )
                  )
              : ""}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Collections;
