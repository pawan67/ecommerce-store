import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useUserContext } from "../../context/userContext";
import { addToBasket } from "../../slices/basketSlice";
import { useRouter } from "next/router";
const Products = ({
  id,
  category,
  description,
  title,
  image,
  price,
  rating,
}) => {
  const { alert, setAlert, productD, setProductD } = useUserContext();

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      category,
      description,
      title,
      image,
      price,
      rating,
    };
    dispatch(addToBasket(product));
    setAlert(true);
  };
  if (alert) {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }
  const router = useRouter();

  return (
    <div className="  cursor-pointer dark:brightness-75  w-[170px] sm:w-72 sm:hover:scale-105 transition-all   p-5 shadow-xl rounded-2xl dark:text-black bg-[#fff] ">
      <p className="  hidden sm:block text-xs">{category}</p>
      <div className=" flex justify-center items-center mb-5 h-32 sm:h-40">
        <img
          onClick={() => router.push(`/${id}`)}
          className="  sm:my-4 mx-auto w-20 sm:w-28"
          src={image}
          alt={title}
        />
      </div>
      <h1 className=" text-xs sm:text-base font-semibold line-clamp-1">
        {title}
      </h1>
      <div className="hidden sm:block">
        <h2 className=" line-clamp-3 text-sm  my-2 text-gray-600 w-[90%]  ">
          {description}
        </h2>
      </div>
      <div className=" flex justify-between mt-2 sm:mt-5">
        <h1 className="text-xs  font-semibold text-gray-900  sm:text-lg  sm:font-bold">
          ₹ {Math.floor(price * 75)}
        </h1>
        <div className=" text-xs sm:text-base flex items-center space-x-2">
          <FcRating />
          <p>{rating.rate}</p>
        </div>
      </div>
      <div
        onClick={addItemToBasket}
        className="text-xs sm:text-sm active:scale-95 bg-black p-2 cursor-pointer text-white text-center  rounded-xl mt-2  sm:mt-3"
      >
        Add to Cart
      </div>
    </div>
  );
};

export default Products;
