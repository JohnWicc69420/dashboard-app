"use client";
import { useState } from "react";
import Card from "../card/Card";

const Cards = ({ catData, isCat, buttons }) => {
  const [prevNum, setPrevNum] = useState(0);
  const [nextNum, setNextNum] = useState(5);
  return (
    <>
      <div className="flex items-start flex-col gap-8">
        {catData.slice(prevNum, nextNum).map((item) => (
          <Card
            featured={false}
            key={item._id}
            id={item._id}
            img={item.img}
            date={item.date}
            cat={item.cat}
            title={item.title}
            desc={item.desc}
            writer={item.writer}
            writerImg={item.writerImg}
          />
        ))}
      </div>
      {buttons && (
        <div className="buttons flex items-center justify-between my-12">
          <button
            onClick={
              prevNum >= 5
                ? () => {
                    setPrevNum(prevNum - 5);
                    setNextNum(nextNum - 5);
                  }
                : null
            }
            className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] 
        w-[125px] hover:bg-[#9F202B] "
          >
            Previous
          </button>
          <button
            onClick={
              isCat
                ? null
                : nextNum <= 15
                ? () => {
                    setPrevNum(prevNum + 5);
                    setNextNum(nextNum + 5);
                  }
                : null
            }
            className="bg-[#C92C39] py-3 px-5 text-base text-[#fff] 
        w-[110px] hover:bg-[#9F202B] "
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;
