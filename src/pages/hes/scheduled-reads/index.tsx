import React from 'react';
import GraphComponent from './graphReports';
import { useGetScheduledReportsQuery } from '../../../store/hes/hesApi'; // Adjust path accord

const ScheduledReads = () => {
  const { data } = useGetScheduledReportsQuery({ searchQuery: '?some-query' });

  if (!data) return <div>Loading...</div>;

  return (
    <div className="px-5 py-3 w-full">
            <GraphComponent chartData={data.chartData} />

    </div>
  )
}

export default ScheduledReads
