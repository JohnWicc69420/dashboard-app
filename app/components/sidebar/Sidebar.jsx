"use client";
import { Context } from "@/app/context/ContextProvider";
import { useContext, useState } from "react";
import { SiShopware } from "react-icons/si";
import { data } from "./data";
import SidebarBox from "./SidebarBox";
import Link from "next/link";
import Settings from "../../components/settings/Settings";
import { IoSettingsOutline } from "react-icons/io5";
import { setOpenSettings } from "@/redux/features/settingsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Sidebar() {
  const { handleSideBar, openSidebar } = useContext(Context);
  const [selectedBoxId, setSelectedBoxId] = useState(data[1].id);

  const handleBoxClick = (boxId) => {
    const clickedBox = data.find((item) => item.id === boxId);
    if (clickedBox.icon !== "null") {
      setSelectedBoxId(boxId);
    }
  };

  const bgColor = useSelector((state) => state.color.selectedBgColor);
  const openSettings = useSelector((state) => state.settings.openSettings);

  const dispatch = useDispatch();
  const handleOpenSettings = () => {
    dispatch(setOpenSettings(!openSettings));
  };

  return (
    <>
      <span
        onClick={handleOpenSettings}
        className={`cursor-pointer fixed bottom-4 right-4 text-[#fff] flex 
        items-center justify-center
        text-2xl ${bgColor} w-[50px] h-[50px] rounded-full shadow-md`}
      >
        <IoSettingsOutline />
      </span>
      {openSettings && <Settings handleSettings={handleOpenSettings} />}
      <div
        className={`bg-[#fff] dark:bg-[#33373D] shadow-md md:w-[260px]
         w-[200px] h-[100vh]  p-4 z-50 translate-x-[-260px]
       flex flex-col gap-3 fixed top-0 left-0 transition-all overflow-x-auto md:translate-x-[0px] ${
         openSidebar ? "translate-x-[0px]" : ""
       }`}
      >
        <div className="text-slate-900 dark:text-[#F8FAFF] font-extrabold text-2xl flex items-center gap-3 mb-6">
          <SiShopware />
          <span>Shoppy</span>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${
              item.icon !== "null" &&
              "hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            } `}
            onClick={() => {
              handleBoxClick(item.id);
              handleSideBar();
            }}
          >
            <Link href={item.link ? item.link : "/"}>
              <SidebarBox
                bgColor={item.id === selectedBoxId ? bgColor : "null"}
                title={item.title}
                icon={item.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
