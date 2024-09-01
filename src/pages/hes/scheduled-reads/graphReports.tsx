// GraphComponent.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { cn } from "@/lib/utils";
import { ChartData } from '../../../store/hes/types/records/scheduleReports'; 
type GraphComponentProps = {
    chartData: ChartData;
  };
  
  const GraphComponent: React.FC<GraphComponentProps> = ({ chartData }) => {
    const getChartOptions = (commandName: string): ApexOptions => {
      return {
        chart: {
          type: 'pie',
        },
        labels: chartData[commandName]?.labels || [],
        colors: ['#0A3690', '#FF5A5A', '#FFC32E', '#00C4B4', '#9966FF', '#FF9F40'],
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
      };
    };
  
    const renderCharts = () => {
      return Object.keys(chartData).map((commandName) => (
        <div key={commandName} className={cn(`flex flex-1 gap-12 pt-10 flex-wrap`, "justify-center" )}style={{ width: '300px', margin: '20px' }}>
          <h4>{commandName}</h4>
          <div className="w-[40vw] lg:w-[20vw] flex h-full special-div">
          <Chart
            options={getChartOptions(commandName)}
            series={chartData[commandName]?.series || []}
            type="pie"
            width="280"
          />
          </div>
        </div>
      ));
    };
  
    return (
        <div className="flex gap-x-6">
        {renderCharts()}
      </div>
    );
  };
  
  export default GraphComponent;