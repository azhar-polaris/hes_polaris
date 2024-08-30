// Import necessary types and functions
import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { scheduledReportsResponse, ChartData } from "../types/records/scheduleReports"; // Import your types
import { CACHING_TIME } from "@/store/utils";
import { transformDataForChart } from "../../utils/transformData"; // Import the transform function

// Define the scheduledReportsEndpoints
export const scheduledReportsEndpoints = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      NonNullable<unknown>,
      FetchBaseQueryMeta
    >,
    string,
    "hesApi"
  >
) => ({
  getScheduledReports: builder.query<{ chartData: ChartData; originalData: scheduledReportsResponse['data'] }, { searchQuery: string }>({
    query: ({ searchQuery }) => ({
      url: `command-execution/scheduled-command-execution-history`,
      method: "GET",
    }),
    transformResponse: (response: scheduledReportsResponse) => {
      // Check if the response was successful
      if (response.success) {
        // Transform the data for chart usage
        const chartData = transformDataForChart(response.data);
        // Return both the chart data and the original data
        return { chartData, originalData: response.data };
      }
      // Handle unsuccessful response by returning empty data structures
      return { chartData: {}, originalData: { records: [], count: 0 } };
    },
    providesTags: [],
    keepUnusedDataFor: CACHING_TIME,
  }),
});












































// import { EndpointBuilder } from "@reduxjs/toolkit/query";
// import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
// import { BaseQueryFn } from "@reduxjs/toolkit/query";
// import { DeviceMetaInfoMetricsResponse } from "../types";
// import { CACHING_TIME } from "@/store/utils";

// export const scheduledReportsEndpoints = (
//   builder: EndpointBuilder<
//     BaseQueryFn<
//       string | FetchArgs,
//       unknown,
//       FetchBaseQueryError,
//       NonNullable<unknown>,
//       FetchBaseQueryMeta
//     >,
//     string,
//     "hesApi"
//   >
// ) => ({
//     getScheduledReports: builder.query<DeviceMetaInfoMetricsResponse, {searchQuery: string }>({
//         query: ({searchQuery}) => ({
//           url: `command-execution/scheduled-command-execution-history${searchQuery}`,
//           method: "GET",
//         }),
//         providesTags: [],
//         keepUnusedDataFor: CACHING_TIME,
//     }),
// });


