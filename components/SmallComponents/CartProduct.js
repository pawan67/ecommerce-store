import React from "react";
import { IoMdRemove } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";

const CartProduct = ({
  id,
  category,
  description,
  title,
  image,
  price,
  rating,
}) => {
  return (
    <div className=" space-x-3 bg-[#f4f4f4] drop-shadow-sm rounded-xl my-5 p-3 flex items-center justify-between">
      <div className=" flex space-x-3 sm:space-x-6 items-center">
        <div className=" sm:w-40 sm:h-40  w-20 h-20 flex items-center p-4 justify-center bg-white rounded-xl">
          <img className=" w-20" src={image} alt="" />
        </div>
        <div className=" w-2/4">
          <h1 className=" font-semibold line-clamp-1">{title}</h1>
          <h2 className=" text-sm  line-clamp-2">{description}</h2>
        </div>
      </div>
      <div className="  pr-5">
        <div className="  flex text-xl flex-col  space-y-2">
          <GrFormAdd className=" bg-gray-200 text-2xl rounded-md active:scale-90" />
          <IoMdRemove className=" bg-black text-white text-2xl rounded-md active:scale-90" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
