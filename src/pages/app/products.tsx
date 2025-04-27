import Graph from "@/components/graph";
import ProductsFilter from "@/components/products-filter";

export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-body-sm text-gray-300">Filtrar</h2>
      </div>
      <div className="flex gap-6 justify-between">
        <ProductsFilter />
        <Graph />
      </div>
    </>
  );
}
