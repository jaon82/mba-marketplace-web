import ProductCard from "./product-card";

export default function ProductsList() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
