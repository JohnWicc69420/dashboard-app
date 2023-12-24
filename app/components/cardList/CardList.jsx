import React from "react";
import Cards from "./Cards";

const CardList = ({ slug, isCat, data, buttons }) => {
  let catData;
  {
    catData =
      slug === null
        ? data
        : (catData = data?.filter((item) => item.cat === slug));
  }
  return (
    <div className="h-full w-full pb-4 mb-8">
      <h1 className=" text-3xl font-bold md:mb-12 mb-6">Recent Posts</h1>
      <Cards catData={catData} isCat={isCat} buttons={buttons} />
    </div>
  );
};

export default CardList;
