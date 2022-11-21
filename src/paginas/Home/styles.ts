import styled from "styled-components";

export const Container = styled.div`

    @media (max-width: 767px) {
        height: 90vh ;
        display: flex ;
        flex-direction: column ;
        padding: 20px ;
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

    width: 650px;
    height: 200px ;
    border: solid var(--borda) 2px;
    border-radius: 10px ;
    background-color: var(--backgroud-secundaria);
    align-items: center ;
    display: flex;
    flex-direction: column ;
    justify-content: space-around;
    padding: 0px 5% 0px 5% ;

`;
export const HorariosMarcados = styled.div`

    @media (max-width: 767px) {

    }

    @media (min-width: 767px) {
        width: 500px;
        min-height: 500px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);
    }

`;
