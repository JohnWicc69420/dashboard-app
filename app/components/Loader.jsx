import { useSelector } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  const openSettings = useSelector((state) => state.settings.openSettings);
  const bg = useSelector((state) => state.color.selectedBgColor);
  const bgColor = bg.slice(4, 11);
  return (
    <div
      className={`${
        openSettings ? "brightness-50" : ""
      } bg-[#F9F9F9] dark:bg-[#1E2228] flex items-center 
  justify-center w-full pageSize md:pl-[285px] p-8`}
    >
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color={bgColor}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
