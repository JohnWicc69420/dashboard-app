import React from "react";
import Link from "next/link";

const Card = ({ id, img, date, cat, title, desc }) => {
  return (
    <>
      <div className="flex items-start md:gap-6 ">
        <Link href={`/blog/${id}`}>
          <div
            className="left hidden md:flex items-center justify-center overflow-hidden
        h-[240px] min-w-[300px] max-w-[300px]
        xl:h-[300px] xl:min-w-[375px] xl:max-w-[375px]"
          >
            <img
              className="object-cover cursor-pointer h-full w-full "
              src={img}
              alt=""
            />
          </div>
        </Link>
        <div className="right flex flex-col items-start">
          <div className="mb-4">
            <span className=" text-gray-500 xl:text-sm text-xs">{date}</span>
            <span className=" text-gray-500 xl:text-sm text-xs"> - </span>
            <span className=" text-[#dc143c] xl:text-sm font-semibold text-xs uppercase">
              {cat}
            </span>
          </div>
          <div className=" text-xl line-clamp-2 font-semibold xl:text-2xl xl:font-bold mb-4">
            {title}
          </div>
          <div className=" xl:line-clamp-4 md:line-clamp-3 line-clamp-6 text-[#626262] dark:text-[#a6a6a6] text-sm md:text-base">
            {desc}
          </div>
          <Link href={`/blog/${id}`}>
            <button className=" font-semibold text-sm md:text-base mt-4 border-b-[#dc143c] border-b-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
