import BarChart from "@/app/components/charts/BarChart";
import { useSelector } from "react-redux";

export default function Chart() {
  const bg = useSelector((state) => state.color.selectedBgColor);
  const bgChart = bg.slice(4, 11);

  const chart1Data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
    datasets: [
      {
        data: [20, 50, 85, 110, 110, 110, 110],
        backgroundColor: bgChart,
        barThickness: 30,
        stack: "stack1",
      },
      {
        data: [220, 250, 285, 310, 310, 310, 310],
        backgroundColor: "#404040",
        barThickness: 30,
        stack: "stack1",
      },
    ],
  };
  const chart1Options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { display: false },
      y: {
        stacked: true,
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
    <div className="overflow-auto w-[700px] h-[400px]">
      <BarChart options={chart1Options} data={chart1Data} />
    </div>
  );
}
