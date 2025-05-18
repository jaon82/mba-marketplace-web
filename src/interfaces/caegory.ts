export interface Category {
  id: string;
  title: string;
  slug: string;
}

export interface CategoriesResponse {
  categories: Category[];
}
