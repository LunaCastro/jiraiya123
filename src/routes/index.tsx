import { Routes, Route } from "react-router-dom";
import { AdmPage, CadastrarPage, HomePage, LayoutPage, LoginPage } from "pages";
import React from "react";
import ProtectedRoute from "./ProtectedRoute";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
           <Route path = "/adm" element={<AdmPage />} />
        </Route>
      </Route>
     </Routes>
  );
};

export default Rotas;
