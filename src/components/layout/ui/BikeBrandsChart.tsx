import { TRental } from "@/types";
import Chart from "react-apexcharts";
const BikeBrandsChart = ({ rentalData }: { rentalData: TRental[] }) => {
  const brands = rentalData?.map((item: TRental) => item.bikeId.brand);
  const counts = brands.reduce((acc, brand) => {
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  // Data for post categories
  const postCategoryData = {
    series: Object.values(counts), // Example data: percentages or count of posts per category
    labels: Object.keys(counts), // Example categories
  };

  // Options for the pie chart
  const postCategoryOptions = {
    chart: {
      type: "pie",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 400,
        },
      },
    },
    labels: postCategoryData.labels,
    title: {
      text: "Rented bikes by brand",
      align: "center",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
  };

  return (
    <div>
      <Chart
        options={postCategoryOptions as ApexCharts.ApexOptions}
        series={postCategoryData.series}
        type="pie"
      />
    </div>
  );
};

export default BikeBrandsChart;
