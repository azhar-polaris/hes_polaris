import { createApi } from "@reduxjs/toolkit/query/react";
import { customBaseQuery, HES_TAG_TYPES } from "../utils";
import { dashboardEndpoints } from "./endpoints/dashboard";
import { liveDataEndPoints } from "./endpoints/live-data";
import { scheduledReportsEndpoints } from "./endpoints/reports";


const hesApi = createApi({
  reducerPath: "hesApi",
  baseQuery: customBaseQuery(`/${import.meta.env.VITE_API_VERSION}/`),
  tagTypes: HES_TAG_TYPES,
  endpoints: (builder) => ({
    ...dashboardEndpoints(builder),
    ...liveDataEndPoints(builder),
    ...scheduledReportsEndpoints(builder),
    
  }),
});

export const { 
  useGetDeviceMetaInfoMetricsQuery,
useGetLiveDataMetricsQuery,
useGetBlockLoadPushDataQuery,
useGetDailyLoadPushDataQuery,
useGetMonthlyBillingDataQuery,
useGetScheduledReportsQuery
 , usePrefetch 
} = hesApi;

export default hesApi;
