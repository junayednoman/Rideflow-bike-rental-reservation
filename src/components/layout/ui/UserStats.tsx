import { BookText, TimerIcon } from "lucide-react";
import DStatCard, { TStatCardProps } from "./DStatCard";
import { FaMoneyBill } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TRental } from "@/types";

const UserStats = ({ rentalData }: { rentalData: TRental[] }) => {
  const spent = rentalData
    ?.map((item: TRental) => item?.totalCost)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(0);
  const totalHours = rentalData
    ?.map((item: TRental) => item?.totalCost / item?.bikeId?.pricePerHour)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(1);

  const items: TStatCardProps[] = [
    {
      title: "Total Rents",
      number: rentalData?.length,
      icon: <BookText size={30} className="text-3xl text-[#22C55E]" />,
      color: "#E8F9EF",
    },
    {
      title: "Total Spent",
      number: Number(spent),
      icon: <FaMoneyBill size={30} className="text-3xl text-[#5A66F1]" />,
      color: "#EEEFFE",
      prefix: "$",
    },
    {
      title: "Total Hours",
      number: Number(totalHours),
      icon: <TimerIcon size={30} className="text-3xl text-[#fec022]" />,
      color: "#fec02225",
    },
    {
      title: "Long Trips",
      number: 3,
      icon: <FaLocationDot size={30} className="text-3xl text-[#60A5FA]" />,
      color: "#EFF6FE",
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:gap-6 gap-4">
      {items?.map((item) => (
        <DStatCard key={item?.title} {...item} />
      ))}
    </div>
  );
};

export default UserStats;
