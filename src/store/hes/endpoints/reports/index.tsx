import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { scheduledReportsResponse, ChartData } from "../../../hes/types/records/reports"; 
import { CACHING_TIME } from "@/store/utils";
import { transformDataForChart } from "../../../utils/transformData"; 

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
      url: `command-execution/scheduled-command-execution-history${searchQuery}`,
      method: "GET",
    }),
    transformResponse: (response: scheduledReportsResponse) => {
      if (response.success) {
        const chartData = transformDataForChart(response.data);
        return { chartData, originalData: response.data };
      }
      return { chartData: {}, originalData: { records: [], count: 0 } };
    },
    providesTags: [],
    keepUnusedDataFor: CACHING_TIME,
  }),
});