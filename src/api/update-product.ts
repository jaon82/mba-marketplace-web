import { api } from "@/lib/axios";

interface ProductBody {
  title: string;
  categoryId: string;
  description: string;
  priceInCents: number;
  attachmentsIds: string[];
}

interface UpdateProductBody {
  productId: string;
  productData: ProductBody;
}

export async function updateProduct({
  productId,
  productData,
}: UpdateProductBody) {
  const response = await api.put(`/products/${productId}`, productData);
  return response.data;
}
