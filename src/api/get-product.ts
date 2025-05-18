import { ProductResponse } from "@/interfaces/seller-products";
import { api } from "@/lib/axios";

export async function getProduct(productId: string) {
  const response = await api.get<ProductResponse>(`/products/${productId}`);
  return response.data;
}
