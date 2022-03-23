import { ResponsiveLine } from '@nivo/line';

const Chart = ({ chartData }) => (
  <ResponsiveLine
    data={chartData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: '0',
      max: '27',
    }}
    // yFormat=" >-2.f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      legend: 'Date',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'PHQ-9 Score',
      legendOffset: -40,
      legendPosition: 'middle',
      min: 0,
      max: 27,
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    // legends={[
    //   {
    //     anchor: 'bottom-right',
    //     direction: 'column',
    //     justify: false,
    //     translateX: 100,
    //     translateY: 0,
    //     itemsSpacing: 0,
    //     itemDirection: 'left-to-right',
    //     itemWidth: 80,
    //     itemHeight: 20,
    //     itemOpacity: 0.75,
    //     symbolSize: 12,
    //     symbolShape: 'circle',
    //     symbolBorderColor: 'rgba(0, 0, 0, .5)',
    //     effects: [
    //       {
    //         on: 'hover',
    //         style: {
    //           itemBackground: 'rgba(0, 0, 0, .03)',
    //           itemOpacity: 1,
    //         },
    //       },
    //     ],
    //   },
    // ]}
  />
);
export default Chart;
