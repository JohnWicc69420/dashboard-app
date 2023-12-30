"use client";

import Earnings from "./components/earnings/Earnings";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { TiArrowRepeat } from "react-icons/ti";
import BarChart from "./components/charts/BarChart";
import StatBox from "./components/statBox/StatBox";
import Settings from "./components/settings/Settings";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { useSelector } from "react-redux";

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

  const [openSettings, setOpenSettings] = useState(false);
  const handleSettings = () => {
    setOpenSettings((prevState) => !prevState);
  };
  return (
    <>
      <div
        className={` bg-[#F9F9F9] transition-all min-h-[100vh] dark:bg-[#1E2228] w-full h-full md:pl-[285px]`}
      >
        <div className="top flex items-center gap-4 pt-16 flex-col xl:flex-row">
          <span
            onClick={handleSettings}
            className={`cursor-pointer fixed bottom-4 right-4 text-[#fff] flex items-center justify-center
            text-2xl ${selectedColor} w-[50px] h-[50px] rounded-full`}
          >
            <IoSettingsOutline />
          </span>
          {openSettings && <Settings handleSettings={handleSettings} />}
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
        <div className="bottom">
          <BarChart />
        </div>
      </div>
    </>
  );
}
