import BikeBrandsChart from "@/components/layout/ui/BikeBrandsChart";
import RidingTimes from "@/components/layout/ui/RidingTimes";
import RSpinner from "@/components/layout/ui/RSpinner";
import UserStats from "@/components/layout/ui/UserStats";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";

const UserOverview = () => {
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
  return (
    <main>
      <section>
        <UserStats rentalData={rentalData} />
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 mt-16">
          <div className="lg:w-[1000px] md:w-[450px] sm:w-[450px] w-[250px]">
            <RidingTimes rentalData={rentalData} />
          </div>
          <div className="sm:w-[350px] w-[250px]">
            <BikeBrandsChart rentalData={rentalData} />
          </div>
        </div>
        <div className="mt-14">{/* <ManagePosts /> */}</div>
      </section>
    </main>
  );
};

export default UserOverview;
