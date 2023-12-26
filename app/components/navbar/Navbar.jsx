"use client";
import Profile from "./Profile";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { LuMessageSquare } from "react-icons/lu";
import { GoBell } from "react-icons/go";
import { useContext } from "react";
import { Context } from "@/app/context/ContextProvider";

export default function Navbar() {
  const { handleSideBar, openSidebar } = useContext(Context);
  return (
    <>
      <div
        className={`flex text-cyan-400 justify-between py-3 px-8 
      items-center bg-[#F9F9F9] w-full h-14 z-50 ${
        openSidebar ? "pl-[215px] md:pl-[325px]" : ""
      }`}
      >
        <div className="left flex text-xl gap-4 items-center">
          <span onClick={handleSideBar}>
            <RxHamburgerMenu className=" cursor-pointer " />
          </span>
          <CiSearch className=" cursor-pointer" />
        </div>
        <div className="right flex text-xl gap-4 items-center">
          <BsCart2 className=" cursor-pointer" />
          <LuMessageSquare className=" cursor-pointer" />
          <GoBell className=" cursor-pointer" />
          <Profile className=" cursor-pointer" />
        </div>
      </div>
    </>
  );
}
