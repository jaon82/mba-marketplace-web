import { CategoriesResponse } from "@/interfaces/caegory";
import { api } from "@/lib/axios";

export async function getCategories() {
  const response = await api.get<CategoriesResponse>("/categories");
  return response.data;
}
