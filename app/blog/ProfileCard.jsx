import React from "react";
import Image from "next/image";

const ProfileCard = ({ date, writer, writerImg }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[40px] h-[40px] overflow-hidden rounded-full flex items-center justify-center">
        <Image
          className=" h-full w-full object-cover"
          src={writerImg}
          height={50}
          width={50}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[2px] items-start">
        <h1 className="dark:text-[#a6a6a6] text-sm">{writer}</h1>
        <span className="dark:text-[#a6a6a6] text-xs">{date}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
