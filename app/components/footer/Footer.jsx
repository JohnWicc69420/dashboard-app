import React from "react";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="pb-6 flex items-center justify-between px-4 md:px-20 xl:px-40 2xl:px-60 dark:bg-[#0f172a] dark:text-[#ddd] gap-8">
      <div className=" lg:w-[70%] w-full flex flex-col items-start gap-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full overflow-hidden w-[40px] h-[40px]">
            <img className="object-cover w-full h-full" src="/pfp.png" alt="" />
          </div>
          <span className=" text-xl font-bold text-[#626262] dark:text-[#ddd]">
            LUMINA
          </span>
        </div>
        <div className=" line-clamp-3 text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base w-[calc(100%-10%)]">
          Lumina is a dynamic blog maker that empowers users to effortlessly
          create and customize their online narratives. With its user-friendly
          interface and diverse range of features, Lumina ensures a seamless and
          engaging blogging experience, allowing individuals to share their
          stories with the world in a visually appealing and impactful way.
        </div>
        <div className="md:flex hidden gap-[10px] items-center w-[250px]">
          <Image
            className=" cursor-pointer"
            src="/facebook.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/instagram.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/tiktok.png"
            alt=""
            height={20}
            width={20}
          />
          <Image
            className=" cursor-pointer"
            src="/youtube.png"
            alt=""
            height={20}
            width={20}
          />
        </div>
      </div>
      <div className=" w-[30%] lg:block hidden">
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
