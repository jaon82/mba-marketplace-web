import { Outlet } from "react-router";

import Background from "/src/assets/background.svg";
import Logo from "/src/assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col bg-background">
        <div className="flex items-center gap-5 p-10">
          <img src={Logo} />
          <div>
            <div className="font-dm-sans text-title-md text-gray-500">
              Marketplace
            </div>
            <div className="text-body-md text-gray-400">Painel de Vendedor</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center relative">
          <img src={Background} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  );
}
