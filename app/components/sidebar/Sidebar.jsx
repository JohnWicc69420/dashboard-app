"use client";
import { Context } from "@/app/context/ContextProvider";
import { useContext, useState } from "react";
import { SiShopware } from "react-icons/si";
import { data } from "./data";
import SidebarBox from "./SidebarBox";
import { useSelector } from "react-redux";
import Link from "next/link";

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

  return (
    <>
      <div
        className={`bg-[#fff] dark:bg-[#33373D] shadow-md md:w-[260px]
         w-[200px] h-[100vh]  p-4 z-50 translate-x-[-260px]
       flex flex-col gap-4 fixed top-0 left-0 transition-all md:translate-x-[0px] ${
         openSidebar ? "translate-x-[0px]" : ""
       }`}
      >
        <div className="text-slate-900 dark:text-[#F8FAFF] font-extrabold text-2xl flex items-center gap-3 mb-4">
          <SiShopware />
          <span>Shoppy</span>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
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
