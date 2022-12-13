import React from "react";
// import Link
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className='flex'>
      {/* image */}
      <Link
        to={`/product/${id}`}
        className='flex items-center min-h-[150px] w-full'
      >
        <img className='max-w-[80px]' src={image} alt={title} />
      </Link>
    </div>
  );
};

export default CartItem;
