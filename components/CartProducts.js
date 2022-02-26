import React from "react";
import CartProduct from "./SmallComponents/CartProduct";
import Products from "./SmallComponents/Products";

const CartProducts = ({ data }) => {
  return (
    <div>
      <div>
        {data.map(
          ({ id, category, description, title, image, price, rating }) => (
            <CartProduct
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

export default CartProducts;
