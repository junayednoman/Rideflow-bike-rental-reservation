import { TRental } from "@/types";
import Chart from "react-apexcharts";
const RidingTimes = ({ rentalData }: { rentalData: TRental[] }) => {
  const hours = rentalData?.map((item: TRental) =>
    Number((item?.totalCost / item?.bikeId?.pricePerHour).toFixed(2))
  );

  const userGrowthData = {
    series: [
      {
        name: "Riding Hours",
        data: hours, // example counts per day
      },
    ],
  };

  const userGrowthOptions = {
    chart: {
      type: "line",
      height: 350,
      animations: {
        enabled: true, // Enable animations
        easing: "easeinout", // Easing function for the animation
        speed: 800, // Animation duration in milliseconds
        animateGradually: {
          enabled: true,
          delay: 150, // Delay between each data point's animation
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350, // Speed for dynamic animation when updating the chart
        },
      },
    },
    xaxis: {
      categories: hours.map(
        (_item, i) =>
          `${
            (i === 0 && "1st") ||
            (i === 1 && "2nd") ||
            (i === 2 && "3rd") ||
            (i === 3 ? "4rth" : `${i + 1}th`)
          }`
      ),
    },
    title: {
      text: "Riding times by hour",
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div>
      <Chart
        options={userGrowthOptions as ApexCharts.ApexOptions}
        series={userGrowthData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default RidingTimes;
