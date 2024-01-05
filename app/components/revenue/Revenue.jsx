import BarChart from "../charts/BarChart";

export default function Revenue() {
  const chart1Data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
    datasets: [
      {
        label: "Budget",
        data: [220, 250, 285, 310, 310, 310, 310], // the data values for product B
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        barThickness: 30,
      },
      {
        label: "Bud",
        data: [220, 250, 285, 310, 310, 310, 310], // the data values for product B
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        barThickness: 30,
      },
    ],
  };
  return (
    <>
      <div className="flex xl:flex-row flex-col items-center mt-6 gap-4">
        <div className="left flex flex-col">
          <div className="title flex items-center">
            <span>Revenue Updates</span>
            <span>
              <span>Expense</span>
              <span>Budget</span>
            </span>
          </div>
          <div className="container flex flex-row items-center">
            <div className="updates">
              <span className="flex flex-col">
                <span>$93,438</span>
                <span>Budget</span>
              </span>
              <span className="flex flex-col">
                <span>$48,487</span>
                <span>Expense</span>
              </span>
              <div>
                <div className="lineChart">lineChart</div>
                <div>Download Report</div>
              </div>
            </div>
            <div className="chart">
              <BarChart data={chart1Data} />
            </div>
          </div>
        </div>
        <div className="right flex flex-col items-center gap-2">
          <div className="top bg-[#01B4D8] h-[200px] w-[350px] text-[#fff] p-3 pt-6 rounded-xl flex flex-col items-start">
            <div className="title  flex flex-row items-start justify-between w-full">
              <span className=" text-lg font-medium">Earnings</span>
              <div className="flex items-start flex-col">
                <span className="text-lg font-medium">$63,487.38</span>
                <span className=" text-xs text-[#f5f5f5]">Monthly revenue</span>
              </div>
            </div>
            <div className="bars">bars</div>
          </div>
          <div className="bottom flex h-[200px] w-[350px] p-3 items-center justify-around flex-row bg-[#fff] p">
            <div className="title flex items-start flex-col">
              <span className="text-xl font-medium">$43,487</span>
              <span className="text-[#b1b1b1]">Yearly sales</span>
            </div>
            <div className="pieChart">piechart</div>
          </div>
        </div>
      </div>
    </>
  );
}
