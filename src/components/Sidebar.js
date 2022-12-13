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
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  fixed top-0 w-full bg-white  h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex justify-between items-center py-6 border-b '>
        <div className='uppercase text-sm font-semibold '>Shopping Bag (0)</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className='flex justify-center items-center cursor-pointer w-8 h-8'
        >
          <AiOutlineCloseSquare className='text-2xl' />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
