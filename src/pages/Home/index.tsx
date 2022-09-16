import React from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <h1>FILMES SÉRIES DOCUMENTÁRIOS ANIMAÇÕES NOVIDADES</h1>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
     
    </S.Home>
  );
};

export default Home;
