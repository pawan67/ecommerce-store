import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useUserContext } from "../context/userContext";
import data from "../data.json";
import { useRouter } from "next/router";
import SearchedResults from "./SearchedResults";
import { useTheme } from "next-themes";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { isSearch, setIsSearch } = useUserContext();

  const { page, setPage } = useUserContext();
  const router = useRouter();
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchInput);

    const filteredData = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
    console.log(filteredResults);
  };
  useEffect(() => {
    if (searchInput == "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  });
  return (
    <div className=" relative z-50">
      <div className=" z-50 h-28 px-3 sm:px-5 flex justify-between items-center">
        <div
          onClick={() => router.push("/")}
          className=" hidden cursor-pointer  text-xl sm:flex items-center space-x-1 font-semibold"
        >
          <img className=" -ml-1 w-14 sm:w-10" src="images/logo.png" alt="" />

          <p className=" hidden sm:block">ecommercee.</p>
        </div>
        <div className=" hidden  text-lg items-center  font-semibold sm:flex space-x-5">
          <div
            onClick={() => {
              router.push("/");
              setPage("home");
            }}
            className={`cursor-pointer ${
              page === "home"
                ? "bg-gray-900 dark:bg-gray-300 dark:text-black text-gray-100 px-3 py-1 rounded-xl shadow-lg"
                : ""
            } `}
          >
            Home
          </div>
          <div
            onClick={() => {
              router.push("/collections");
              setPage("collection");
            }}
            className={`cursor-pointer ${
              page === "collection"
                ? "bg-gray-900 dark:bg-gray-300 dark:text-black text-gray-100 px-3 py-1 rounded-xl shadow-lg"
                : ""
            } `}
          >
            Collections
          </div>
          <div
            onClick={() => {
              router.push("/cart");
              setPage("cart");
            }}
            className={`cursor-pointer ${
              page === "cart"
                ? "bg-gray-900 dark:bg-gray-300 dark:text-black text-gray-100 px-3 py-1 rounded-xl shadow-lg"
                : ""
            } `}
          >
            Cart
          </div>
          <div
            onClick={() => {
              router.push("/account");
              setPage("account");
            }}
            className={`cursor-pointer ${
              page === "account"
                ? "bg-gray-900 dark:bg-gray-300 dark:text-black text-gray-100 px-3 py-1 rounded-xl shadow-lg"
                : ""
            } `}
          >
            Account
          </div>
        </div>
        <div className=" w-full   sm:ml-3 ml-0 px-5 sm:px-3 sm:w-auto py-3 p-2 space-x-2 flex items-center rounded-2xl drop-shadow-xl hover:drop-shadow-xl   bg-white dark:bg-[#3b3b3b]">
          <FiSearch />
          <input
            onChange={(e) => searchItems(e.target.value)}
            className=" outline-none"
            placeholder="search products.."
            type="text"
          />
          <IoCloseOutline
            onClick={() => setSearchInput("")}
            className={` ${isSearch ? "" : "hidden"} text-xl`}
          />
        </div>
        <div className=" bg-white shadow-xl active:shadow-2xl cursor-pointer text-2xl text-black dark:text-white dark:bg-[#3b3b3b]  rounded-full  p-2 ml-3 sm:ml-0 ">
          {theme === "light" ? (
            <MdOutlineDarkMode onClick={() => setTheme("dark")} />
          ) : (
            <MdOutlineLightMode onClick={() => setTheme("light")} />
          )}
        </div>
      </div>
      <div className=" sm:hidden fixed  left-5 right-5 bg-white dark:bg-[#1d1c1c]  h-16 rounded-3xl drop-shadow-2xl   bottom-5  ">
        <div className="   z-50 w-full h-full  text-2xl flex items-center justify-between px-2 dark:text-white text-black">
          <div
            onClick={() => {
              router.push("/");
              setPage("home");
            }}
            className={` flex space-x-2 ${
              page === "home" ? "bg-slate-200 dark:bg-gray-400" : ""
            }   p-3 rounded-2xl transition-all `}
          >
            <RiHomeLine />
            <p
              className={`transition-all text-base font-semibold ${
                page === "home" ? "block" : "hidden"
              }`}
            >
              Home
            </p>
          </div>

          <div
            onClick={() => {
              router.push("/collections");
              setPage("collection");
            }}
            className={` transition-all flex space-x-2 ${
              page === "collection" ? "bg-slate-200 dark:bg-gray-400" : ""
            }   p-3 rounded-2xl`}
          >
            <BsCollection />
            <p
              className={` transition-all text-base font-semibold ${
                page === "collection" ? "block" : "hidden"
              }`}
            >
              Collections
            </p>
          </div>
          <div
            onClick={() => {
              router.push("/cart");
              setPage("cart");
            }}
            className={` transition-all flex space-x-2 ${
              page === "cart" ? "bg-slate-200 dark:bg-gray-400" : ""
            }   p-3 rounded-2xl`}
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
            onClick={() => {
              router.push("/account");
              setPage("account");
            }}
            className={` transition-all flex space-x-2 ${
              page === "account" ? "bg-slate-200 dark:bg-gray-400" : ""
            }   p-3 rounded-2xl`}
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
      {isSearch ? <SearchedResults data={filteredResults} /> : ""}
    </div>
  );
};

export default Header;
