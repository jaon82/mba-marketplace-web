import { QueryClientProvider } from "@tanstack/react-query";
import * as dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import "./global.css";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

dayjs.locale("pt-br");

function App() {
  return (
    <>
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
