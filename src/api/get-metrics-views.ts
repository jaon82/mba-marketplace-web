import { api } from "@/lib/axios";

export interface GetMetricsViewsResponse {
  amount: number;
}

export async function getMetricsViews() {
  const response = await api.get<GetMetricsViewsResponse>(
    "/sellers/metrics/views"
  );
  return response.data;
}
