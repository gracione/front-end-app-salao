import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 767px) {
    
    }

    @media (min-width: 767px) {
    }

`;

export const Conteudo = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        padding: 25px ;
        justify-content: space-around ;
    }

    .agendar-horario{
        height: 350px ;

        display: flex ;
        flex-direction: column ;
        justify-content: space-between ;
    }

    label{
        font-size: 20px ;
        text-align: center;

        display: flex ;
        justify-content: center ;
    }
`;
