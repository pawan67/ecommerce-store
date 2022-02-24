import React from "react";
import { FcRating } from "react-icons/fc";
const Products = ({
  id,
  category,
  description,
  title,
  image,
  price,
  rating,
}) => {
  console.log(rating);
  return (
    <div className=" active:scale-[.98] cursor-pointer w-40 sm:w-72 hover:scale-105 transition-all   p-5 shadow-xl rounded-2xl bg-white ">
      <p className=" hidden sm:block text-xs">{category}</p>
      <div className=" mb-5 h-32 sm:h-40">
        <img className=" my-4 mx-auto w-20 sm:w-28" src={image} alt={title} />
      </div>
      <h1 className=" font-semibold line-clamp-1">{title}</h1>
       <div className="hidden sm:block">

        <h2 className=" line-clamp-3 text-sm my-2 text-gray-600 w-[90%]  ">{description}</h2>
       </div>
      <div className=" flex justify-between mt-5">
        <h1 className=" font-semibold text-gray-900  sm:text-lg  sm:font-bold">₹ {Math.floor(price * 75)}</h1>
        <div className=" flex items-center space-x-2">
          <FcRating />
          <p>{rating.rate}</p>
        </div>
      </div>
      <div className=" text-sm bg-black p-2 cursor-pointer text-white text-center  rounded-xl mt-3">
        Add to Cart
      </div>
    </div>
  );
};

export default Products;
