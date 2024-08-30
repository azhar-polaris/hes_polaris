// GraphComponent.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { ChartData } from '../../../store/hes/types/records/scheduleReports'; // Make sure this path is correct

type GraphComponentProps = {
    chartData: ChartData;
  };
  
  const GraphComponent: React.FC<GraphComponentProps> = ({ chartData }) => {
    // Function to generate chart configurations for each command
    const getChartOptions = (commandName: string): ApexOptions => {
      return {
        chart: {
          type: 'pie',
        },
        labels: chartData[commandName]?.labels || [],
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        legend: {
          position: 'right', // Ensure this is one of the allowed values: 'right', 'top', 'bottom', 'left'
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
  
    // Rendering each chart based on chartData
    const renderCharts = () => {
      return Object.keys(chartData).map((commandName) => (
        <div key={commandName} className="chart-container" style={{ width: '300px', margin: '20px' }}>
          <h4>{commandName}</h4>
          <Chart
            options={getChartOptions(commandName)}
            series={chartData[commandName]?.series || []}
            type="pie"
            width="280"
          />
        </div>
      ));
    };
  
    return (
      <div className="chart-wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderCharts()}
      </div>
    );
  };
  
  export default GraphComponent;