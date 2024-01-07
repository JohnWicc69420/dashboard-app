import Image from "next/image";
import { useSelector } from "react-redux";

export default function Earnings() {
  const bgColor = useSelector((state) => state.color.selectedBgColor);
  return (
    <>
      <div className="bg-[#fff] dark:bg-[#33373D] dark:text-[#CED2D8] rounded-xl relative overflow-hidden shadow-lg">
        <Image
          className=" w-[300px] h-[150px] xl:h-[170px] object-cover"
          src="/welcome-bg.svg"
          width={100}
          height={100}
          alt=""
        />
        <div
          className="absolute flex flex-col h-full\
         w-full top-0 left-0 pt-5 md:pt-7 px-5"
        >
          <div className="flex justify-between w-full">
            <div className="flex flex-col">
              <span className="text-[#b1b1b1] font-bold">Earnings</span>
              <span className=" text-xl font-medium">$63,448.78</span>
            </div>
            <span
              className={` text-[#fff] flex items-center justify-center
            text-xl ${bgColor} w-[50px] h-[50px] rounded-full`}
            >
              $
            </span>
          </div>
          <span
            className={`mt-3 w-[120px] cursor-pointer xl:mt-5 text-center text-[#fff] text-sm ${bgColor} py-3 px-2 rounded-xl`}
          >
            Download
          </span>
        </div>
      </div>
    </>
  );
}
