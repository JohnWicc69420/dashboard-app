import Link from "next/link";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import { useSelector } from "react-redux";

export default function Revenue() {
  const bgColor = useSelector((state) => state.color.selectedBgColor);
  const textColor = useSelector((state) => state.color.selectedTextColor);
  const bgChart = bgColor.slice(4, 11);

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

  const chart2Data = {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "",
        data: [1, 3, 5, 3, 6],
        backgroundColor: "rgba(255, 255, 255, 1)",
        barThickness: 56,
      },
    ],
  };

  const chart2Options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
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
    <>
      <div className=" flex xl:flex-row flex-col items-center mt-6 gap-4">
        <div
          className="bg-[#fff] dark:bg-[#33373D] dark:text-[#CED2D8]
           p-4 rounded-xl shadow-lg 
        left flex flex-col"
        >
          <div className="title flex items-center justify-between mb-6">
            <span className=" font-semibold">Revenue Updates</span>
            <span className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#404040]"></div>
                <span className="text-[#606060] text-sm">Expense</span>
              </span>
              <span className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${bgColor} `}></div>
                <span className={`${textColor} text-sm`}>Budget</span>
              </span>
            </span>
          </div>
          <div
            className="container flex md:flex-row flex-col items-center
           justify-around gap-20"
          >
            <div className="updates flex pl-6 items-start flex-col gap-6">
              <div className=" flex items-start">
                <span className="flex flex-col">
                  <span className=" font-semibold text-lg">$93,438</span>
                  <span className=" text-[#808080] text-sm">Budget</span>
                </span>
                <span
                  className=" ml-2 mt-1 bg-green-400 text-[#fff] 
                text-xs py-1 px-2 rounded-xl"
                >
                  23%
                </span>
              </div>
              <span className="flex flex-col">
                <span className=" font-semibold text-lg">$48,487</span>
                <span className=" text-[#808080] text-sm">Expense</span>
              </span>
              <div>
                <Link href="/charts/line">
                  <div className="lineChart h-[100px] mb-7">
                    <LineChart
                      options={lineChartOptions}
                      data={lineChartData}
                    />
                  </div>
                </Link>
                <div
                  className={`mt-3 w-[160px] cursor-pointer xl:mt-5 text-center text-[#fff]
                   text-sm ${bgColor} py-3 px-2 rounded-xl`}
                >
                  Download Report
                </div>
              </div>
            </div>
            <div className="h-[300px] w-[1px] bg-[#808080] hidden md:block"></div>
            <Link href="/charts/bar">
              <div className=" h-[325px] w-[325px]">
                <BarChart options={chart1Options} data={chart1Data} />
              </div>
            </Link>
          </div>
        </div>
        <div className="right flex flex-col items-center gap-2">
          <Link href="/charts/bar">
            <div
              className={`top ${bgColor} h-[200px] w-[350px] shadow-lg text-[#fff] p-3 
          pt-6 rounded-xl flex flex-col items-start`}
            >
              <div className="title  flex flex-row items-start justify-between w-full">
                <span className=" text-lg font-medium">Earnings</span>
                <div className="flex items-start flex-col">
                  <span className="text-lg font-medium">$63,448.78</span>
                  <span className=" text-xs text-[#f5f5f5]">
                    Monthly revenue
                  </span>
                </div>
              </div>
              <div className="bars ">
                <div className="h-[90px] mt-7">
                  <BarChart options={chart2Options} data={chart2Data} />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/charts/pie">
            <div
              className="bottom bg-[#fff] dark:bg-[#33373D] dark:text-[#CED2D8] 
          flex h-[200px] w-[350px] shadow-lg rounded-xl p-3 items-center 
          justify-around flex-row "
            >
              <div className="title flex items-start flex-col">
                <span className="text-xl font-medium">$43,487</span>
                <span className="text-[#919191] text-sm">Yearly sales</span>
              </div>
              <div className="pieChart">
                <div className="w-[100px] h-[100px]">
                  <PieChart data={pieChartData} options={null} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
