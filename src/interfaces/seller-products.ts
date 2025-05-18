export type TProductStatus = "available" | "sold" | "cancelled";

export interface SellerProduct {
  id: string;
  title: string;
  description: string;
  priceInCents: number;
  status: TProductStatus;
  category: {
    id: string;
    title: string;
    slug: string;
  };
  attachments: {
    id: string;
    url: string;
  }[];
}

export interface SellerProductsResponse {
  products: SellerProduct[];
}

export interface ProductResponse {
  product: SellerProduct;
}
