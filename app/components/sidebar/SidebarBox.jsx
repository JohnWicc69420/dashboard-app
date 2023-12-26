import React from "react";

const SidebarBox = ({ title, icon }) => {
  return (
    <>
      {icon !== "null" ? (
        // textColor is #505050
        <div className="text-[#fff] cursor-pointer flex gap-3 items-center bg-cyan-400 h-12 w-full p-3 rounded-lg">
          {icon}
          <span className=" text-sm">{title}</span>
        </div>
      ) : (
        <h1 className=" text-[#B1B1B1] text-sm font-medium mb-3">{title}</h1>
      )}
    </>
  );
};

export default SidebarBox;
