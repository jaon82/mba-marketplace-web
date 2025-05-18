import { api } from "@/lib/axios";

export interface CreateProductBody {
  title: string;
  categoryId: string;
  description: string;
  priceInCents: number;
  attachmentsIds: string[];
}

export async function createProduct({
  attachmentsIds,
  categoryId,
  description,
  priceInCents,
  title,
}: CreateProductBody) {
  const response = await api.post("/products", {
    attachmentsIds,
    categoryId,
    description,
    priceInCents,
    title,
  });
  return response.data;
}
