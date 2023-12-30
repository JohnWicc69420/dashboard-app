import { IoCloseCircleOutline } from "react-icons/io5";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext, useState } from "react";
import {
  selectBgColor,
  selectTextColor,
} from "../../../redux/features/colorSlice";
import { IoIosCheckmark } from "react-icons/io";
import { setOpenSettings } from "@/redux/features/settingsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Settings() {
  const { toggle } = useContext(ThemeContext);
  const colors = [
    { id: 1, textColor: "text-[#108EF3]", bgColor: "bg-[#108EF3]" },
    { id: 2, textColor: "text-[#01B2D5]", bgColor: "bg-[#01B2D5]" },
    { id: 3, textColor: "text-[#725FFE]", bgColor: "bg-[#725FFE]" },
    { id: 4, textColor: "text-[#FB6D8E]", bgColor: "bg-[#FB6D8E]" },
    { id: 5, textColor: "text-[#1B4CB7]", bgColor: "bg-[#1B4CB7]" },
    { id: 6, textColor: "text-[#FD9D77]", bgColor: "bg-[#FD9D77]" },
  ];
  // Get the dispatch function from the useDispatch hook
  const openSettings = useSelector((state) => state.settings.openSettings);
  const dispatch = useDispatch();
  const handleOpenSettings = () => {
    dispatch(setOpenSettings(!openSettings));
  };

  // Define a function to handle the color selection
  const handleSelectedBgColor = (color) => {
    // Dispatch the selectColor action with the color as payload
    dispatch(selectBgColor(color));
  };

  const handleSelectedTextColor = (color) => {
    // Dispatch the selectColor action with the color as payload
    dispatch(selectTextColor(color));
  };

  const [selectedBoxId, setSelectedBoxId] = useState(colors[0].id);
  const handleSelectedBoxId = (id) => {
    setSelectedBoxId(id);
  };

  return (
    <div
      className={` settings w-[275px] dark:text-[#CED2D8] dark:bg-[#33373D] text-[#000] bg-[#fff] shadow-lg 
p-4 h-[100vh] fixed top-0 z-50 right-0 flex flex-col`}
    >
      <div className=" border-b-[2px] py-4 flex justify-between items-center">
        <span className="font-semibold">Settings</span>
        <span
          onClick={handleOpenSettings}
          className="text-[#808080] text-2xl cursor-pointer hover:bg-slate-100 rounded-full p-2"
        >
          <IoCloseCircleOutline />
        </span>
      </div>
      <div className="flex flex-col border-b-[2px] py-4 gap-2">
        <span className="font-semibold">Theme Option</span>
        <span className="flex items-center gap-2">
          <input
            className=" cursor-pointer"
            type="radio"
            id="light"
            name="theme"
            value="light"
            onChange={toggle}
          />
          <label for="light">Light</label>
        </span>
        <span className="flex items-center gap-2">
          <input
            className=" cursor-pointer"
            type="radio"
            id="dark"
            name="theme"
            value="dark"
            onChange={toggle}
          />
          <label for="dark">Dark</label>
        </span>
      </div>
      <div className="flex flex-col py-4">
        <span className="font-semibold pb-2">Theme Colors</span>
        <div className="colors flex flex-row gap-2">
          {colors.map((item) => (
            <div
              onClick={() => {
                handleSelectedBgColor(item.bgColor);
                handleSelectedTextColor(item.textColor);
                handleSelectedBoxId(item.id);
              }}
              key={item.id}
              className={`w-[30px] h-[30px] cursor-pointer ${item.bgColor} rounded-full`}
            >
              <span className="flex justify-center">
                {item.id === selectedBoxId ? (
                  <IoIosCheckmark className=" text-3xl text-[#fff]" />
                ) : (
                  ""
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
