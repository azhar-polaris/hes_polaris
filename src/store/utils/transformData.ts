// transformData.ts
import { scheduledReportsResponse, ChartData } from "../hes/types/records/scheduleReports";

export const transformDataForChart = (data: scheduledReportsResponse['data']): ChartData => {
  const chartData: ChartData = {};

  data.records.forEach((record) => {
    const { commandName, statusBreakup } = record;

    if (!chartData[commandName]) {
      chartData[commandName] = {
        labels: [],
        series: [],
      };
    }

    Object.entries(statusBreakup).forEach(([status, { percentage }]) => {
      if (percentage > 0) {
        chartData[commandName].labels.push(status.replace('_', ' ').toLowerCase());
        chartData[commandName].series.push(percentage);
      }
    });
  });

  return chartData;
};
