import React from "react";
import Header from "./Header";

const SearchedResults = ({ data }) => {
  return (
    <div  className=" drop-shadow-md absolute rounded-xl overflow-scroll z-10 left-3 right-3 sm:left-auto  p-5 sm:w-[400px] sm:right-5 overflow-y-scroll overflow-x-hidden max-h-[700px] -mt-3  bg-white ">
      {data.map((res) => {
        return (
          <div key={res.id} className=" py-5   border-b min-h-20 ">
            <div className="flex items-center space-x-5 ">
              <img className=" w-14" src={res.image} alt="" />
              <div className=" text-base font-semibold line-clamp-2">
                {res.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedResults;
