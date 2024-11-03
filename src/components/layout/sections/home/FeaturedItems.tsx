import RSectionTitle from "@/components/layout/ui/RSectionTitle";
import RContainer from "../../RContainer";
import ProductCard from "@/components/layout/ui/ProductCard";
import { useGetAllBikesQuery } from "@/redux/api/bikeApi";
import RSpinner from "@/components/layout/ui/RSpinner";
import RNoData from "@/components/layout/ui/RNoData";
import { TBike } from "@/types";

const FeaturedItems = ({ limit = 6 }: { limit?: number }) => {
  const { data, isFetching } = useGetAllBikesQuery([
    { name: "limit", value: limit },
  ]);

  return (
    <section className="lg:py-24 md:py-20 py-16">
      <RContainer>
        <div>
          <RSectionTitle
            subHeading="checkout the bests"
            heading="Featured Bikes"
          />
          {isFetching ? (
            <RSpinner />
          ) : data?.data?.result?.length ? (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-7 gap-5">
              {data?.data?.result
                ?.slice(0, 6)
                ?.map((item: TBike, idx: number) => (
                  <div key={idx}>
                    <ProductCard details={item} />
                  </div>
                ))}
            </div>
          ) : (
            <RNoData />
          )}
        </div>
      </RContainer>
    </section>
  );
};

export default FeaturedItems;
