import Image from "next/image";
import { useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Notif({ handleSetOpenNotif }) {
  const bgColor = useSelector((state) => state.color.selectedBgColor);
  return (
    <>
      <div
        className="bg-[#fff] mt-3 text-[#000] dark:bg-[#33373D] dark:text-[#CED2D8] 
        flex flex-col items-start gap-2 p-4 text-base
       rounded-xl h-full w-[250px] shadow-lg"
      >
        <div className="pb-1 flex w-full justify-between items-center">
          <span className="font-semibold">Notifications</span>
          <span
            onClick={handleSetOpenNotif}
            className="text-[#808080] text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2"
          >
            <IoCloseCircleOutline />
          </span>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1 items-center">
            <div
              className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center
         justify-center"
            >
              <Image width={70} height={70} src="/avatar1.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">
                Roman joined the Team!
              </span>
              <span className=" text-xs text-[#919191]">Congratulate him</span>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1 items-center">
            {" "}
            <div
              className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center
         justify-center"
            >
              <Image width={70} height={70} src="/avatar5.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">
                New message received
              </span>
              <span className=" text-xs text-[#919191]">
                David sent you a message
              </span>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1 items-center">
            {" "}
            <div
              className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center
         justify-center"
            >
              <Image width={70} height={70} src="/avatar3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">
                New Payment Received
              </span>
              <span className=" text-xs text-[#919191]">
                Check your earnings
              </span>
            </div>
          </div>
          <div className="flex gap-3 border-b-[1px] pb-3 pt-1 items-center">
            {" "}
            <div
              className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center
         justify-center"
            >
              <Image width={70} height={70} src="/avatar4.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <span className=" text-sm font-semibold">
                Jolly completed tasks
              </span>
              <span className=" text-xs text-[#919191]">
                Assign her new tasks
              </span>
            </div>
          </div>
        </div>
        <div
          className={`${bgColor} text-center w-full text-[#fff] text-sm py-2 rounded-lg mt-2`}
        >
          See all notifications
        </div>
      </div>
    </>
  );
}
