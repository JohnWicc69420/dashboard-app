"use client";

import React from "react";
import ProfileCard from "../ProfileCard";
import Image from "next/image";
import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments";

const Page = async ({ params }) => {
  const BASE_URL = "https://main--blog-app64209.netlify.app";
  const LOCAL_HOST = "http://localhost:3000";

  const getData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/blogs`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error("Could not fetch blogs:", error);
      throw error;
    }
  };
  const { id } = params;
  try {
    const { blogs } = await getData();
    const blogData = blogs.filter((item) => item._id === id);

    if (blogData.length === 0) {
      return <h1 className="text-3xl p-3">Blog not found</h1>;
    }

    return (
      <div className="flex flex-col lg:gap-12 gap-10 pt-8 dark:text-[#ddd] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60">
        <div className="top flex md:flex-row flex-col items-center gap-6 justify-between">
          <div className=" md:w-2/5">
            <h1 className="text-2xl line-clamp-2 font-semibold lg:text-4xl xl:font-extrabold lg:font-bold xl:leading-[45px] mb-4 lg:mb-12">
              {blogData[0]?.title}
            </h1>
            <ProfileCard
              date={blogData[0]?.date}
              writer={blogData[0]?.writer}
              writerImg={blogData[0]?.writerImg}
            />
          </div>
          <div className="overflow-hidden">
            <div className="h-[200px] w-[340px] lg:h-[270px] lg:w-[459px] xl:h-[340px] xl:w-[578px] overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={blogData[0]?.img}
                height={600}
                width={600}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bottom flex items-start flex-row lg:gap-12 gap-8">
          <div className="container flex flex-col items-start gap-8 mb-4">
            <div className="details">{blogData[0]?.desc}</div>
            <Comments />
          </div>
          <div className="menu md:flex hidden">
            <Menu data={blogs} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in blog page component:", error);
    return (
      <div className="flex flex-col lg:gap-12 gap-10 pt-8 dark:text-[#ddd] dark:bg-[#0f172a] px-8 md:px-20 xl:px-40 2xl:px-60">
        <h1 className="text-3xl p-3">Error loading blog data</h1>
      </div>
    );
  }
};

export default Page;
