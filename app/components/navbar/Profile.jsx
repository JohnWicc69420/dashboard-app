import Image from "next/image";
import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";

import { BiDollar } from "react-icons/bi";
import { MdOutlineShield } from "react-icons/md";
import { BsWindow } from "react-icons/bs";

export default function Profile({ handleSetOpenProfile }) {
  const bgColor = useSelector((state) => state.color.selectedBgColor);
  return (
    <>
      <div
        className="bg-[#fff] mt-3 text-[#000] dark:bg-[#33373D] dark:text-[#CED2D8] 
        flex flex-col items-start gap-2 p-4 text-base
       rounded-xl h-full w-[250px] shadow-lg"
      >
        <div className="pb-1 flex w-full justify-between items-center">
          <span className="font-semibold">User Profile</span>
          <span
            onClick={handleSetOpenProfile}
            className="text-[#808080] text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2"
          >
            <IoCloseCircleOutline />
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex gap-3 border-b-[1px] pb-4 pt-1 items-center">
            <div className="flex items-center justify-center rounded-full overflow-hidden">
              <Image width={70} height={70} src="/avatar1.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Michael Roberts</p>
              <p className=" text-xs text-[#919191]">Administrator</p>
              <p className=" text-xs text-[#919191] font-semibold">
                Info@shop.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1">
            <span
              className="flex items-center justify-center bg-[#E2F4F9] w-[35px] rounded-lg
            text-[#28A7B2]"
            >
              <BiDollar />
            </span>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">My Profile</span>
              <span className=" text-xs text-[#919191]">Account Settings</span>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1">
            {" "}
            <span
              className="flex items-center justify-center bg-[#E2F4F9] w-[35px] rounded-lg
            text-[#28A7B2]"
            >
              <MdOutlineShield />
            </span>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">My Inbox</span>
              <span className=" text-xs text-[#919191]">Messages & Emails</span>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1">
            {" "}
            <span
              className="flex items-center justify-center bg-[#FBC10A] w-[35px] rounded-lg
            text-[#FCEB7A]"
            >
              <BsWindow />
            </span>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">My Tasks</span>
              <span className=" text-xs text-[#919191]">
                To-do and Daily Tasks
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${bgColor} text-center w-full text-[#fff] text-sm py-2 rounded-lg mt-2`}
        >
          Logout
        </div>
      </div>
    </>
  );
}
