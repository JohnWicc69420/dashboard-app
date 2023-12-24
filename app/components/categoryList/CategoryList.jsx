import React from "react";
import CatBox from "./CatBox";

const data = [
  {
    id: 1,
    img: "/style.png",
    title: "Style",
    bgColor: "bg-[#E0F1FD]",
  },
  {
    id: 2,
    img: "/fashion.png",
    title: "Fashion",
    bgColor: "bg-[#F6E7F1]",
  },
  {
    id: 3,
    img: "/food.png",
    title: "Food",
    bgColor: "bg-[#E4EEE5]",
  },
  {
    id: 4,
    img: "/bali.png",
    title: "Travel",
    bgColor: "bg-[#FCE1DA]",
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
    bgColor: "bg-[#DDDDFD]",
  },
];
const CategoryList = () => {
  return (
    <div className="h-full w-full mb-12">
      <h1 className=" text-3xl font-bold mb-12">Popular Categories</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((item) => (
          <CatBox
            key={item.id}
            img={item.img}
            title={item.title}
            bgColor={item.bgColor}
          ></CatBox>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
