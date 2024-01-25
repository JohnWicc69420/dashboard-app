"use client";
import Profile from "./Profile";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoBell } from "react-icons/go";
import { useContext, useState } from "react";
import { Context } from "@/app/context/ContextProvider";
import { useSelector } from "react-redux";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const { handleSideBar, openSidebar } = useContext(Context);
  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleSetOpenProfile = () => {
    setOpenProfile((prev) => !prev);
  };

  const handleSetOpenNotif = () => {
    setOpenNotif((prev) => !prev);
  };

  const textColor = useSelector((state) => state.color.selectedTextColor);
  const openSettings = useSelector((state) => state.settings.openSettings);
  return (
    <>
      <div
        className={`${
          openSettings ? " brightness-50" : ""
        } shadow-md transition-colors sticky top-0 flex 
        dark:bg-[#1E2228] ${textColor}
         justify-between py-3 px-8 
      items-center bg-[#F9F9F9] h-14 z-40 md:pl-[285px] ${
        openSidebar ? "pl-[215px]" : ""
      }`}
      >
        {console.log(textColor)}
        <div className="left flex text-2xl gap-4 items-center">
          <span onClick={handleSideBar}>
            {openSidebar ? (
              <IoIosCloseCircleOutline className=" cursor-pointer md:hidden block" />
            ) : (
              <RxHamburgerMenu className=" cursor-pointer md:hidden block" />
            )}
          </span>
        </div>
        <div className="right flex text-xl gap-4 items-center">
          <div onClick={handleSetOpenNotif} className="relative">
            <GoBell className=" cursor-pointer" />
            {openNotif && (
              <div className=" absolute">
                <div>yo</div>
              </div>
            )}
          </div>
          <div onClick={handleSetOpenProfile} className="relative">
            <Profile className=" cursor-pointer" />
            {openProfile && (
              <div className=" absolute">
                <div>yo</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
