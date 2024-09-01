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

 export type ChartData = Record<string, { labels: string[]; series: number[] }>;
