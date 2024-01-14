import data from "./data";

import { RiSkipLeftLine } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { RiSkipRightLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector } from "react-redux";

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

  return (
    <>
      <div className="container overflow-x-auto">
        <table className="w-full ">
          <thead>
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
            {data.slice(startIndex, lastIndex).map((item) => (
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
                <td className="p-4">yo</td>
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
                      handleNextIndex(30);
                      incrementBoxId(2);
                    }}
                  >
                    <RiSkipRightLine />
                  </span>
                </div>
              </td>
              <td colSpan={3} className="px-6 py-3 text-xs text-right">
                {selectedBoxId} <span>of 3 pages (27 items)</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
