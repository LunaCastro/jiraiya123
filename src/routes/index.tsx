import { Routes, Route } from "react-router-dom";
import { CadastrarPage, HomePage, LayoutPage, LoginPage } from "pages";
import React from "react";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default Rotas;
