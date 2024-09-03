//  import { scheduledReportsResponse, ChartData } from "../hes/types/records/reports";

// export const transformDataForChart = (data: scheduledReportsResponse['data']): ChartData => {
//   const chartData: ChartData = {};

//   data.records.forEach((record) => {
//     const { commandName, statusBreakup } = record;

//     // Initialize chart data for each command name
//     if (!chartData[commandName]) {
//       chartData[commandName] = {
//         labels: ['In Progress', 'Failed', 'Partial Success', 'Success'],
//         series: [0, 0, 0, 0], // Initialize series with 0 percentages
//         colors: ["#FFC32E", "#FF5A5A", "#00C4B4", "#0A3690"], // Add colors here
//       };
//     }

//     // Aggregate percentages into the four categories
//     Object.entries(statusBreakup).forEach(([status, detail]) => {
//       if (detail && 'percentage' in detail) {
//         const { percentage } = detail;

//         switch (status) {
//           case 'IN_PROGRESS':
//             chartData[commandName].series[0] += percentage;
//             break;

//           case 'FAILED':
//             chartData[commandName].series[1] += percentage;
//             break;

//           case 'PARTIAL_SUCCESS':
//           case 'PARTIAL_SUCCESS_AFTER_TIMEOUT':
//             chartData[commandName].series[2] += percentage;
//             break;

//           case 'SUCCESS':
//           case 'SUCCESS_AFTER_TIMEOUT':
//             chartData[commandName].series[3] += percentage;
//             break;

//           default:
//             break;
//         }
//       }
//     });
//   });

//   return chartData;
// };

import { scheduledReportsResponse, ChartData } from "../hes/types/records/reports";

export const transformDataForChart = (data: scheduledReportsResponse['data']): ChartData => {
  const chartData: ChartData = {};

  data.records.forEach((record) => {
    const { commandName, statusBreakup } = record;

    // Initialize chart data for each command name
    if (!chartData[commandName]) {
      chartData[commandName] = {
        labels: ['In Progress', 'Failed', 'Partial Success', 'Success'],
        series: [0, 0, 0, 0], // Initialize series with 0 percentages
        colors: ["#FFC32E", "#FF5A5A", "#00C4B4", "#0A3690"], // Add colors here
      };
    }

    // Aggregate percentages into the four categories
    Object.entries(statusBreakup).forEach(([status, detail]) => {
      if (detail && 'percentage' in detail) {
        const { percentage } = detail;

        switch (status) {
          case 'IN_PROGRESS':
            chartData[commandName].series[0] += percentage;
            break;

          case 'FAILED':
            chartData[commandName].series[1] += percentage;
            break;

          case 'PARTIAL_SUCCESS':
          case 'PARTIAL_SUCCESS_AFTER_TIMEOUT':
            chartData[commandName].series[2] += percentage;
            break;

          case 'SUCCESS':
          case 'SUCCESS_AFTER_TIMEOUT':
            chartData[commandName].series[3] += percentage;
            break;

          default:
            break;
        }
      }
    });
  });

  return chartData;
};
