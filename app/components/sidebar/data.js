import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { LuLineChart } from "react-icons/lu";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";

export const data = [
  { id: 1, title: "DASHBOARD", icon: "null" },
  { id: 2, title: "Ecommerce", icon: <FiShoppingBag />, link: "/" },
  { id: 3, title: "PAGES", icon: "null" },
  { id: 4, title: "Orders", icon: <IoCartOutline />, link: "/pages/orders" },
  {
    id: 5,
    title: "Employees",
    icon: <MdOutlinePeopleOutline />,
    link: "/pages/employees",
  },
  { id: 6, title: "Customers", icon: <RxPerson />, link: "/pages/customers" },
  { id: 7, title: "CHARTS", icon: "null" },
  { id: 8, title: "Line", icon: <LuLineChart />, link: "/charts/line" },
  { id: 9, title: "Area", icon: <AiOutlineAreaChart />, link: "/charts/area" },
  { id: 10, title: "Bar", icon: <FaRegChartBar />, link: "/charts/bar" },
  { id: 11, title: "Pie", icon: <FiPieChart />, link: "/charts/pie" },
];
