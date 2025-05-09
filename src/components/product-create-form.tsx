import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageUploadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const signInForm = z.object({
  image: z.instanceof(File),
  title: z.string(),
  value: z.number(),
  description: z.string(),
  category: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function ProductCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <form className="flex gap-6 w-full" onSubmit={handleSubmit(handleSignIn)}>
      <div className="flex flex-col gap-4 items-center justify-center bg-shape text-orange-base rounded-[12px] min-w-[20rem]">
        <label htmlFor="image">
          <HugeiconsIcon
            icon={ImageUploadIcon}
            size={32}
            className=" cursor-pointer"
          />
        </label>
        <input id="image" type="file" {...register("image")} hidden />
        <div className="text-body-sm text-gray-300 max-w-[10rem] text-center">
          Selecione a imagem do produto
        </div>
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
                  type="title"
                  placeholder="Nome do produto"
                  {...register("title")}
                />
                <Label htmlFor="title">Título</Label>
              </div>
              <div className="relative space-y-5">
                <Input
                  id="value"
                  type="value"
                  placeholder="R$ 0,00"
                  {...register("value")}
                />
                <Label htmlFor="value">Valor</Label>
              </div>
            </div>
            <div className="relative space-y-5">
              <Input
                id="description"
                type="description"
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
                {...register("description")}
              />
              <Label htmlFor="title">Descrição</Label>
            </div>

            <div className="relative">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent id="category">
                  <SelectItem value="light">Anunciado</SelectItem>
                  <SelectItem value="dark">Vendido</SelectItem>
                  <SelectItem value="system">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Label htmlFor="category">Categoria</Label>
            </div>
          </div>

          <div className="flex flex-row gap-3">
            <Button
              variant="outline"
              className="w-full"
              type="button"
              size={"lg"}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              className="w-full"
              type="submit"
              size={"lg"}
              disabled={isSubmitting}
            >
              Salvar e publicar
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
