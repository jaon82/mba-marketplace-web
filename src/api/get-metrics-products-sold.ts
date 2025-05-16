import { api } from "@/lib/axios";

export interface GetMetricsProductsSoldResponse {
  amount: number;
}

export async function getMetricsProductsSold() {
  const response = await api.get<GetMetricsProductsSoldResponse>(
    "/sellers/metrics/products/sold"
  );
  return response.data;
}
