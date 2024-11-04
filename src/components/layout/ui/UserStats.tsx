import { BookText, TimerIcon } from "lucide-react";
import DStatCard from "./DStatCard";
import { FaMoneyBill } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const items = [
  {
    title: "Total Rents",
    number: 6,
    icon: <BookText size={30} className="text-3xl text-[#22C55E]" />,
    color: "#E8F9EF",
  },
  {
    title: "Total Spent",
    number: 521,
    icon: <FaMoneyBill size={30} className="text-3xl text-[#5A66F1]" />,
    color: "#EEEFFE",
    prefix: "$",
  },
  {
    title: "Total Hours",
    number: 245,
    icon: <TimerIcon size={30} className="text-3xl text-[#fec022]" />,
    color: "#fec02225",
  },
  {
    title: "Total Spots",
    number: 7,
    icon: <FaLocationDot size={30} className="text-3xl text-[#60A5FA]" />,
    color: "#EFF6FE",
  },
];

const UserStats = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:gap-6 gap-4">
      {items?.map((item) => (
        <DStatCard key={item?.title} {...item} />
      ))}
    </div>
  );
};

export default UserStats;
