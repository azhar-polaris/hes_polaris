// PieChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

type PieChartProps = {
  labels: string[];
  series: number[];
  title?: string;
  colors?: string[];
};

const PieChart: React.FC<PieChartProps> = ({ labels, series, title, colors }) => {
  const options: ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels,
    colors: colors || ['#0A3690', '#FF5A5A', '#FFC32E', '#00C4B4', '#9966FF', '#FF9F40'],
    legend: {
      position: 'right',
      labels: {
        colors: ['#333'],
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(0)}%`,
      style: {
        fontSize: '14px',
      },
    },
    title: {
      text: title,
      align: 'center',
    },
  };

  return (
    <div className="w-full max-w-full mx-auto sm:h-64 md:h-72 lg:h-96 xl:h-96 lg:w-5/6 xl:w-full">
        <div style={{
        color:'#0A3690'
      }} className='font-bold mb-2'>{title&&title}</div>
        <div className='w-full h-0 border border-1'></div>
      <Chart options={options} series={series} type="pie"  width="100%" 
        height="100%"  />
    </div>
  );
};

export default PieChart;

