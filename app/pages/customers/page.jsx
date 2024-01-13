"use client";
import { useSelector } from "react-redux";
import Title from "../Title";
import Container from "./Container";
import { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Employees() {
  const openSettings = useSelector((state) => state.settings.openSettings);
  const [isLoading, setIsLoading] = useState(true);
  const bg = useSelector((state) => state.color.selectedBgColor);
  const bgColor = bg.slice(4, 11);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
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
      ) : (
        <div
          className={`${
            openSettings ? "brightness-50" : ""
          } bg-[#F9F9F9] dark:text-[#B1B1B1] transition-color 
 dark:bg-[#1E2228] w-full pageSize overflow-x-auto md:pl-[285px] p-8`}
        >
          <div
            className="p-8 bg-[#fff] dark:bg-[#33373D] dark:text-[#CED2D8]
flex flex-col items-start rounded-xl"
          >
            <div>
              <Title page="Page" title="Customers" />
            </div>
            <div className="pt-8 w-full">
              <Container />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
