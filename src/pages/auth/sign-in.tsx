import { signIn } from "@/api/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AccessIcon,
  ArrowRight02Icon,
  Mail02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import * as z from "zod";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function SignIn() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email, password: data.password });
      navigate("/");
    } catch {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-between m-6 bg-white px-20 py-18 rounded-[2rem]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-dm-sans text-title-md text-gray-500">
            Acesse sua conta
          </h1>
          <p className="text-body-sm text-gray-300">
            Informe seu e-mail e senha para entrar
          </p>
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
                placeholder="Seu e-mail cadastrado"
                icon={Mail02Icon}
                {...register("email")}
              />
              <Label htmlFor="email">E-mail</Label>
            </div>

            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Sua senha de acesso"
                icon={AccessIcon}
                {...register("password")}
              />
              <Label htmlFor="password">Senha</Label>
            </div>
          </div>

          <Button
            className="w-full"
            type="submit"
            size={"lg"}
            disabled={isSubmitting}
          >
            Acessar
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
          <Link to="/sign-up">
            Cadastrar
            <HugeiconsIcon icon={ArrowRight02Icon} size={24} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
