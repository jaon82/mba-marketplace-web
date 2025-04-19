import { RouterProvider } from "react-router";
import "./global.css";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
