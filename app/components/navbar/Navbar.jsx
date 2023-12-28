"use client";
import Profile from "./Profile";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { Context } from "@/app/context/ContextProvider";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Navbar() {
  const { handleSideBar, openSidebar } = useContext(Context);
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  const [openSettings, setSettings] = useState(false);
  const handleSettings = () => {
    setSettings(!openSettings);
  };

  const colors = [
    { id: 1, color: "bg-[#108EF3]" },
    { id: 2, color: "bg-[#01B2D5]" },
    { id: 3, color: "bg-[#725FFE]" },
    { id: 4, color: "bg-[#FB6D8E]" },
    { id: 5, color: "bg-[#1B4CB7]" },
    { id: 6, color: "bg-[#FD9D77]" },
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0].color);
  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const { toggle } = useContext(ThemeContext);

  return (
    <>
      <div
        className={` transition-all flex dark:bg-[#1E2228] text-[#01B2D5] justify-between py-3 px-8 
      items-center bg-[#F9F9F9] w-[100vw] h-14 z-50 md:pl-[285px] ${
        openSidebar ? "pl-[215px]" : ""
      }`}
      >
        <span
          onClick={handleSettings}
          className="cursor-pointer absolute bottom-4 right-4 text-[#fff] flex items-center justify-center
            text-2xl bg-[#03B3D8] w-[50px] h-[50px] rounded-full"
        >
          <IoSettingsOutline />
        </span>

        {openSettings && (
          <div
            className={` settings w-[275px] dark:text-[#CED2D8] dark:bg-[#33373D] transition-all text-[#000] bg-[#fff] z-50 shadow-lg 
          p-4 h-[100vh] absolute top-0 right-0  flex flex-col`}
          >
            <div className=" border-b-[2px] py-4 flex justify-between items-center">
              <span className="font-semibold">Settings</span>
              <span
                onClick={handleSettings}
                className="text-[#808080] text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2"
              >
                <IoCloseCircleOutline />
              </span>
            </div>
            <div className="flex flex-col border-b-[2px] py-4 gap-2">
              <span className="font-semibold">Theme Option</span>
              <span className="flex items-center gap-2">
                <input
                  className=" cursor-pointer"
                  type="radio"
                  id="light"
                  name="theme"
                  value="light"
                  onChange={toggle}
                />
                <label for="light">Light</label>
              </span>
              <span className="flex items-center gap-2">
                <input
                  className=" cursor-pointer"
                  type="radio"
                  id="dark"
                  name="theme"
                  value="dark"
                  onChange={toggle}
                />
                <label for="dark">Dark</label>
              </span>
            </div>
            <div className="flex flex-col py-4">
              <span className="font-semibold pb-2">Theme Colors</span>
              <div className="colors flex flex-row gap-2">
                {colors.map((item) => (
                  <div
                    onClick={() => handleSelectedColor(item.color)}
                    key={item.id}
                    className={`w-[30px] h-[30px] cursor-pointer ${item.color} rounded-full`}
                  ></div>
                ))}
              </div>
              <div
                className={`h-[100px] w-[100px] ${selectedColor} mt-6 rounded-full`}
              ></div>
            </div>
          </div>
        )}
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
