import LineChart from "@/app/components/charts/LineChart";
import { MdAreaChart } from "react-icons/md";

export default function Chart() {
  const lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        max: 4,
        ticks: {
          callback: (value) => value + "%",
          stepSize: 1,
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
        text: "Inflation Rates by Country (2002-2011)",
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  const lineChartData = {
    labels: [
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
    ],
    datasets: [
      {
        fill: true,
        label: "Germany",
        data: [1.1, 1.2, 1.1, 1.4, 1.7, 1.1, 2.05, 2.4, 1.4, 1.9],
        borderColor: "rgba(45, 134, 207, .6)",
        backgroundColor: "rgba(45, 134, 207, .6)",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        fill: true,
        label: "France",
        data: [2.1, 1.8, 1.5, 1.7, 2.05, 1.7, 1.1, 2.6, 1.5, 2],
        borderColor: "rgba(101, 101, 101, 1)",
        backgroundColor: "rgba(101, 101, 101, 1)",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        fill: true,
        label: "USA",
        data: [2.2, 2.8, 2.6, 1.1, 2.1, 2.05, 2.7, 3.9, 1.6, 3.1],
        borderColor: "rgba(42, 185, 191, .6)",
        backgroundColor: "rgba(42, 185, 191, .6)",
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  return (
    <div className=" h-full w-[1000px] flex flex-col items-center px-8">
      <LineChart options={lineChartOptions} data={lineChartData} />
      <span className=" pt-8 flex flex-row gap-3 pb-5">
        <span className="flex flex-row items-center gap-2">
          <div className="text-[#2ab9bf] ">
            <MdAreaChart />
          </div>
          <span>USA</span>
        </span>
        <span className="flex flex-row  items-center gap-2">
          <div className=" text-[#656565] ">
            <MdAreaChart />
          </div>
          <span>France</span>
        </span>

        <span className="flex flex-row items-center gap-2">
          <div className="  text-[#2d86cf] ">
            <MdAreaChart />
          </div>
          <span>Germany</span>
        </span>
      </span>
    </div>
  );
}
