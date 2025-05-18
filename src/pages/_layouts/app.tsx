import Header from "@/components/header";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export function AppLayout() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const statusCode = error.response?.status;
          if (statusCode === 401) {
            navigate("/sign-in", { replace: true });
          }
          return Promise.reject(error);
        }
      }
    );

    return () => {
      api.interceptors.response.eject(interceptorId);
    };
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-10 max-w-[1030px] w-full mx-auto pt-16">
        <Outlet />
      </div>
    </div>
  );
}
