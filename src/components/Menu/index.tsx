import React from "react";
import { FcReuse } from "react-icons/fc";
import filme from "assets/img/filme.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <S.Cabecalho>
      <picture>
        <img src={filme} alt="filme" />
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
