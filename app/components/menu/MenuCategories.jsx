import React from "react";
import MenuCatBox from "./MenuCatBox";
const data = [
  {
    id: 1,
    img: "/style.png",
    title: "Style",
    bgColor: "bg-[#C2DFFF]",
  },
  {
    id: 2,
    img: "/fashion.png",
    title: "Fashion",
    bgColor: "bg-[#F4C7E8]",
  },
  {
    id: 3,
    img: "/food.png",
    title: "Food",
    bgColor: "bg-[#F0F7F1]",
  },
  {
    id: 4,
    img: "/bali.png",
    title: "Travel",
    bgColor: "bg-[#FED4CF]",
  },
  {
    id: 5,
    img: "/heritage.png",
    title: "Culture",
    bgColor: "bg-[#FDE8D1]",
  },
  {
    id: 6,
    img: "/js.png",
    title: "Coding",
    bgColor: "bg-[#D1F0FF]",
  },
];

const MenuCategories = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 ">
      {data.slice(0, 6).map((item) => (
        <MenuCatBox key={item.id} title={item.title} bgColor={item.bgColor} />
      ))}
    </div>
  );
};

export default MenuCategories;
