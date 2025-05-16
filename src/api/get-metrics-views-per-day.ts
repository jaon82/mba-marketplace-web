import { api } from "@/lib/axios";

export interface GetMetricsViewsPerDayResponse {
  viewsPerDay: {
    date: string;
    amount: number;
  }[];
}

export async function getMetricsViewsPerDay() {
  const response = await api.get<GetMetricsViewsPerDayResponse>(
    "/sellers/metrics/views/days"
  );
  return response.data;
}
