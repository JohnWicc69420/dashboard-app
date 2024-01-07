"use client";
import Settings from "../components/settings/Settings";
import { IoSettingsOutline } from "react-icons/io5";
import { setOpenSettings } from "@/redux/features/settingsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Line() {
  const selectedColor = useSelector((state) => state.color.selectedBgColor);
  const openSettings = useSelector((state) => state.settings.openSettings);

  const dispatch = useDispatch();
  const handleOpenSettings = () => {
    dispatch(setOpenSettings(!openSettings));
  };

  return (
    <>
      <span
        onClick={handleOpenSettings}
        className={`cursor-pointer fixed bottom-4 right-4 text-[#fff] flex items-center justify-center
        text-2xl ${selectedColor} w-[50px] h-[50px] rounded-full`}
      >
        <IoSettingsOutline />
      </span>
      {openSettings && <Settings handleSettings={handleOpenSettings} />}
      <div
        className={`${
          openSettings ? "brightness-50" : ""
        } bg-[#F9F9F9] dark:text-[#B1B1B1] transition-color  dark:bg-[#1E2228] w-full h-full md:pl-[285px]`}
      >
        Line
      </div>
    </>
  );
}
