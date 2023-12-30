"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Budget",
      data: [220, 250, 285, 310, 310, 310, 310], // the data values for product B
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      barThickness: 30,
    },
  ],
};

export default function BarChart() {
  return (
    <div className=" h-[375px] w-[375px]">
      <Bar options={options} data={data} />
    </div>
  );
}
