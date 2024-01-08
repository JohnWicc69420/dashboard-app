"use client";
import { useSelector } from "react-redux";
import Title from "../Title";
import Container from "./Container";

export default function Orders() {
  const openSettings = useSelector((state) => state.settings.openSettings);

  return (
    <>
      <div
        className={`${
          openSettings ? "brightness-50" : ""
        } bg-[#F9F9F9] dark:text-[#B1B1B1] transition-color 
         dark:bg-[#1E2228] w-full h-full overflow-x-auto md:pl-[285px] p-8`}
      >
        <div
          className="p-8 bg-[#fff] dark:bg-[#33373D] dark:text-[#CED2D8]
        flex flex-col items-start rounded-xl"
        >
          <div>
            <Title title="Orders" />
          </div>
          <div className="pt-8 w-full">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
}
