import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatBox = ({ img, title, bgColor }) => {
  return (
    <Link href={`/category/${title}`}>
      <div
        className={`flex gap-[10px] w-full px-10 py-5 items-center cursor-pointer
      justify-center rounded-md ${bgColor} shadow-md hover:scale-105 transition-pic`}
      >
        <div className="w-8 h-8 overflow-hidden rounded-full flex items-center justify-center">
          <Image
            className="object-cover h-full w-full"
            src={img}
            height={100}
            width={100}
            alt=""
          />
        </div>
        <span className=" dark:text-[#000] text-sm font-semibold">{title}</span>
      </div>
    </Link>
  );
};

export default CatBox;
