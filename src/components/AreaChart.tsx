import Chart from "react-apexcharts";

interface AreaChartProps {
  color: string;
  categories: string[];
  series: {
    name?: string;
    data: number[];
  }[];
  width: number;
  disableHover?: boolean;
}

export const AreaChart = ({
  color,
  categories,
  series,
  width,
  disableHover,
}: AreaChartProps) => {
  const areaChartData = {
    series,
    options: {
      colors: [color],
      xaxis: {
        categories,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        labels: {
          style: {
            colors: "#bbb",
            // cssClass: "" // custom CSS class
          },
        },
      },
      yaxis: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        colors: [color],
        width: 2,
      },
      fill: {
        colors: [color, "#fff"],
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.1,
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        colors: [color],
        hover: {
          size: 5,
        },
      },
    },
  };

  return (
    <div
      className="AreaChart"
      style={{ pointerEvents: disableHover ? "none" : "auto" }}
    >
      <Chart
        options={areaChartData.options}
        series={areaChartData.series}
        type="area"
        width={width}
      />
    </div>
  );
};
