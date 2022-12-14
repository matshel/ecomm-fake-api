import React, { useContext } from "react";

// import Link
import { Link } from "react-router-dom";

// import react icons
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

// import components
import CartItem from "../components/CartItem";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  fixed top-0 w-full bg-white  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex justify-between items-center py-6 border-b '>
        <div className='uppercase text-sm font-semibold '>
          Shopping Bag ({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className='flex justify-center items-center cursor-pointer w-8 h-8'
        >
          <AiOutlineCloseSquare className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4 '>
        <div className='flex justify-between items-center w-full '>
          {/* total */}
          <div className='uppercase font-semibold '>
            <span className='mr-2'>Total: </span>${parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className='flex justify-center items-center py-4 cursor-pointer bg-red-500 text-xl text-white w-12 h-12'
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className='flex justify-center items-center w-full p-4 font-medium text-primary bg-gray-200'
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className='flex justify-center items-center w-full p-4 font-medium text-white bg-primary'
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
