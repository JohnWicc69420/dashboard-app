import LineChart from "@/app/components/charts/LineChart";
import { useSelector } from "react-redux";

export default function Chart() {
  const bg = useSelector((state) => state.color.selectedBgColor);
  const bgChart = bg.slice(4, 11);
  const lineChartOptions = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  };

  const lineChartData = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [3, 5, 6, 5, 7],
        borderColor: bgChart,
        backgroundColor: bgChart,
      },
    ],
  };
  return (
    <div className="overflow-auto w-[700px] h-[400px]">
      <LineChart options={lineChartOptions} data={lineChartData} />
    </div>
  );
}
