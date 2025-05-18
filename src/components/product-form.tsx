import { uploadFile } from "@/api/attachments";
import { createProduct } from "@/api/create-product";
import { getCategories } from "@/api/get-categories";
import { getProduct } from "@/api/get-product";
import { updateProduct } from "@/api/update-product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import * as z from "zod";
import FormError from "./form-error";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const productForm = z.object({
  image: z.instanceof(FileList),
  title: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  priceInCents: z.coerce
    .number()
    .min(0.01, { message: "Informe o preço do produto" }),
  description: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  categoryId: z.string({ message: "Campo obrigatório" }),
});

type TProductForm = z.infer<typeof productForm>;

export default function ProductForm() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const { data: productData } = useQuery({
    enabled: !!productId,
    queryKey: ["get-product", productId],
    queryFn: () => getProduct(productId!),
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<TProductForm>({
    resolver: zodResolver(productForm),
  });

  if (productData) {
    setValue("title", productData.product.title);
    setValue("priceInCents", productData.product.priceInCents);
    setValue("description", productData.product.description);
    setValue("categoryId", productData.product.category.id);
  }

  const { data: categoriesResponse } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  const { mutateAsync: saveFile } = useMutation({
    mutationFn: uploadFile,
  });

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: createProduct,
  });

  const { mutateAsync: updateProductFn } = useMutation({
    mutationFn: updateProduct,
  });

  const handleCancel = () => {
    navigate(-1);
  };

  async function handleSaveProduct(data: TProductForm) {
    try {
      const attachmentsIds = [];
      if (!productId && data.image.length === 0) {
        toast.error("Selecione a imagem do produto!");
        return;
      }
      if (productId && data.image.length === 0) {
        attachmentsIds.push(productData?.product.attachments[0].id);
      }
      if (data.image.length > 0) {
        const imageResponse = await saveFile({ files: data.image });
        attachmentsIds.push(imageResponse.data.attachments[0].id);
      }
      if (!productId) {
        await createProductFn({
          attachmentsIds,
          categoryId: data.categoryId,
          description: data.description,
          priceInCents: data.priceInCents,
          title: data.title,
        });
      } else {
        await updateProductFn({
          productId,
          productData: {
            attachmentsIds,
            categoryId: data.categoryId,
            description: data.description,
            priceInCents: data.priceInCents,
            title: data.title,
          },
        });
      }
      toast.success(
        `Produto ${!productId ? "cadastrado" : "atualizado"} com sucesso!`
      );
      navigate("/products");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error(
          `Erro ao ${!productId ? "cadastrar" : "atualizar"} produto.`
        );
      }
    }
  }

  return (
    <form
      className="flex gap-6 w-full"
      onSubmit={handleSubmit(handleSaveProduct)}
    >
      <div className="flex flex-col gap-4 items-center justify-center bg-shape text-orange-base rounded-[12px] min-w-[20rem]">
        <label htmlFor="image">
          {!productId ? (
            <HugeiconsIcon
              icon={ImageUploadIcon}
              size={32}
              className=" cursor-pointer"
            />
          ) : (
            <div className="group relative flex justify-center items-center cursor-pointer text-white">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-2 items-center justify-center z-10 invisible group-hover:visible bg-[#00000099]">
                <HugeiconsIcon
                  icon={ImageUploadIcon}
                  size={32}
                  className="cursor-pointer"
                />
                <div className="text-body-sm text-white max-w-[10rem] text-center">
                  Selecione a imagem do produto
                </div>
              </div>
              <img
                src={productData?.product.attachments[0].url}
                className="max-w-[26rem] z-0"
              />
            </div>
          )}
        </label>
        <input id="image" type="file" {...register("image")} hidden />
        {!productId && (
          <div className="text-body-sm text-gray-300 max-w-[10rem] text-center">
            Selecione a imagem do produto
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-12 bg-white p-6 rounded-[20px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-dm-sans text-title-sm text-gray-300">
            Dados do produto
          </h1>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="relative space-y-5">
                <Input
                  id="title"
                  type="text"
                  placeholder="Nome do produto"
                  {...register("title")}
                  defaultValue={productData?.product.title}
                  error={errors.title?.message}
                />
                <Label htmlFor="title">Título</Label>
              </div>
              <div className="relative space-y-5">
                <Input
                  prefix="R$"
                  id="priceInCents"
                  type="number"
                  placeholder="R$ 0,00"
                  {...register("priceInCents")}
                  defaultValue={productData?.product.priceInCents}
                  error={errors.priceInCents?.message}
                />
                <Label htmlFor="priceInCents">Valor</Label>
              </div>
            </div>
            <div className="relative space-y-5">
              <Input
                id="description"
                type="text"
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
                {...register("description")}
                defaultValue={productData?.product.description}
                error={errors.description?.message}
              />
              <Label htmlFor="description">Descrição</Label>
            </div>

            <div className="relative">
              <Controller
                name="categoryId"
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => (
                  <Select
                    name={name}
                    onValueChange={onChange}
                    value={value}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoriesResponse?.categories?.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <Label htmlFor="categoryId">Categoria</Label>
              {errors.categoryId?.message && (
                <div className="mt-2">
                  <FormError error={errors.categoryId?.message} />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <Button
              variant="outline"
              className="w-full"
              type="button"
              size={"lg"}
              disabled={isSubmitting}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              className="w-full"
              type="submit"
              size={"lg"}
              disabled={
                isSubmitting || productData?.product.status !== "available"
              }
            >
              Salvar e {!productId ? "publicar" : "atualizar"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
