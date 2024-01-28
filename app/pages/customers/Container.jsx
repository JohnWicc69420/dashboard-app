import data from "./data";

import { RiSkipLeftLine } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { RiSkipRightLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";

export default function Container() {
  const getBgColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-[#F8C110]";
      case "Complete":
        return "bg-[#88D68B]";
      case "Active":
        return "bg-[#04B3D9]";
      case "Cancel":
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
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10;
  const lastIndex = startIndex + itemsPerPage;

  const handlePages = (pageNo) => {
    const page = pageNo - 1;
    setStartIndex(page * 10);
  };

  const handleNextIndex = (items) => {
    setStartIndex((prev) => Math.min(prev + items, 20));
  };
  const handlePrevIndex = (items) => {
    setStartIndex((prev) => Math.max(prev - items, 0));
  };

  const [selectedBoxId, setSelectedBoxId] = useState(numbers[0].id);

  const incrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.min(prev + pages, 3));
  };
  const decrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.max(prev - pages, 1));
  };

  const handleSelectedBoxId = (id) => {
    setSelectedBoxId(id);
  };

  const [allChecked, setAllChecked] = useState(false);
  const handleAllChecked = (isChecked) => {
    setAllChecked(isChecked);
    setSelectedBoxes(isChecked ? data.map((item) => item.id) : []);
  };

  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const handleSelectedBoxes = (itemId) => {
    setSelectedBoxes((prevSelectedBoxes) => {
      if (prevSelectedBoxes.includes(itemId)) {
        return prevSelectedBoxes.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedBoxes, itemId];
      }
    });
  };

  const [updatedData, setUpdatedData] = useState(data);
  const handleDeleteBoxes = () => {
    updatedData.length > 0 &&
      setUpdatedData(data.filter((item) => !selectedBoxes.includes(item.id)));
  };

  return (
    <>
      <div className="container overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="border bg-[#f5f5f5] text-sm w-full dark:bg-[#1e2228]/[0.5] ">
              <th colSpan={2}>
                <div
                  onClick={handleDeleteBoxes}
                  className=" flex items-center gap-1 cursor-pointer pl-4 text-center py-2"
                >
                  <span className=" text-md text-[#555]">
                    <BsTrash />
                  </span>
                  <span className=" text-md text-[#555] font-medium ">
                    Delete
                  </span>
                </div>
              </th>
              <th colSpan={6} className=""></th>
            </tr>
            <tr className="border text-[#b1b1b1] text-sm w-full">
              <th className="p-4">
                <input
                  style={{
                    width: "15px",
                    height: "15px",
                    cursor: "pointer",
                  }}
                  type="checkbox"
                  checked={allChecked}
                  onChange={(e) => handleAllChecked(e.target.checked)}
                />
              </th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Project Name</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Weeks</th>
              <th className="p-4 font-medium">Budget</th>
              <th className="p-4 font-medium">Location</th>
              <th className="p-4 font-medium">Customer ID</th>
            </tr>
          </thead>
          <tbody>
            {updatedData.slice(startIndex, lastIndex).map((item) => (
              <tr
                key={item.id}
                className="border text-xs text-[#454545] text-center dark:text-[#b1b1b1] hover:bg-[#eee] dark:hover:bg-[#1E2228] w-full"
              >
                <td className="p-4">
                  <input
                    style={{
                      width: "15px",
                      height: "15px",
                      cursor: "pointer",
                    }}
                    checked={selectedBoxes.includes(item.id)}
                    type="checkbox"
                    onChange={() => handleSelectedBoxes(item.id)}
                  />
                </td>
                <td className="p-4">
                  <div className="flex gap-4 items-center">
                    <span className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        className=" w-full h-full object-cover"
                        src={item.customerImg}
                        width={100}
                        height={100}
                        alt=""
                      ></Image>
                    </span>
                    <span className="flex flex-col items-center gap-1">
                      <span>{item.customerName}</span>
                      <span>{item.customerEmail}</span>
                    </span>
                  </div>
                </td>
                <td className="p-4">{item.projectName}</td>
                <td className=" p-4">
                  <div className="gap-2 flex items-center justify-center">
                    <div
                      className={`${getBgColor(
                        item.status
                      )} w-[10px] h-[10px] rounded-3xl `}
                    ></div>
                    <span>{item.status}</span>
                  </div>
                </td>
                <td className="p-4">{item.weeks}</td>
                <td className="p-4">{item.budget}</td>
                <td className="p-4">{item.location}</td>
                <td className="p-4">{item.customerId}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border text-center light:text-[#454545] justify-between">
              <td colSpan={4} className="pl-6 py-4 text-left">
                <div className="flex items-center gap-6">
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      handlePrevIndex(30);
                      decrementBoxId(2);
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
                        } w-7 h-7 flex items-center justify-center rounded-full text-sm transition-colors cursor-pointer`}
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
                      handleNextIndex(30);
                      incrementBoxId(2);
                    }}
                  >
                    <RiSkipRightLine />
                  </span>
                </div>
              </td>
              <td colSpan={3} className="px-6 py-3 text-xs text-right">
                {selectedBoxId}{" "}
                <span>of 3 pages ({updatedData.length} items)</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
