"use client";
import { Context } from "@/app/context/ContextProvider";
import { useContext, useState } from "react";
import { SiShopware } from "react-icons/si";
import { data } from "./data";
import SidebarBox from "./SidebarBox";

export default function Sidebar() {
  const { openSidebar } = useContext(Context);
  const [selectedBoxId, setSelectedBoxId] = useState(data[1].id);
  const bgColor = "bg-[#01B2D5]";

  const handleBoxClick = (boxId) => {
    const clickedBox = data.find((item) => item.id === boxId);
    if (clickedBox.icon !== "null") {
      setSelectedBoxId(boxId);
    }
  };

  return (
    <>
      <div
        className={`bg-[#fff] dark:bg-[#33373D] shadow-md md:w-[260px] w-[200px] h-[100vh] p-4 z-50
       flex flex-col gap-4 absolute transition-all md:translate-x-[0px] ${
         openSidebar ? "translate-x-[0px]" : "translate-x-[-260px]"
       }`}
      >
        <div className="text-slate-900 dark:text-[#F8FAFF] font-extrabold text-2xl flex items-center gap-3 mb-4">
          <SiShopware />
          <span>Shoppy</span>
        </div>
        {data.map((item) => (
          <div key={item.id} onClick={() => handleBoxClick(item.id)}>
            <SidebarBox
              bgColor={item.id === selectedBoxId ? bgColor : "null"}
              title={item.title}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
}
