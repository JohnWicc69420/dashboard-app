"use client";
import { Context } from "@/app/context/ContextProvider";
import { useContext } from "react";
import { SiShopware } from "react-icons/si";
import { data } from "./data";
import SidebarBox from "./SidebarBox";

export default function Sidebar() {
  const { openSidebar } = useContext(Context);
  return (
    <>
      <div
        className={`bg-[#fff] shadow-md md:w-[300px] w-[200px] h-[100vh] p-4 z-50
       flex flex-col gap-4 absolute transition-all ${
         openSidebar ? "" : "translate-x-[-300px] "
       } `}
      >
        <div className="text-slate-900 font-extrabold text-2xl flex items-center gap-3 mb-4">
          <SiShopware />
          <span>Shoppy</span>
        </div>
        {data.map((item) => (
          <SidebarBox key={item.id} title={item.title} icon={item.icon} />
        ))}
      </div>
    </>
  );
}
