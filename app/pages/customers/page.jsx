"use client";
import { useSelector } from "react-redux";

export default function Customers() {
  const openSettings = useSelector((state) => state.settings.openSettings);

  return (
    <>
      <div
        className={`${
          openSettings ? "brightness-50" : ""
        } bg-[#F9F9F9] dark:text-[#B1B1B1] transition-color  dark:bg-[#1E2228] w-full h-full md:pl-[285px]`}
      >
        Customers
      </div>
    </>
  );
}
