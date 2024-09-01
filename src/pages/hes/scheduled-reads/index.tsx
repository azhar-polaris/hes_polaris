// ScheduledReads.tsx
import React, { useState } from 'react';
import GraphComponent from './includes/graphReports'; // Ensure the path matches your file structure
import { useGetScheduledReportsQuery } from '../../../store/hes/hesApi';
import ListReports from './includes/listReports';
import GraphView from '@/components/svg/GraphView';
import ListView from '@/components/svg/ListView';

const ScheduledReads = () => {
  const { data } = useGetScheduledReportsQuery({ searchQuery: '?some-query' });
  const [view, setView] = useState<string>('graph');

  if (!data) return <div>Loading...</div>;


  

  return (
    <div className="px-5 py-3 w-full">
        <div className="flex relative flex-col mt-8">
    <div className="flex justify-between items-center ">
          <h1 className="capitalize secondary-title lg:main-title">
            <span className="font-bold text-[#0A3690]">Reports</span>
          </h1>
          <div
            className="cursor-pointer p-2 bg-blue-800 rounded-full hover:bg-gray-400 transition-colors"
            onClick={() => {
              setView(view === 'graph' ? 'table' : 'graph');
            }}
          >
            {view === 'table' && <div className="w-6 h-6 text-[#0A3690]"> <GraphView/></div>}
            {view === 'graph' && <div className="w-6 h-6 text-[#0A3690]"><ListView/> </div>}
          </div>
        </div>
        <div className="overflow-x-scroll">
          {view === 'table' && (
            <ListReports search={''} />
          )}
          {view === 'graph' && <GraphComponent chartData={data.chartData} />}
        </div>
      </div>
    </div>
  );
};

export default ScheduledReads;
