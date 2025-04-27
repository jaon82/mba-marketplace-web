import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AccessIcon,
  ArrowRight02Icon,
  CallIcon,
  ImageUploadIcon,
  Mail02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import * as z from "zod";

const signUpForm = z.object({
  avatar: z.instanceof(File),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  avatarId: z.string().optional(),
  password: z.string(),
  passwordConfirmation: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <div className="flex flex-col flex-1 justify-between m-6 bg-white px-20 py-18 rounded-[2rem] gap-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-dm-sans text-title-md text-gray-500">
            Crie sua conta
          </h1>
          <p className="text-body-sm text-gray-300">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>

        <form
          className="flex flex-col gap-12"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-8 text-title-sm text-gray-500">Perfil</legend>

            <div className="mb-8">
              <div className="w-30 h-30 flex items-center justify-center bg-shape text-orange-base rounded-[12px]">
                <label htmlFor="avatar">
                  <HugeiconsIcon
                    icon={ImageUploadIcon}
                    size={32}
                    className=" cursor-pointer"
                  />
                </label>
                <input id="avatar" type="file" {...register("avatar")} hidden />
              </div>
            </div>

            <div className="relative space-y-5">
              <Input
                id="name"
                type="name"
                placeholder="Seu nome completo"
                icon={UserIcon}
                {...register("name")}
              />
              <Label htmlFor="name">Nome</Label>
            </div>

            <div className="relative space-y-5">
              <Input
                id="phone"
                type="phone"
                placeholder="(00) 00000-0000"
                icon={CallIcon}
                {...register("phone")}
              />
              <Label htmlFor="phone">Telefone</Label>
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className="mb-8 text-title-sm text-gray-500">Perfil</legend>

            <div className="relative space-y-5">
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail de acesso"
                icon={Mail02Icon}
                {...register("email")}
              />
              <Label htmlFor="email">E-mail</Label>
            </div>

            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Senha de acesso"
                icon={AccessIcon}
                {...register("password")}
              />
              <Label htmlFor="password">Senha</Label>
            </div>

            <div className="relative">
              <Input
                id="passwordConfirmation"
                type="passwordConfirmation"
                placeholder="Confirme a senha"
                icon={AccessIcon}
                {...register("passwordConfirmation")}
              />
              <Label htmlFor="passwordConfirmation">Confirmar senha</Label>
            </div>
          </fieldset>

          <Button
            className="w-full"
            type="submit"
            size={"lg"}
            disabled={isSubmitting}
          >
            Cadastrar
            <HugeiconsIcon icon={ArrowRight02Icon} size={24} />
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-gray-300">Ainda não tem uma conta?</h1>
        <Button
          className="w-full"
          type="button"
          variant={"outline"}
          size={"lg"}
          asChild
        >
          <Link to="/sign-in">
            Acessar
            <HugeiconsIcon icon={ArrowRight02Icon} size={24} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
