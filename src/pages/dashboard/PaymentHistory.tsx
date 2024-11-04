import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import { PaidRentals, TTableProps } from "./MyRentals";
import { useGetRentalsQuery } from "@/redux/api/rentalApi";

const PaymentHistory = () => {
  const { data, isLoading } = useGetRentalsQuery([
    { name: "myRentals", value: true },
    { name: "isPaid", value: true },
  ]);

  const paidRentalItems = data?.data?.result?.map(
    ({ startTime, returnTime, totalCost, _id, bikeId }: TTableProps) => ({
      key: _id,
      name: bikeId.name,
      startTime,
      returnTime,
      totalCost,
    })
  );
  return (
    <section>
      <DashboardSectionTitle heading="Payment history" />
      <PaidRentals loading={isLoading} options={paidRentalItems} />
    </section>
  );
};

export default PaymentHistory;
