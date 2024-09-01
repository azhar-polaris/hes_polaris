// GraphComponent.tsx
import React from 'react';
import { cn } from "@/lib/utils";
import PieChart from "../../../../components/customUI/Graph/PieGraph";
import { ChartData } from "../../../../store/hes/types/records/reports";

type GraphComponentProps = {
    chartData: ChartData;
  };
  
  const GraphComponent: React.FC<GraphComponentProps> = ({ chartData }) => {
    const renderCharts = () => {
      return Object.keys(chartData).map((commandName) => (
        <div key={commandName} className="flex-1  bg-white shadow-md rounded-lg p-8 m-4">
                      <h4 className="text-lg font-semibold text-[#0A3690] mb-4">{commandName}</h4>
            <PieChart
              labels={chartData[commandName]?.labels || []}
              series={chartData[commandName]?.series || []}
              title=""
            />
          </div>
      ));
    };
  
    return <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">{renderCharts()}</div>;
  };
  
export default GraphComponent;
