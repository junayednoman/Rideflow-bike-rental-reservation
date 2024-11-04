import AdminOverview from "@/pages/dashboard/AdminOverview";
import BikesManagement from "@/pages/dashboard/BikesManagement";
import Coupons from "@/pages/dashboard/Coupons";
import Profile from "@/pages/dashboard/Profile";
import Rentals from "@/pages/dashboard/Rentals";
import UserManagement from "@/pages/dashboard/UserManagement";
import Users from "@/pages/dashboard/Users";

export const adminRoutes = [
  {
    index: true,
    element: <AdminOverview />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "manage-bikes",
    element: <BikesManagement />,
  },
  {
    path: "manage-users",
    element: <UserManagement />,
  },
  {
    path: "rentals",
    element: <Rentals />,
  },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "coupons",
    element: <Coupons />,
  },
];
