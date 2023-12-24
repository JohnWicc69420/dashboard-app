"use client";

import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start flex-col gap-2">
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base font-bold"
        >
          Links
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Homepage
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Blog
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-start flex-col gap-2">
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base font-bold "
        >
          Tags
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Style
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Fashion
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Coding
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Travel
        </Link>
      </div>
      <div className="flex items-start flex-col gap-2">
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base font-bold "
        >
          Social
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Facebook
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Instagram
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Tiktok
        </Link>
        <Link
          href="/"
          className="text-[#626262] dark:text-[#a6a6a6] text-sm xl:text-base cursor-pointer"
        >
          Youtube
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
