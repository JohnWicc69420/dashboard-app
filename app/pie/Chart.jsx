import PieChart from "@/app/components/charts/PieChart";
import { TiChartPie } from "react-icons/ti";

export default function Chart() {
  const pieChartData = {
    labels: [
      "Labour",
      "Legal",
      "Production",
      "License",
      "Facilities",
      "Taxes and Insurance",
    ],
    datasets: [
      {
        data: [18, 8, 15, 11, 18, 14, 16],
        backgroundColor: [
          "#01a6ac",
          "#404044",
          "#2e78d0",
          "#e9738e",
          "#fcb881",
          "#6c9f46",
          "#e195bb",
        ],
        borderColor: [
          "#01a6ac",
          "#404044",
          "#2e78d0",
          "#e9738e",
          "#fcb881",
          "#6c9f46",
          "#e195bb",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "45%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="h-full w-[500px] flex flex-col items-center px-8">
      <span className=" pb-10 text-lg">Project Cost Breakdown</span>
      <PieChart data={pieChartData} options={options} />
      <span className=" pt-8 flex flex-row gap-3">
        <span className="flex flex-row items-center gap-1">
          <div className=" text-[#01a6ac] ">
            <TiChartPie />
          </div>
          <span>Labour</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#404044]">
            <TiChartPie />
          </div>
          <span>Legal</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#2e78d0]">
            <TiChartPie />
          </div>
          <span>Production</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#e9738e]">
            <TiChartPie />
          </div>
          <span>License</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#fcb881]">
            <TiChartPie />
          </div>
          <span>Facilities</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#6c9f46]">
            <TiChartPie />
          </div>
          <span>Taxes</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#e195bb]">
            <TiChartPie />
          </div>
          <span>Insurance</span>
        </span>
      </span>
    </div>
  );
}
