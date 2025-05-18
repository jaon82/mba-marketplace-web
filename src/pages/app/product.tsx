import { updateProductStatus } from "@/api/update-product-status";
import ProductForm from "@/components/product-form";
import { Button } from "@/components/ui/button";
import { TProductStatus } from "@/interfaces/seller-products";
import {
  ArrowLeft02Icon,
  Tick02Icon,
  UnavailableIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import { toast } from "sonner";

export default function Product() {
  const { productId } = useParams();
  const { mutateAsync: updateProductStatusFn } = useMutation({
    mutationKey: ["set-product-as-sold"],
    mutationFn: updateProductStatus,
    onSuccess: () => {
      toast.success("Status do produto atualizado com sucesso");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  const handleUpdateProductStatus = async (status: TProductStatus) => {
    await updateProductStatusFn({
      productId: productId!,
      status,
    });
  };

  return (
    <>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <div>
            <Button variant="link" className="px-0">
              <HugeiconsIcon icon={ArrowLeft02Icon} size={24} />
              <Link to="/products">Voltar</Link>
            </Button>
          </div>
          <h1 className="font-dm-sans text-title-md text-gray-500">
            Editar produto
          </h1>
          <h2 className="text-body-sm text-gray-300">
            Gerencie as informações do produto cadastrado
          </h2>
        </div>
        <div className="flex align-bottom gap-4 text-orange-base cursor-pointer [:hover]:text-orange-dark">
          <div
            className="flex gap-2 items-center"
            onClick={() => handleUpdateProductStatus("sold")}
          >
            <HugeiconsIcon icon={Tick02Icon} size={20} />
            <span>Marcar como vendido</span>
          </div>
          <div
            className="flex gap-2 items-center"
            onClick={() => handleUpdateProductStatus("cancelled")}
          >
            <HugeiconsIcon icon={UnavailableIcon} size={20} />
            <span>Desativar anúncio</span>
          </div>
        </div>
      </div>
      <ProductForm />
    </>
  );
}
