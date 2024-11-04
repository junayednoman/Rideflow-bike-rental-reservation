import { BookText, TimerIcon } from "lucide-react";
import DStatCard from "./DStatCard";
import { FaMoneyBill } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";
import RSpinner from "./RSpinner";
import { TRental } from "@/types";

const UserStats = () => {
  const { data, isLoading } = useGetRentalsQuery([
    { name: "myRentals", value: true },
    { name: "limit", value: 10000 },
    { name: "isPaid", value: true },
  ]);

  if (isLoading) {
    return (
      <div className="pb-16">
        <RSpinner mgT="150" />
      </div>
    );
  }

  const rentalData = data?.data?.result;
  const spent = rentalData
    ?.map((item: TRental) => item?.totalCost)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(0);
  const hours = rentalData
    ?.map((item: TRental) => item?.totalCost / item?.bikeId?.pricePerHour)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(1);

  console.log("data, ", rentalData[0]);

  const items = [
    {
      title: "Total Rents",
      number: rentalData?.length,
      icon: <BookText size={30} className="text-3xl text-[#22C55E]" />,
      color: "#E8F9EF",
    },
    {
      title: "Total Spent",
      number: spent,
      icon: <FaMoneyBill size={30} className="text-3xl text-[#5A66F1]" />,
      color: "#EEEFFE",
      prefix: "$",
    },
    {
      title: "Total Hours",
      number: hours,
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
