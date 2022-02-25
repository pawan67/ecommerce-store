import React from "react";
import Banner from "./SmallComponents/Banner";
import Products from "./SmallComponents/Products";
import data from "../data.json";
import { useUserContext } from "../context/userContext";
const HomeMain = () => {
  const {isSearch, setIsSearch} = useUserContext()
  return (
    <div className={` overflow-x-hidden transition-all ${isSearch ? " blur-md " : " "}`} >
      <Banner />
      <div className="flex mt-3  flex-wrap gap-7 justify-center ">
        {data.map(
          ({ id, category, description, title, image, price, rating }) => (
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
        )}
      </div>
    </div>
  );
};

export default HomeMain;
