import { api } from "@/lib/axios";

export interface GetMetricsProductsAvailableResponse {
  amount: number;
}

export async function getMetricsProductsAvailable() {
  const response = await api.get<GetMetricsProductsAvailableResponse>(
    "/sellers/metrics/products/available"
  );
  return response.data;
}
