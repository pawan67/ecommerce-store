import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../data.json";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FcRating } from "react-icons/fc";
const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const [productData, setData] = useState(data[1]);

  useEffect(() => {
    if (productId) {
      setData(data[productId - 1]);
    }
  }, []);
  console.log(productData);

  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>Ecommercee - Online shopping website</title>
      </Head>
      <div className=" w-screen dark:bg-[#191919]     bg-[#ebeaef]">
        <div className=" max-w-7xl mx-auto px-3 sm:px-5 min-h-screen">
          <Header />
          <div className="  md:mt-20 flex-col  justify-center md:flex-row flex md:space-x-10 ">
            <div className=" mx-auto flex justify-center items-center rounded-xl shadow-xl w-80 h-80 bg-white">
              <img className=" h-60 " src={productData.image} alt="" />
            </div>
            <div className=" px-5 mt-10 md:mt-0 w-full md:w-[800px]">
              <h1 className=" dark:text-black bg-gray-300 inline-block px-4 py-2 rounded-xl text-sm font-semibold">
                {productData.category}
              </h1>
              <h1 className=" mt-4  text-3xl font-semibold">
                {productData.title}
              </h1>
              <p className=" mt-4 md:text-lg">{productData.description}</p>
              <div className=" flex space-x-3  mt-3 items-center">
                <FcRating />
                <p className="  text-lg font-medium ">
                  {productData.rating.rate} Ratings
                </p>
              </div>
              <div className=" flex justify-between mt-10">
                <p className=" font-semibold text-lg">
                  {" "}
                  ₹ {Math.floor(productData.price * 75)}
                </p>
                <div className="dark:text-black bg-gray-300 inline-block px-3 py-2 font-semibold rounded-xl cursor-pointer">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
