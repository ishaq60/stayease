import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // ✅ Correct import placement
import "./index.css";

import AuthProvider from "./Provider/AuthProvider";
import Router from "./Route/Routes";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
      <Toaster/>
    </AuthProvider>
  </StrictMode>
);
