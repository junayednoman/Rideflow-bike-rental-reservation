import AdvancePayment from "@/pages/dashboard/AdvancePayment";
import BikeDetail from "@/pages/dashboard/BikeDetail";
import Bikes from "@/pages/dashboard/Bikes";
import MyRentals from "@/pages/dashboard/MyRentals";
import PaymentHistory from "@/pages/dashboard/PaymentHistory";
import Profile from "@/pages/dashboard/Profile";
import UserOverview from "@/pages/dashboard/UserOverview";

export const userRoutes = [
  {
    index: true,
    element: <UserOverview />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "bikes",
    element: <Bikes />,
  },
  {
    path: "bikes/:bikeId",
    element: <BikeDetail />,
  },
  {
    path: "payment",
    element: <AdvancePayment />,
  },
  {
    path: "my-rentals",
    element: <MyRentals />,
  },
  {
    path: "payment-history",
    element: <PaymentHistory />,
  },
];
