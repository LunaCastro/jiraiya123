import React from "react";
import carrousel from "assets/img/carrousel.png";
import * as S from "./styles";
import { CardComponent } from "components";
import dados from "services/dados";

const Home = () => {
  return (
    <S.Home>
      <picture>
        <img src={carrousel} alt="Imagens principais" />
      </picture>
      <aside>
        {dados && dados.map((item) => <CardComponent dados={item} />)}
      </aside>
    </S.Home>
  );
};

export default Home;
