import ProductForm from "@/components/product-form";

export default function NewProduct() {
  return (
    <>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <h1 className="font-dm-sans text-title-md text-gray-500">
            Novo produto
          </h1>
          <h2 className="text-body-sm text-gray-300">
            Cadastre um produto para venda no marketplace
          </h2>
        </div>
      </div>
      <ProductForm />
    </>
  );
}
