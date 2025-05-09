import Header from "@/components/header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-10 max-w-[1030px] w-full mx-auto pt-16">
        <Outlet />
      </div>
    </div>
  );
}
