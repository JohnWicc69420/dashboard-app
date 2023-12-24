import React from "react";
import MenuCard from "./MenuCard";

const MenuPosts = ({ data, hasImage }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      {data.slice(0, 4).map((item) => (
        <MenuCard
          key={item._id}
          id={item._id}
          cat={item.cat}
          hasImage={hasImage}
          img={item.img}
          date={item.date}
          title={item.title}
          desc={item.desc}
          writer={item.writer}
          writerImg={item.writerImg}
        />
      ))}
    </div>
  );
};

export default MenuPosts;
