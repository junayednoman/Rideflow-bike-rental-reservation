import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import RButtonSmall from "@/components/layout/ui/RButtonSmall";
import { useGetMyProfileQuery } from "@/redux/api/auth/authApi";
import {
  useGetRentalsQuery,
  useMakePaymentMutation,
} from "@/redux/api/rentalApi";
import { TBike, TRental, TResponse, TUser } from "@/types";
import handleMutation from "@/utils/handleMutation";
import { Table, Tabs, TabsProps } from "antd";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

export type TTableProps = {
  startTime: string;
  returnTime: string;
  totalCost: number;
  _id: string;
  bikeId: TBike;
};

const MyRentals = () => {
  const location = useLocation();

  const { data, isLoading } = useGetRentalsQuery(
    [{ name: "myRentals", value: true }],
    { pollingInterval: 2000 }
  );

  if (location?.search === "?booking=confirmed") {
    toast.success("🎉 Rental Confirmed!");
    setTimeout(() => {
      window.location.replace(
        "https://rideflow-fawn.vercel.app/dashboard/user/my-rentals"
      );
    }, 1200);
  }

  const paidData = data?.data?.result?.filter(
    (item: TRental) => item.isPaid === true
  );
  const unPaidData = data?.data?.result?.filter(
    (item: TRental) => item.isPaid === false
  );

  const paidRentalItems = paidData?.map(
    ({ startTime, returnTime, totalCost, _id, bikeId }: TTableProps) => ({
      key: _id,
      name: bikeId.name,
      startTime,
      returnTime,
      totalCost,
    })
  );

  const unPaidRentalItems = unPaidData?.map(
    ({ startTime, returnTime, totalCost, _id, bikeId }: TTableProps) => ({
      key: _id,
      name: bikeId.name,
      startTime,
      returnTime,
      totalCost,
    })
  );

  // tab props
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Unpaid",
      children: (
        <UnPaidRentals loading={isLoading} options={unPaidRentalItems} />
      ),
    },
    {
      key: "2",
      label: "Paid",
      children: <PaidRentals loading={isLoading} options={paidRentalItems} />,
    },
  ];
  return (
    <div>
      <DashboardSectionTitle heading="All you rented" />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default MyRentals;

// paid rental table
export const PaidRentals = ({
  options,
  loading,
}: {
  options: TTableProps[];
  loading: boolean;
}) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Return Time",
      dataIndex: "returnTime",
      key: "returnTime",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        dataSource={options}
        columns={columns}
        scroll={{ x: 800 }}
      />
    </div>
  );
};

// unpaid rental table
const UnPaidRentals = ({
  options,
  loading,
}: {
  options: TTableProps[];
  loading: boolean;
}) => {
  const { data } = useGetMyProfileQuery(undefined);
  const usreData = data?.data as TUser;
  const [makePayment] = useMakePaymentMutation();

  // handle payment
  const handlePayment = (totalCost: number, name: string, id: string) => {
    const onSuccess = (
      res: TResponse<{ paymentInitUrl: string; result: TRental[] }>
    ) => {
      if (res?.data?.paymentInitUrl) {
        window.location.href = res?.data?.paymentInitUrl;
      }
    };

    const paymentInfo = {
      total_amount: totalCost,
      currency: "BDT",
      product_name: name,
      product_category: "bike",
      cus_name: usreData?.name,
      cus_email: usreData?.email,
      cus_add1: usreData?.address,
      cus_postcode: usreData?.address,
      cus_country: "Bangladesh",
      cus_phone: usreData?.phone,
    };
    handleMutation(
      { id, paymentInfo },
      makePayment,
      "Payment is under process...",
      onSuccess
    );
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Return Time",
      render: ({ returnTime }: { returnTime: string }) => (
        <p>{returnTime === null ? "Not returned yet" : returnTime}</p>
      ),
      key: "returnTime",
    },
    {
      title: "Total Cost",
      render: ({ totalCost }: { totalCost: number }) => (
        <p>{totalCost === 0 ? "Not calculated yet" : totalCost}</p>
      ),
      key: "totalCost",
    },
    {
      title: "Payment",
      render: ({
        totalCost,
        name,
        key,
      }: {
        totalCost: number;
        name: string;
        key: string;
      }) => (
        <RButtonSmall onClick={() => handlePayment(totalCost, name, key)}>
          Pay Now
        </RButtonSmall>
      ),
      key: "address",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>My Rentals - Rideflow</title>
      </Helmet>
      <Table
        loading={loading}
        dataSource={options}
        columns={columns}
        scroll={{ x: 850 }}
      />
    </div>
  );
};
