import LineChart from "@/app/components/charts/LineChart";
import { useSelector } from "react-redux";

export default function Chart() {
  const bg = useSelector((state) => state.color.selectedBgColor);
  const lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
          stepSize: 20,
        },
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Inflation Rates by Country (2004-2022)",
      },
    },
  };

  const lineChartData = {
    labels: ["2004", "2006", "2010", "2013", "2016", "2018", "2022"],
    datasets: [
      {
        label: "USA",
        data: [19, 35, 48, 45, 66, 71, 84],
        borderColor: "#725FFE",
        backgroundColor: "#725FFE",
        borderWidth: 2,
      },
      {
        label: "China",
        data: [35, 28, 43, 47, 62, 72, 88],
        borderColor: "#FB6D8E",
        backgroundColor: "#FB6D8E",
        borderWidth: 2,
      },
      {
        label: "Brazil",
        data: [30, 35, 42, 45, 51, 65, 78],
        borderColor: "#1B4CB7",
        backgroundColor: "#1B4CB7",
        borderWidth: 2,
      },
      {
        label: "Germany",
        data: [40, 42, 50, 58, 62, 72, 80],
        borderColor: "#01B2D5",
        backgroundColor: "#01B2D5",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="h-[600px] w-[1000px] flex flex-col items-center px-8">
      <LineChart options={lineChartOptions} data={lineChartData} />
      <span className=" pt-8 flex flex-row gap-3">
        <span className="flex flex-row items-center gap-2">
          <div className=" w-[10px] h-[10px] bg-[#725FFE] rounded-full"></div>
          <span>USA</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className=" w-[10px] h-[10px] bg-[#FB6D8E] rounded-full"></div>
          <span>China</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className=" w-[10px] h-[10px] bg-[#1B4CB7] rounded-full"></div>
          <span>Brazil</span>
        </span>
        <span className="flex flex-row items-center gap-2">
          <div className=" w-[10px] h-[10px] bg-[#01B2D5] rounded-full"></div>
          <span>Germany</span>
        </span>
      </span>
    </div>
  );
}
