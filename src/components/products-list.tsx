import { SellerProduct } from "@/interfaces/seller-products";
import ProductCard from "./product-card";

interface ProductsListProps {
  products: SellerProduct[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
