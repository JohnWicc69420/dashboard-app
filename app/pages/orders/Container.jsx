import data from "./data";

import { RiSkipLeftLine } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { RiSkipRightLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Container() {
  const getBgColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#FC9D78]";
      case "Complete":
        return "bg-[#88D68B]";
      case "Active":
        return "bg-[#04B3D9]";
      case "Canceled":
        return "bg-[#FD6F8F]";
      case "Rejected":
        return "bg-[#FD1B06]";
      default:
        return "bg-[#04B3D9]";
    }
  };

  const bgColor = useSelector((state) => state.color.selectedBgColor);

  const numbers = [
    { id: 1, pageNo: 1 },
    { id: 2, pageNo: 2 },
    { id: 3, pageNo: 3 },
    { id: 4, pageNo: 4 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10;
  const lastIndex = startIndex + itemsPerPage;

  const handlePages = (pageNo) => {
    const page = pageNo - 1;
    setStartIndex(page * 10);
  };

  const handleNextIndex = (items) => {
    setStartIndex((prev) => Math.min(prev + items, 30));
  };
  const handlePrevIndex = (items) => {
    setStartIndex((prev) => Math.max(prev - items, 0));
  };

  const [selectedBoxId, setSelectedBoxId] = useState(numbers[0].id);

  const incrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.min(prev + pages, 4));
  };
  const decrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.max(prev - pages, 1));
  };

  const handleSelectedBoxId = (id) => {
    setSelectedBoxId(id);
  };

  return (
    <>
      <div className="container overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="border text-[#b1b1b1] text-sm w-full">
              <th className="p-4 font-medium">Image</th>
              <th className="p-4 font-medium">Item</th>
              <th className="p-4 font-medium">Customer Name</th>
              <th className="p-4 font-medium">Total Amount</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(startIndex, lastIndex).map((item) => (
              <tr
                key={item.id}
                className="border text-xs text-[#454545] text-center dark:text-[#b1b1b1] hover:bg-[#eee] dark:hover:bg-[#1E2228] w-full"
              >
                <td className=" pl-8 py-[10px]">
                  <div
                    className="flex items-center justify-center
                   rounded-xl overflow-hidden h-[75px] w-[75px]"
                  >
                    <Image
                      className=" w-full h-full object-cover"
                      src={item.img}
                      width={200}
                      height={200}
                      alt=""
                    />
                  </div>
                </td>
                <td className="p-4">{item.item}</td>
                <td className="p-4">{item.customerName}</td>
                <td className="p-4">
                  <span>$</span>
                  {item.totalAmount}
                </td>
                <td className="p-4">
                  <span
                    className={`${getBgColor(
                      item.status
                    )} py-2 px-3 rounded-3xl text-[#fff]`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4">{item.orderId}</td>
                <td className="p-4">{item.location}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border text-center light:text-[#454545] justify-between">
              <td colSpan={3} className="pl-6 py-4 text-left">
                <div className="flex items-center gap-6">
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      handlePrevIndex(40);
                      decrementBoxId(3);
                    }}
                  >
                    <RiSkipLeftLine />
                  </span>
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      handlePrevIndex(10);
                      decrementBoxId(1);
                    }}
                  >
                    <MdNavigateBefore />
                  </span>
                  <div className="flex items-center gap-3">
                    {numbers.map((item) => (
                      <span
                        key={item.id}
                        onClick={() => {
                          handleSelectedBoxId(item.id);
                          handlePages(item.pageNo);
                        }}
                        className={`${
                          item.id === selectedBoxId
                            ? `${bgColor} text-[#fff]`
                            : ""
                        } py-1 px-3 rounded-full text-sm transition-colors cursor-pointer`}
                      >
                        {item.pageNo}
                      </span>
                    ))}
                  </div>
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      handleNextIndex(10);
                      incrementBoxId(1);
                    }}
                  >
                    <MdNavigateNext />
                  </span>
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      handleNextIndex(40);
                      incrementBoxId(3);
                    }}
                  >
                    <RiSkipRightLine />
                  </span>
                </div>
              </td>
              <td colSpan={4} className="px-6 py-3 text-xs text-right">
                {selectedBoxId} <span>of 4 pages (38 items)</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
