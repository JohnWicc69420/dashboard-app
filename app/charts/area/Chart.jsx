import BarChart from "@/app/components/charts/BarChart";
import { useSelector } from "react-redux";

export default function Chart() {
  const bg = useSelector((state) => state.color.selectedBgColor);
  const bgChart = bg.slice(4, 11);

  return <div className="overflow-auto w-[700px] h-[400px]"></div>;
}
