"use client";
import Profile from "./Profile";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { GoBell } from "react-icons/go";

import { useContext, useState } from "react";
import { Context } from "@/app/context/ContextProvider";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { handleSideBar, openSidebar } = useContext(Context);
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart((prevState) => !prevState);
  };

  const textColor = useSelector((state) => state.color.selectedTextColor);
  return (
    <>
      <div
        className={` shadow-md transition-colors sticky top-0 flex 
        dark:bg-[#1E2228] ${textColor}
         justify-between py-3 px-8 
      items-center bg-[#F9F9F9] h-14 z-40 md:pl-[285px] ${
        openSidebar ? "pl-[215px]" : ""
      }`}
      >
        {console.log(textColor)}
        <div className="left flex text-2xl gap-4 items-center">
          <span onClick={handleSideBar}>
            <RxHamburgerMenu className=" cursor-pointer md:hidden block" />
          </span>
          <CiSearch className=" cursor-pointer" />
        </div>
        <div className="right flex text-xl gap-4 items-center">
          <span onClick={handleOpenCart}>
            <BsCart2 className=" cursor-pointer" />
          </span>
          <FiMessageSquare className=" cursor-pointer" />
          <GoBell className=" cursor-pointer" />
          <Profile className=" cursor-pointer" />
        </div>
      </div>
    </>
  );
}
