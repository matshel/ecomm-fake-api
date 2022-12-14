import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

// import react icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product data
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='relative border border-[#e4e4e4] h-[300px] mb-4 overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='flex justify-center items-center mx-auto w-[200px]'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-0 right-0 lg:-right-11 lg:group-hover:right-0 flex flex-col justify-center items-center gap-y-2 p-2 lg:opacity-0 opacity-100 lg:group-hover:opacity-100 transition-all'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
              <BsPlus className='text-3xl ' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='flex justify-center items-center w-12 h-12 bg-white text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div className='text-sm capitalize text-gray-500 mb-1'> {category} </div>
      <Link to={`/product/${id}`}>
        <h2 className='font-semibold mb-1'> {title} </h2>
      </Link>
      <div className='font-semibold'>${price} </div>
    </div>
  );
};

export default Product;
