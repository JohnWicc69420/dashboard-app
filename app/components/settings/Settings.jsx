import { IoCloseCircleOutline } from "react-icons/io5";
import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext, useState } from "react";

export default function Settings({ handleSettings }) {
  const colors = [
    { id: 1, bgColor: "bg-[#108EF3]" },
    { id: 2, bgColor: "bg-[#01B2D5]" },
    { id: 3, bgColor: "bg-[#725FFE]" },
    { id: 4, bgColor: "bg-[#FB6D8E]" },
    { id: 5, bgColor: "bg-[#1B4CB7]" },
    { id: 6, bgColor: "bg-[#FD9D77]" },
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0].bgColor);
  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const { toggle } = useContext(ThemeContext);

  return (
    <div
      className={` settings w-[275px] dark:text-[#CED2D8] dark:bg-[#33373D] transition-all text-[#000] bg-[#fff] z-50 shadow-lg 
p-4 h-[100vh] fixed top-0 right-0  flex flex-col`}
    >
      <div className=" border-b-[2px] py-4 flex justify-between items-center">
        <span className="font-semibold">Settings</span>
        <span
          onClick={handleSettings}
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
              onClick={() => handleSelectedColor(item.bgColor)}
              key={item.id}
              className={`w-[30px] h-[30px] cursor-pointer ${item.bgColor} rounded-full`}
            ></div>
          ))}
        </div>
        <div
          className={`h-[100px] w-[100px] ${selectedColor} mt-6 rounded-full`}
        ></div>
      </div>
    </div>
  );
}
