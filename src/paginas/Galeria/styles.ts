import styled from "styled-components";

export const Conteudo = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 03%;
    min-height: 91vh;
    padding: 20px;
    background-color: var(--backgroud-secundaria);
  }

  @media (min-width: 767px) {
    width: 95%;
    min-height: 70vh !important;
    border-radius: 5px;
    background-color: var(--backgroud-secundaria);
    padding: 20px;
    margin: 1vh;
  }
`;
