import React, { useContext, useState, useEffect } from "react";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

// import react icons
import { BsBag } from "react-icons/bs";

// import Link
import { Link } from "react-router-dom";

// import logo
import Logo from "../assets/images/logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className='flex items-center justify-between container mx-auto h-full'>
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className='w-[40px]' src={Logo} alt='logo' />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='relative flex cursor-pointer '
        >
          <BsBag className='text-2xl' />
          <div className='absolute flex justify-center items-center bg-red-500 -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full '>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
