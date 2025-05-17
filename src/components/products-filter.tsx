import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SaleTag02Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const signInForm = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignInForm>({ defaultValues: { search, status } });

  async function handleSignIn(data: SignInForm) {
    setSearchParams((oldState) => {
      const newState = new URLSearchParams(oldState.toString());
      if (data.search) {
        newState.set("search", data.search);
      } else {
        newState.delete("search");
      }
      if (data.status && data.status !== "all") {
        newState.set("status", data.status);
      } else {
        newState.delete("status");
      }
      return newState;
    });
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
                id="search"
                type="search"
                placeholder="Pesquisar"
                icon={Search01Icon}
                {...register("search")}
              />
            </div>

            <div className="relative">
              <Controller
                name="status"
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => (
                  <Select
                    name={name}
                    onValueChange={onChange}
                    value={value}
                    disabled={disabled}
                  >
                    <SelectTrigger className="w-full">
                      <HugeiconsIcon
                        icon={SaleTag02Icon}
                        size={24}
                        className="size-[24px]"
                      />
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="available">Anunciado</SelectItem>
                      <SelectItem value="sold">Vendido</SelectItem>
                      <SelectItem value="cancelled">Cancelado</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
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
