import Chart from "react-apexcharts";
const BikeBrandsChart = ({
  brandCounts,
  title,
}: {
  brandCounts: Record<string, number>;
  title: string;
}) => {
  // Data for post categories
  const postCategoryData = {
    series: Object.values(brandCounts), // Example data: percentages or count of posts per category
    labels: Object.keys(brandCounts), // Example categories
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
      text: title,
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
