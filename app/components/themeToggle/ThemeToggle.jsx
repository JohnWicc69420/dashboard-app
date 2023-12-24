"use client";

import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className={`flex items-center p-[2px] cursor-pointer rounded-xl gap-1 relative overflow-hidden ${
        theme === "dark" ? "bg-white" : "bg-[#0f172a]"
      }`}
    >
      <div
        className={`h-[14px] w-[14px] absolute rounded-full ${
          theme === "dark"
            ? "bg-[#0f172a] left-[2px] transition-all"
            : "bg-white right-[2px] transition-all"
        }`}
      ></div>
      <Image src="/moon.png" height={14} width={14} alt="" />
      <Image src="/sun.png" height={14} width={14} alt="" />
    </div>
  );
};

export default ThemeToggle;
