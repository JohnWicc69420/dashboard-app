import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <>
      <div className="lg:flex hidden gap-[10px] items-center w-[250px]">
        <Image
          className=" cursor-pointer"
          src="/facebook.png"
          alt=""
          height={24}
          width={24}
        />
        <Image
          className=" cursor-pointer"
          src="/instagram.png"
          alt=""
          height={24}
          width={24}
        />
        <Image
          className=" cursor-pointer"
          src="/tiktok.png"
          alt=""
          height={24}
          width={24}
        />
        <Image
          className=" cursor-pointer"
          src="/youtube.png"
          alt=""
          height={24}
          width={24}
        />
      </div>
    </>
  );
};

export default Social;
