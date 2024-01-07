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
  { id: 2, title: "Ecommerce", icon: <FiShoppingBag /> },
  { id: 3, title: "PAGES", icon: "null" },
  { id: 4, title: "Orders", icon: <IoCartOutline />, link: "/orders" },
  {
    id: 5,
    title: "Employees",
    icon: <MdOutlinePeopleOutline />,
    link: "/employees",
  },
  { id: 6, title: "Customers", icon: <RxPerson />, link: "/customers" },
  { id: 7, title: "CHARTS", icon: "null" },
  { id: 8, title: "Line", icon: <LuLineChart /> },
  { id: 9, title: "Area", icon: <AiOutlineAreaChart /> },
  { id: 10, title: "Bar", icon: <FaRegChartBar /> },
  { id: 11, title: "Pie", icon: <FiPieChart /> },
];
