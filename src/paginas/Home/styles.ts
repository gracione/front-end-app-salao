import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 767px) {
        height: 90vh ;
        display: flex ;
        flex-direction: column ;
        align-items: center ;
    }
    
    @media (min-width: 767px) {
        display: flex ;
        justify-content: space-around ;
        height: 90vh ;
        padding: 20px ;
    }

`;

export const AgendarHorario = styled.div`

    border: solid var(--borda) 2px;
    border-radius: 10px ;
    background-color: var(--backgroud-secundaria);
    align-items: center ;
    display: flex;
    flex-direction: column ;
    justify-content: space-around;
    padding: 0px 5% 0px 5% ;

    @media (max-width: 767px) {
        width: 100%;
        height: 30vh ;
        border-radius: 2px ;

    }

    @media (min-width: 767px) {
        width: 55%;
        height: 30vh;
        border-radius: 10px;
    }


`;
export const HorariosMarcados = styled.div`

    @media (max-width: 767px) {
        width: 100%;
        min-height: 62vh ;
        border-radius: 2px ;
        background-color: var(--backgroud-secundaria);
    }

    @media (min-width: 767px) {
        width: 500px;
        min-height: 50vh ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);
    }

`;
