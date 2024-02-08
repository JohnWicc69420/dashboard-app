import data from "./data";

import { RiSkipLeftLine } from "react-icons/ri";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { RiSkipRightLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Container() {
  const bgColor = useSelector((state) => state.color.selectedBgColor);

  const numbers = [
    { id: 1, pageNo: 1 },
    { id: 2, pageNo: 2 },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 10;
  const lastIndex = startIndex + itemsPerPage;

  const handlePages = (pageNo) => {
    const page = pageNo - 1;
    setStartIndex(page * 10);
  };

  const handleNextIndex = (items) => {
    setStartIndex((prev) => Math.min(prev + items, 10));
  };
  const handlePrevIndex = (items) => {
    setStartIndex((prev) => Math.max(prev - items, 0));
  };

  const [selectedBoxId, setSelectedBoxId] = useState(numbers[0].id);

  const incrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.min(prev + pages, 2));
  };
  const decrementBoxId = (pages) => {
    setSelectedBoxId((prev) => Math.max(prev - pages, 1));
  };

  const handleSelectedBoxId = (id) => {
    setSelectedBoxId(id);
  };

  const [employees, setEmployees] = useState("");

  const handleEmployees = (id) => {
    setEmployees(id);
  };

  const filteredData = data
    .slice(startIndex, lastIndex)
    .filter((item) =>
      item.name.toLowerCase().includes(employees.toLowerCase())
    );
  return (
    <>
      <div className="container overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="border bg-[#f5f5f5] text-sm w-full dark:bg-[#1e2228]/[0.5] ">
              <th colSpan={4}></th>
              <th colSpan={2} className="">
                <div className=" flex items-center justify-end right-0 pr-4">
                  <input
                    className=" p-1 m-3 font-normal bg-[#f5f5f5] dark:bg-[#1e2228]/[0.000001] border-b-2
                     border-[#aaa] outline-none text-[#999] focus:border-[#2ab9bf]"
                    type="text"
                    onChange={(e) => handleEmployees(e.target.value)}
                    placeholder="Search Employee"
                  />
                  <span className=" text-xl cursor-pointer">
                    <IoSearchOutline />
                  </span>
                </div>
              </th>
            </tr>
            <tr className="border text-[#b1b1b1] text-sm w-full">
              <th className="p-4 font-medium">Employee</th>
              <th className="p-4 font-medium">Designation</th>
              <th className="p-4 font-medium">Country</th>
              <th className="p-4 font-medium">Hire Date</th>
              <th className="p-4 font-medium">Reports To</th>
              <th className="p-4 font-medium">Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                <tr
                  key={item.id}
                  className="border text-xs text-[#454545] text-center dark:text-[#b1b1b1] hover:bg-[#eee] dark:hover:bg-[#1E2228] w-full"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3 pl-1 md:pl-[25%]">
                      <span className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                        <Image
                          className=" w-full h-full object-cover"
                          src={item.img}
                          width={100}
                          height={100}
                          alt=""
                        ></Image>
                      </span>
                      {item.name}
                    </div>
                  </td>
                  <td className="p-4">{item.designation}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        <span>
                          <MdOutlineLocationOn />
                        </span>
                        {item.country}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{item.hireDate}</td>
                  <td className="p-4">{item.reportsTo}</td>
                  <td className="p-4">{item.employeeID}</td>
                </tr>
              </React.Fragment>
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
                        } w-7 h-7 flex items-center justify-center rounded-full 
                        text-sm transition-colors cursor-pointer`}
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
                {selectedBoxId} <span>of 2 pages (15 items)</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
