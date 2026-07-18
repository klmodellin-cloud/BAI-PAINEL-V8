import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ClientPortal from "./pages/ClientPortal";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPortal />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/painel" element={<AdminDashboard />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  </StrictMode>
);
