import BarChart from "@/app/components/charts/BarChart";
import { RiBarChartFill } from "react-icons/ri";

export default function Chart() {
  const chart1Data = {
    labels: ["Feb", "Apr", "Jun", "July"],
    datasets: [
      {
        label: "USA",
        data: [35, 45, 66, 84],
        borderColor: "#B2FFFF",
        backgroundColor: "#B2FFFF",
        borderWidth: 2,
      },
      {
        label: "China",
        data: [28, 47, 62, 88],
        borderColor: "#80FFFF",
        backgroundColor: "#80FFFF",
        borderWidth: 2,
      },
      {
        label: "Brazil",
        data: [35, 45, 51, 78],
        borderColor: "#40FFFF",
        backgroundColor: "#40FFFF",
        borderWidth: 2,
      },
      {
        label: "Germany",
        data: [42, 58, 62, 80],
        borderColor: "#10f8f8",
        backgroundColor: "#10f8f8",
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
          <div className=" text-[#b2ffff]">
            <RiBarChartFill />
          </div>
          <span>USA</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className="  text-[#80ffff] ">
            <RiBarChartFill />
          </div>
          <span>China</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className="  text-[#40ffff] ">
            <RiBarChartFill />
          </div>
          <span>Brazil</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className="  text-[#10cccc] ">
            <RiBarChartFill />
          </div>
          <span>Germany</span>
        </span>
      </span>
    </div>
  );
}
