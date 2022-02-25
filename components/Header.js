import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { useUserContext } from "../context/userContext";
import data from "../data.json";
import { useRouter } from "next/router";
import SearchedResults from "./SearchedResults";
const Header = () => {
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
    console.log(isSearch);
  });
  return (
    <div className=" relative z-50">
      <div className=" z-50 h-28 px-3 sm:px-5 flex justify-between items-center">
        <div
          onClick={() => router.push("/")}
          className=" cursor-pointer  text-xl sm:flex items-center space-x-1 font-semibold"
        >
          <img className=" -ml-1 w-14 sm:w-10" src="images/logo.png" alt="" />

          <p className=" hidden sm:block">ecommerce.</p>
        </div>
        <div className=" hidden  text-lg  font-medium sm:flex space-x-4">
          <div className=" cursor-pointer">home</div>
          <div className=" cursor-pointer">collections</div>
          <div className=" cursor-pointer">account</div>
        </div>
        <div className=" w-full ml-3 sm:ml-0 px-5 sm:px-3 sm:w-auto py-3 p-2 space-x-2 flex items-center rounded-2xl drop-shadow-xl hover:drop-shadow-xl transition-all   bg-white">
          <FiSearch />
          <input
            onChange={(e) => searchItems(e.target.value)}
            className=" outline-none"
            placeholder="search products.."
            type="text"
          />
        </div>
      </div>
      <div className=" sm:hidden fixed  left-5 right-5 bg-white  h-16 rounded-3xl drop-shadow-2xl  bottom-5  ">
        <div className="   z-50 w-full h-full text-black text-2xl flex items-center justify-between px-2">
          <div
            onClick={() => setPage("home")}
            className={`flex space-x-2 ${
              page === "home" ? "bg-slate-200" : ""
            }   p-3 rounded-2xl transition-all `}
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
            onClick={() => setPage("collections")}
            className={` transition-all flex space-x-2 ${
              page === "collections" ? "bg-slate-200" : ""
            }   p-3 rounded-2xl`}
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
            onClick={() => setPage("cart")}
            className={` transition-all flex space-x-2 ${
              page === "cart" ? "bg-slate-200" : ""
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
            onClick={() => setPage("account")}
            className={` transition-all flex space-x-2 ${
              page === "account" ? "bg-slate-200" : ""
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
