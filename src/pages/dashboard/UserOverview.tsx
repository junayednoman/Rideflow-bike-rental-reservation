import BikeBrandsChart from "@/components/layout/ui/BikeBrandsChart";
import UserGrowth from "@/components/layout/ui/UserGrowth";
import UserStats from "@/components/layout/ui/UserStats";

const UserOverview = () => {
  return (
    <main>
      <section>
        <UserStats />
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 mt-16">
          <div className="lg:w-[1000px] md:w-[450px] sm:w-[450px] w-[250px]">
            <UserGrowth />
          </div>
          <div className="sm:w-[350px] w-[250px]">
            <BikeBrandsChart />
          </div>
        </div>
        <div className="mt-14">{/* <ManagePosts /> */}</div>
      </section>
    </main>
  );
};

export default UserOverview;
