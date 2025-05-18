import { ProductResponse, TProductStatus } from "@/interfaces/seller-products";
import { api } from "@/lib/axios";

interface UpdateProductBody {
  productId: string;
  status: TProductStatus;
}

export async function updateProductStatus({
  productId,
  status,
}: UpdateProductBody) {
  const response = await api.patch<ProductResponse>(
    `/products/${productId}/${status}`
  );
  return response.data;
}
