import BarChart from "@/app/components/charts/BarChart";
import { RiBarChartFill } from "react-icons/ri";

export default function Chart() {
  const chart1Data = {
    labels: ["Feb", "Apr", "Jun", "July"],
    datasets: [
      {
        label: "USA",
        data: [35, 45, 66, 84],
        borderColor: "#725FFE",
        backgroundColor: "#725FFE",
        borderWidth: 2,
      },
      {
        label: "China",
        data: [28, 47, 62, 88],
        borderColor: "#FB6D8E",
        backgroundColor: "#FB6D8E",
        borderWidth: 2,
      },
      {
        label: "Brazil",
        data: [35, 45, 51, 78],
        borderColor: "#1B4CB7",
        backgroundColor: "#1B4CB7",
        borderWidth: 2,
      },
      {
        label: "Germany",
        data: [42, 58, 62, 80],
        borderColor: "#01B2D5",
        backgroundColor: "#01B2D5",
        borderWidth: 2,
      },
    ],
  };
  const chart1Options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className=" w-full h-[450px] flex flex-col items-center">
      <div className="w-[900px] h-[400px]">
        <BarChart options={chart1Options} data={chart1Data} />
      </div>
      <span className=" pt-8 flex flex-row gap-3">
        <span className="flex flex-row items-center gap-2">
          <div className=" text-[#725FFE]">
            <RiBarChartFill />
          </div>
          <span>USA</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className="  text-[#FB6D8E] ">
            <RiBarChartFill />
          </div>
          <span>China</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className="  text-[#1B4CB7] ">
            <RiBarChartFill />
          </div>
          <span>Brazil</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className="  text-[#01B2D5] ">
            <RiBarChartFill />
          </div>
          <span>Germany</span>
        </span>
      </span>
    </div>
  );
}
