import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useUserContext } from "../context/userContext";
import data from "../data.json"
const Header = () => {
  console.log(data);
  const { page, setPage } = useUserContext();
  console.log(page);
  return (
    <>
      <div className=" h-28 px-3 sm:px-5 flex justify-between items-center">
        <div className=" hidden text-xl sm:flex items-center space-x-1 font-semibold">
          <img className=" w-10" src="images/logo.png" alt="" />
          <p className="">ecommerce.</p>
        </div>
        <div className=" hidden  text-lg  font-medium sm:flex space-x-4">
          <div className=" cursor-pointer">home</div>
          <div className=" cursor-pointer">collections</div>
          <div className=" cursor-pointer">account</div>
        </div>
        <div className=" w-full sm:w-auto py-3 p-2 space-x-2 flex items-center rounded-2xl drop-shadow-xl hover:drop-shadow-xl transition-all   bg-white">
          <FiSearch />
          <input
            className=" outline-none"
            placeholder="search products.."
            type="text"
          />
        </div>
      </div>
      <div className=" sm:hidden fixed  left-5 right-5 bg-white h-16 rounded-xl drop-shadow-2xl bottom-5  ">
        <div className=" z-50 w-full h-full text-black text-2xl flex items-center justify-between px-2">
          <div
            onClick={() => setPage("home")}
            className={`flex space-x-2 ${
              page === "home" ? "bg-slate-100" : ""
            }   p-3 rounded-xl transition-all `}
          >
            <GrHomeRounded />
            <p
              className={`transition-all text-base font-semibold ${
                page === "home" ? "block" : "hidden"
              }`}
            >
              Home
            </p>
          </div>
          <div
            onClick={() => setPage("cart")}
            className={` transition-all flex space-x-2 ${
              page === "cart" ? "bg-slate-100" : ""
            }   p-3 rounded-xl`}
          >
            <AiOutlineShoppingCart />
            <p
              className={` transition-all text-base font-semibold ${
                page === "cart" ? "block" : "hidden"
              }`}
            >
              Cart
            </p>
          </div>
          <div
            onClick={() => setPage("collections")}
            className={` transition-all flex space-x-2 ${
              page === "collections" ? "bg-slate-100" : ""
            }   p-3 rounded-xl`}
          >
            <BsCollection />
            <p
              className={` transition-all text-base font-semibold ${
                page === "collections" ? "block" : "hidden"
              }`}
            >
              Collections
            </p>
          </div>
          <div
            onClick={() => setPage("account")}
            className={` transition-all flex space-x-2 ${
              page === "account" ? "bg-slate-100" : ""
            }   p-3 rounded-xl`}
          >
            <BsPerson />
            <p
              className={` transition-all text-base font-semibold ${
                page === "account" ? "block" : "hidden"
              }`}
            >
              Account
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
