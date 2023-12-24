"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Links = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="dark:text-[#ddd] lg:flex hidden gap-3 items-center">
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <Link href="/">Login</Link>
      </div>
      {open ? (
        <div
          className=" text-xl dark:text-[#ddd] lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineClose />
        </div>
      ) : (
        <div
          className=" text-xl dark:text-[#ddd] lg:hidden cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <GiHamburgerMenu />
        </div>
      )}

      {open && (
        <div
          className=" dark:text-[#ddd] lg:hidden w-full absolute 
        right-0 left-0 top-16 flex flex-col pt-[50%] md:pt-[25%]
        items-center font-semibold text-2xl gap-7 dark:bg-[#0F172A] bg-white h-[100vh]"
        >
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </>
  );
};

export default Links;
