import React from "react";
import Link from "next/link";

const MenuCard = ({ id, cat, hasImage, img, date, title, writer }) => {
  const colors = [
    "bg-[#F0755D]",
    "bg-[#78C7C7]",
    "bg-[#D6A2E8]",
    "bg-[#4CAF50]",
    "bg-[#6495ED]",
    "bg-[#FF6347]",
    "bg-[#9ACD32]",
    "bg-[#9370DB]",
    "bg-[#2E8B57]",
    "bg-[#9932CC]",
    "bg-[#FF69B4]",
    "bg-[#00CED1]",
    "bg-[#D2691E]",
    "bg-[#4169E1]",
    "bg-[#8B4513]",
    "bg-[#20B2AA]",
    "bg-[#A0522D]",
    "bg-[#4682B4]",
    "bg-[#DC143C]",
    "bg-[#6A5ACD]",
    "bg-[#32CD32]",
    "bg-[#8B008B]",
    "bg-[#556B2F]",
    "bg-[#9932CC]",
    "bg-[#8A2BE2]",
    "bg-[#008B8B]",
  ];

  const randNum = Math.floor(Math.random() * 26);
  const color = colors[randNum];

  return (
    <Link href={`/blog/${id}`}>
      <div className="flex items-center gap-4 h-full w-full cursor-pointer">
        {hasImage && (
          <div>
            <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-gray-400 flex items-center justify-center">
              <img className=" h-full w-full object-cover" src={img} alt="" />
            </div>
          </div>
        )}
        <div className="flex flex-col items-start">
          <span
            className={` text-[#fff] ${color} text-xs py-1 px-2 rounded-xl mb-2`}
          >
            {cat}
          </span>
          <h1 className="text-[#626262] dark:text-[#a6a6a6] font-medium line-clamp-2">
            {title}
          </h1>
          <div>
            <span className="text-xs font-medium">{writer}</span>
            <span className="text-xs font-medium"> - </span>
            <span className="text-xs text-[#626262] font-medium">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
