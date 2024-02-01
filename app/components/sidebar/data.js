import { FiShoppingBag } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { LuLineChart } from "react-icons/lu";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";

import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineViewKanban } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidColorFill } from "react-icons/bi";

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
  { id: 7, title: "APPS", icon: "null" },
  {
    id: 8,
    title: "Kanban",
    icon: <MdOutlineViewKanban />,
    link: "/apps/kanban",
  },
  { id: 9, title: "Editor", icon: <FaRegEdit />, link: "/apps/editor" },
  {
    id: 10,
    title: "Color Picker",
    icon: <BiSolidColorFill />,
    link: "/apps/colorPicker",
  },
  { id: 11, title: "CHARTS", icon: "null" },
  { id: 12, title: "Line", icon: <LuLineChart />, link: "/charts/line" },
  { id: 13, title: "Area", icon: <AiOutlineAreaChart />, link: "/charts/area" },
  { id: 14, title: "Bar", icon: <FaRegChartBar />, link: "/charts/bar" },
  { id: 15, title: "Pie", icon: <FiPieChart />, link: "/charts/pie" },
];
