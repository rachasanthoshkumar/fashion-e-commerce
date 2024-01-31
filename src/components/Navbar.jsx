import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="w-full h-[50px] fixed top-[34px] sm:top-[44px] z-50 bg-white sm:w-full sm:h-[68px] flex items-center justify-between px-5">
      <div className="flex items-center gap-4">
        <div className="flex items-center mt-1 sm:hidden ">
          <IoMenuOutline size={25}/>
        </div>
        <h2 className="text-2xl font-bold">CEIN.</h2>
        <ul className="hidden sm:flex items-center gap-9">
          <li className="text-sm">Shop</li>
          <li className="text-sm">New Arrivals</li>
          <li className="text-sm">Sales</li>
          <li className="text-sm">Journal</li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <CiSearch />
          <p className="hidden sm:block">Stores</p>
        </div>
        <div className="flex items-center gap-2">
          <RiAccountCircleLine />
          <p></p>
        </div>
        <div className="flex items-center gap-1">
          <CiHeart />
          <p>0</p>
        </div>
        <div className="flex items-center gap-1">
          <IoBagOutline />
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
