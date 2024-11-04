import { UserOutlined } from "@ant-design/icons";
import { Bike, History, ListTodo } from "lucide-react";
import { NavLink } from "react-router-dom";

export const userMenuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <NavLink to={"/dashboard/user"}>Overview</NavLink>,
  },
  {
    key: "0",
    icon: <UserOutlined />,
    label: <NavLink to={"/dashboard/user/profile"}>User Profile</NavLink>,
  },
  {
    key: "2",
    icon: <Bike size={16} />,
    label: <NavLink to={"/dashboard/user/bikes"}>Bikes</NavLink>,
  },
  {
    key: "3",
    icon: <ListTodo size={16} />,
    label: <NavLink to={"/dashboard/user/my-rentals"}>My Rentals</NavLink>,
  },
  {
    key: "4",
    icon: <History size={16} />,
    label: (
      <NavLink to={"/dashboard/user/payment-history"}>Payment History</NavLink>
    ),
  },
];
