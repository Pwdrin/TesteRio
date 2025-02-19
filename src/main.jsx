import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyGlobalStyles from "./styles/globalStyles";
import AppRoutes from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyGlobalStyles />
    <AppRoutes />
  </StrictMode>
);
