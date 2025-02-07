import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <div className="min-h-screen bg-customDark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RouterProvider router={router} />
        </div>
      </div>
    </HelmetProvider>
  </StrictMode>
);
