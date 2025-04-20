import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccessIcon, Mail02Icon } from "@hugeicons/core-free-icons";

export default function SignIn() {
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

        <form className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <div className="relative space-y-5">
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail cadastrado"
                icon={Mail02Icon}
              />
              <Label htmlFor="email">E-mail</Label>
            </div>

            <div className="relative">
              <Input
                id="password"
                type="password"
                placeholder="Sua senha de acesso"
                icon={AccessIcon}
              />
              <Label htmlFor="password">Senha</Label>
            </div>
          </div>

          <Button className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Seu e-mail</Label>
            <Input id="email" type="email" />
          </div>

          <Button className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}
