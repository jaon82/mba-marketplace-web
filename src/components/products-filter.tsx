import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SaleTag02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function ProductsFilter() {
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
    <div className="min-w-[20rem]">
      <div className="flex flex-col gap-12 bg-white p-6 rounded-[20px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-dm-sans text-title-sm text-gray-300">Filtrar</h1>
        </div>

        <form
          className="flex flex-col gap-12"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className="flex flex-col gap-5">
            <div className="relative space-y-5">
              <Input
                id="email"
                type="email"
                placeholder="Pesquisar"
                icon={Search01Icon}
                {...register("email")}
              />
            </div>

            <div className="relative">
              <Select>
                <SelectTrigger className="w-full">
                  <HugeiconsIcon
                    icon={SaleTag02Icon}
                    size={24}
                    className="size-[24px]"
                  />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Anunciado</SelectItem>
                  <SelectItem value="dark">Vendido</SelectItem>
                  <SelectItem value="system">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            className="w-full"
            type="submit"
            size={"lg"}
            disabled={isSubmitting}
          >
            Aplicar filtro
          </Button>
        </form>
      </div>
    </div>
  );
}
