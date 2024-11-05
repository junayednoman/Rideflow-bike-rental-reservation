import AdminStats from "@/components/layout/ui/AdminStats";
import BikeBrandsChart from "@/components/layout/ui/BikeBrandsChart";
import RSpinner from "@/components/layout/ui/RSpinner";
import UserGrowth from "@/components/layout/ui/UserGrowth";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";
import { TRental } from "@/types";
import Rentals from "./Rentals";

const AdminOverview = () => {
  const { data, isLoading } = useGetRentalsQuery([
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

  const brands = rentalData?.map((item: TRental) => item.bikeId.brand);
  const brandCounts = brands.reduce(
    (acc: Record<string, number>, brand: string) => {
      acc[brand] = (acc[brand] || 0) + 1;
      return acc;
    },
    {} as Record<string, any>
  );
  return (
    <main>
      <section>
        <AdminStats rentalData={rentalData} />
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 mt-16">
          <div className="lg:w-[1000px] md:w-[450px] sm:w-[450px] w-[250px]">
            <UserGrowth rentalData={rentalData} />
          </div>
          <div className="sm:w-[350px] w-[250px]">
            <BikeBrandsChart title="Bikes by brand" brandCounts={brandCounts} />
          </div>
        </div>
        <div className="mt-14">
          <Rentals />
        </div>
      </section>
    </main>
  );
};

export default AdminOverview;
