import { useRouter } from "next/router";
import React from "react";

const Alert = () => {
  const router = useRouter();

  return (
    <div>
      <div className="  z-50 fixed left-10 right-10 bottom-24 sm:left-1/2 transform sm:-translate-x-1/2  sm:right-auto  bg-slate-100 py-2 rounded-xl shadow-xl font-medium px-4 text-black flex space-x-2 items-center justify-between  ">
        <p>Item added to cart</p>{" "}
        <div
          onClick={() => router.push("/cart")}
          className=" cursor-pointer bg-black px-2 py-1 text-white rounded-md"
        >
          Go to Cart
        </div>
      </div>
    </div>
  );
};

export default Alert;
