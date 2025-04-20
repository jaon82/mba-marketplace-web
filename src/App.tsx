import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import "./global.css";
import { router } from "./routes";

function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
