"use client";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Chart from "./Chart";

export default function Area() {
  const openSettings = useSelector((state) => state.settings.openSettings);
  const selectedColor = useSelector((state) => state.color.selectedBgColor);
  const [isLoading, setIsLoading] = useState(true);
  const bgColor = selectedColor.slice(4, 11);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`${
            openSettings ? "brightness-50" : ""
          } bg-[#F9F9F9] dark:bg-[#1E2228] flex items-center 
        justify-center w-full pageSize md:pl-[285px] p-8`}
        >
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color={bgColor}
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}

      <div
        className={`${
          openSettings ? "brightness-50" : ""
        } bg-[#F9F9F9] dark:text-[#B1B1B1] transition-color dark:bg-[#1E2228]
         md:pl-[285px] w-full overflow-auto flex items-center justify-center pageSize`}
      >
        <div>
          <Chart />
        </div>
      </div>
    </>
  );
}
