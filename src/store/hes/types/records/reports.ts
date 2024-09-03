export type StatusDetail = {
    count: number;
    percentage: number;
  };

export type StatusBreakup = {
    INITIATE: StatusDetail;
    IN_PROGRESS: StatusDetail;
    PENDING: StatusDetail;
    SUCCESS: StatusDetail;
    FAILED: StatusDetail;
    SUCCESS_AFTER_TIMEOUT?: StatusDetail;
    PARTIAL_SUCCESS?: StatusDetail;
    PARTIAL_SUCCESS_AFTER_TIMEOUT?: StatusDetail;
  };

 export type CommandRecord = {
    commandName: string;
    executionStartTime: string;
    totalCommands: number;
    totalMeters: number;
    statusBreakup: StatusBreakup;
    progress: number;
  };

export  interface scheduledReportsResponse {
  
    success: boolean;
    data: {
      records: CommandRecord[];
      count: number;
    };
    error: any | null;
  }

//  export type ChartData = Record<string, { labels: string[]; series: number[] }>;
 export interface ChartDataItem {
  labels: string[];
  series: number[];
  colors?: string[]; // Add the colors property here
}

export interface ChartData {
  [key: string]: ChartDataItem;
}
