import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Profile() {
  return (
    <>
      <div className="flex items-center gap-2 cursor-pointer">
        <div
          className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center
         justify-center"
        >
          <Image width={70} height={70} src="/avatar1.jpg" alt="" />
        </div>
        <div className="text text-base text-[#919191] dark:text-[#CED2D8]">
          Hi, <span className=" font-bold">Michael</span>
        </div>
        <div className="text text-base text-[#919191] dark:text-[#CED2D8]">
          <MdKeyboardArrowDown />
        </div>
      </div>
    </>
  );
}
