import { SellerProductsResponse } from "@/interfaces/seller-products";
import { api } from "@/lib/axios";

interface GetSellerProductsParams {
  status?: string | null;
  search?: string | null;
}

export async function getSellerProducts({
  search,
  status,
}: GetSellerProductsParams) {
  const response = await api.get<SellerProductsResponse>("/products/me", {
    params: {
      search,
      status,
    },
  });
  return response.data;
}
