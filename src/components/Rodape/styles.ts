import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Rodape = styled.footer`
  display: flex;
  align-items: center;
  height: 2.5rem;
  background-color: ${colors.secondary};
  div {
    display: flex;
    align-items: center;
    a {
      svg {
        height: 2rem;
        width: 2rem;
        color: ${colors.white};
        margin: 0 0.3rem;
      }
    }
  }
`