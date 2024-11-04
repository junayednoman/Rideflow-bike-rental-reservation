import DashboardSectionTitle from "@/components/layout/ui/DashboardSectionTitle";
import { Helmet } from "react-helmet";

const Coupons = () => {
  return (
    <div>
      <Helmet>
        <title>Coupon - Rideflow</title>
      </Helmet>
      <DashboardSectionTitle heading="Manage Coupons" />
    </div>
  );
};

export default Coupons;
