import Chart from "react-apexcharts";
const BikeBrandsChart = () => {
  // Data for post categories
  const postCategoryData = {
    series: [24, 14, 24, 20, 14], // Example data: percentages or count of posts per category
    labels: ["Yamaha", "Ducati", "Honda", "Suzuki", "BMW"], // Example categories
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
      text: "Bikes by brand",
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