import { TRental } from "@/types";
import Chart from "react-apexcharts";
const RevenueGrowth = ({ rentalData }: { rentalData: TRental[] }) => {
  const revenues = rentalData
    ?.slice(rentalData?.length - 10, rentalData?.length)
    ?.map((item) => Number(item.totalCost.toFixed(1)));

  const RevenueGrowthData = {
    series: [
      {
        name: "Revenue",
        data: revenues, // example counts per day
      },
    ],
  };

  const RevenueGrowthOptions = {
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
      categories: revenues.map(
        (item, i) =>
          `${
            (i === 0 && "1st") ||
            (i === 1 && "2nd") ||
            (i === 2 && "3rd") ||
            (i === 3 ? "4rth" : `${i + 1}th`)
          }`
      ),
    },
    title: {
      text: "Revenue of the last 10 rentals",
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
        options={RevenueGrowthOptions as ApexCharts.ApexOptions}
        series={RevenueGrowthData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default RevenueGrowth;
