import { SellerProduct } from "@/interfaces/seller-products";
import { formatPrice } from "@/lib/helper";
import { Link } from "react-router";
import StatusTag from "./status-tag";

interface ProductCardProps {
  product: SellerProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-col gap-1 p-1 rounded-[20px] bg-white border-2 border-transparent hover:border-blue-base">
        <div className="h-[9rem] relative rounded-[1rem] overflow-hidden">
          <div className="absolute top-0 left-0 right-0">
            <img
              src={product.attachments[0].url}
              alt={product.title}
              height="9rem"
              width="100%"
              className="object-cover"
            />
          </div>
          <div className="absolute top-2 right-2 flex gap-1">
            <StatusTag status={product.status} />
            <div className="flex items-center px-2 py-1 rounded-full bg-gray-400 text-white uppercase text-label-sm">
              {product.category.title}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-3 pt-3 pb-4">
          <div className="flex flex-row gap-4 justify-between items-center">
            <span className="text-subtitle text-gray-400">{product.title}</span>
            <div className="flex gap-1 items-baseline text-gray-500">
              <small className="text-label-md">R$</small>
              <span className="font-dm-sans text-[1.125rem]">
                {formatPrice(product.priceInCents)}
              </span>
            </div>
          </div>
          <div className="text-body-sm text-gray-300">
            {product.description}
          </div>
        </div>
      </div>
    </Link>
  );
}
