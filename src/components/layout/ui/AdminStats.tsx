import { BookPlus, CircleDollarSign, Users } from "lucide-react";
import DStatCard from "./DStatCard";
import { TRental } from "@/types";
import { useGetAllBikesQuery } from "@/redux/api/bikeApi";
import { RiMotorbikeFill } from "react-icons/ri";
import { useGetAllUsersQuery } from "@/redux/api/auth/authApi";

const AdminStats = ({ rentalData }: { rentalData: TRental[] }) => {
  const { data } = useGetAllBikesQuery(undefined);
  const { data: userData } = useGetAllUsersQuery(undefined);
  const bikeData = data?.data?.result;

  const totalRevenue = rentalData
    ?.map((item: TRental) => item?.totalCost)
    ?.reduce((a: number, b: number) => a + b, 0)
    ?.toFixed(0);

  const items = [
    {
      title: "Total Bikes",
      number: bikeData?.length || 0,
      icon: <RiMotorbikeFill size={30} className="text-3xl text-[#22C55E]" />,
      color: "#E8F9EF",
    },
    {
      title: "Total Revenue",
      number: totalRevenue,
      icon: <CircleDollarSign size={30} className="text-3xl text-[#5A66F1]" />,
      color: "#EEEFFE",
      prefix: "$",
    },
    {
      title: "Total Rents",
      number: rentalData?.length,
      icon: <BookPlus size={30} className="text-3xl text-[#fec022]" />,
      color: "#fec02225",
    },
    {
      title: "Total Users",
      number: userData?.data?.length || 0,
      icon: <Users size={30} className="text-3xl text-[#60A5FA]" />,
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

export default AdminStats;
