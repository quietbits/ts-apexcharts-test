import { AreaChart } from "./AreaChart";

export const Charts = () => (
  <div>
    <h2>Static chart</h2>
    <AreaChart
      color="#3E1BDB"
      width={500}
      categories={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      series={[
        {
          name: "Data label",
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ]}
      disableHover={true}
    />
    <h2>Interactive chart</h2>
    <p>
      Note: I haven’t found a way how to change the styling of the tooltip.
      <br />
      It might be possible if we need it.
    </p>

    <AreaChart
      color="#20BF6B"
      width={500}
      categories={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      series={[
        {
          name: "Data label",
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
      ]}
    />

    <div>
      <a href="https://apexcharts.com/" target="_blank" rel="noreferrer">
        Charts from ApexCharts
      </a>
    </div>
  </div>
);
