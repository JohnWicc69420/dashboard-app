import React from "react";
import Link from "next/link";

const CatBox = ({ title, bgColor }) => {
  return (
    <Link href={`/category/${title}`}>
      <div
        className={`flex gap-[10px] px-5 py-3 items-center cursor-pointer shadow-md
      justify-center rounded-md ${bgColor} w-fit`}
      >
        <span className=" dark:text-[#000] text-sm font-medium">{title}</span>
      </div>
    </Link>
  );
};

export default CatBox;
