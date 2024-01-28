"use client";

import Earnings from "./components/earnings/Earnings";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { TiArrowRepeat } from "react-icons/ti";
import StatBox from "./components/statBox/StatBox";
import Settings from "./components/settings/Settings";
import { IoSettingsOutline } from "react-icons/io5";
import { setOpenSettings } from "@/redux/features/settingsSlice";
import { useSelector, useDispatch } from "react-redux";
import Revenue from "./components/revenue/Revenue";
import { ThreeCircles } from "react-loader-spinner";
import { useState, useEffect } from "react";

export const data = [
  {
    id: 1,
    icon: <IoPeopleOutline />,
    quantity: "61,467",
    percentage: "21%",
    title: "Customers",
    profit: false,
    color: "text-[#13B6CD]",
    bg: "bg-[#E0F5FB]",
  },
  {
    id: 2,
    icon: <BsBoxSeam />,
    quantity: "3,563",
    percentage: "41%",
    title: "Products",
    profit: true,
    color: "text-[#FCC108]",
    bg: "bg-[#FFF2AF]",
  },
  {
    id: 3,
    icon: <FiBarChart />,
    quantity: "532,436",
    percentage: "35%",
    title: "Sales",
    profit: true,
    color: "text-[#D17F81]",
    bg: "bg-[#FFF3E6]",
  },
  {
    id: 4,
    icon: <TiArrowRepeat />,
    quantity: "36,916",
    percentage: "17%",
    title: "Refunds",
    profit: false,
    color: "text-[#15A98B]",
    bg: "bg-[#EAF6F3]",
  },
];
export default function Home() {
  const selectedColor = useSelector((state) => state.color.selectedBgColor);
  const openSettings = useSelector((state) => state.settings.openSettings);
  const [isLoading, setIsLoading] = useState(true);
  const bgColor = selectedColor.slice(4, 11);
  const dispatch = useDispatch();
  const handleOpenSettings = () => {
    dispatch(setOpenSettings(!openSettings));
  };
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

      <span
        onClick={handleOpenSettings}
        className={`cursor-pointer fixed bottom-4 right-4 text-[#fff] flex items-center justify-center
            text-2xl ${selectedColor} w-[50px] h-[50px] rounded-full`}
      >
        <IoSettingsOutline />
      </span>
      {openSettings && <Settings handleSettings={handleOpenSettings} />}
      <div
        className={`${
          openSettings ? "brightness-50" : ""
        } bg-[#F9F9F9] transition-color  dark:bg-[#1E2228] overflow-x-auto pageSize md:pl-[285px]`}
      >
        <div className="top flex items-center gap-4 pt-5 flex-col xl:flex-row">
          <div>
            <Earnings />
          </div>
          <div className="grid gap-2 grid-cols-2 xl:grid-cols-4">
            {data.map((item) => (
              <StatBox
                key={item.id}
                icon={item.icon}
                quantity={item.quantity}
                percentage={item.percentage}
                title={item.title}
                profit={item.profit}
                color={item.color}
                bg={item.bg}
              />
            ))}
          </div>
        </div>
        <div className="bottom pb-5">
          <Revenue />
        </div>
      </div>
    </>
  );
}
