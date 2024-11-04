"use client";
import Chart from "react-apexcharts";
const UserGrowth = () => {
  const userGrowthData = {
    series: [
      {
        name: "New Users",
        data: [5, 7, 12, 8, 15, 18, 20], // example counts per day
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
      categories: [
        "2024-10-01",
        "2024-10-02",
        "2024-10-03",
        "2024-10-04",
        "2024-10-05",
        "2024-10-06",
        "2024-10-07",
      ],
    },
    title: {
      text: "User Growth",
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

export default UserGrowth;
