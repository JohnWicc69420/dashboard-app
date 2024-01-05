import BarChart from "../charts/BarChart";

export default function Revenue() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];

  const chart1Data = {
    labels,
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
      <div>
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
        <div className="right">
          <div className="top">
            <div className="title"></div>
            <div className="bars"></div>
          </div>
          <div className="bottom flex items-center flex-row">
            <div className="title"></div>
            <div className="pieChart"></div>
          </div>
        </div>
      </div>
    </>
  );
}
