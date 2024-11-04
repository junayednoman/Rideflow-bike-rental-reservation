import { BookPlus, BookText, CircleDollarSign, Users } from "lucide-react";
import DStatCard from "./DStatCard";

const items = [
  {
    title: "Total Bikes",
    number: 53,
    icon: <BookText size={30} className="text-3xl text-[#22C55E]" />,
    color: "#E8F9EF",
  },
  {
    title: "Total Revenue",
    number: 5654,
    icon: <CircleDollarSign size={30} className="text-3xl text-[#5A66F1]" />,
    color: "#EEEFFE",
    prefix: "$",
  },
  {
    title: "Total Rents",
    number: 456,
    icon: <BookPlus size={30} className="text-3xl text-[#fec022]" />,
    color: "#fec02225",
  },
  {
    title: "Total Users",
    number: 411,
    icon: <Users size={30} className="text-3xl text-[#60A5FA]" />,
    color: "#EFF6FE",
  },
];

const AdminStats = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:gap-6 gap-4">
      {items?.map((item) => (
        <DStatCard key={item?.title} {...item} />
      ))}
    </div>
  );
};

export default AdminStats;
