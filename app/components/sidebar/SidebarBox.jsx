import React from "react";

const SidebarBox = ({ title, icon, bgColor }) => {
  return (
    <>
      {icon !== "null" ? (
        // textColor is #505050
        // bg color is #02C9D6
        <div
          className={`text-[#505050] dark:text-[#fff] ${
            bgColor !== "null" ? bgColor : ""
          } transition-all cursor-pointer
         flex gap-3 items-center h-12 w-full p-3 rounded-lg`}
        >
          <span
            className={` text-sm transition-all ${
              bgColor !== "null" ? ` text-[#fff] text-lg` : ""
            }`}
          >
            {icon}
          </span>
          <span
            className={` text-sm ${bgColor !== "null" ? ` text-[#fff] ` : ""}`}
          >
            {title}
          </span>
        </div>
      ) : (
        <h1 className=" text-[#B1B1B1] text-sm font-medium">{title}</h1>
      )}
    </>
  );
};

export default SidebarBox;
