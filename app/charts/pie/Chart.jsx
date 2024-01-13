import PieChart from "@/app/components/charts/PieChart";
import { useSelector } from "react-redux";

export default function Chart() {
  const bg = useSelector((state) => state.color.selectedBgColor);
  const pieChartData = {
    labels: [],
    datasets: [
      {
        label: "",
        data: [15, 25, 14, 17, 13, 8],
        backgroundColor: [
          "#108EF3",
          "#FB6D8E",
          "#01B2D5",
          "#725FFE",
          "#1B4CB7",
          "#FD9D77",
        ],
        borderColor: [
          "#108EF3",
          "#FB6D8E",
          "#01B2D5",
          "#725FFE",
          "#1B4CB7",
          "#FD9D77",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="overflow-auto w-[700px] h-[400px]">
      <PieChart data={pieChartData} />
    </div>
  );
}
