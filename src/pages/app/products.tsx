import { getSellerProducts } from "@/api/get-products";
import ProductsFilter from "@/components/products-filter";
import ProductsList from "@/components/products-list";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export default function Products() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const { data: sellerProductsResponse } = useQuery({
    queryKey: ["seller-products", search, status],
    queryFn: () => getSellerProducts({ search, status }),
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-body-sm text-gray-300">Filtrar</h2>
      </div>
      <div className="flex gap-6 justify-between">
        <ProductsFilter />
        {sellerProductsResponse && (
          <ProductsList products={sellerProductsResponse.products} />
        )}
      </div>
    </>
  );
}
