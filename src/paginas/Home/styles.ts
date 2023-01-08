import styled from "styled-components";

export const Container = styled.div`
    height: auto ;
	background-image: url('/fundo.png');
    background-attachment: fixed;

    @media (max-width: 767px) {
        .home-usuario{
            width: 100% ;
            display: flex ;
            flex-direction: column ;
            justify-content: center ;
            align-items: center ;
        }
        min-height: 94vh ;
    }
    
    @media (min-width: 767px) {
        .home-usuario{
            width: 50% ;
        }
        display: flex ;
        justify-content: space-around ;
        min-height: 94vh ;
        padding: 20px ;
    }

`;

export const AgendarHorario = styled.fieldset`

    background: var(--backgroud-secundaria);
    border: solid var(--borda) 2px;
    border-radius: 10px ;
    align-items: center ;
    display: flex;
    flex-direction: column ;
    justify-content: space-around;
    padding: 0px 5% 0px 5% ;

    .titulo{
        
    }
    @media (max-width: 767px) {
        width: 90%;
        min-height: 30vh ;
        border-radius: 5px ;
        margin-top: 10px ;
        
    }

    @media (min-width: 767px) {
        width: 100%;
        min-height:30vh ;
        border-radius: 10px;
    }


`;
export const HorariosMarcados = styled.div`
    min-height: 50vh ;
    height: auto ;

    display: flex;
    flex-direction: column;
    align-items: center ;
    
    @media (max-width: 767px) {
        width: 100%;
        border-radius: 2px ;
    }
    
    @media (min-width: 767px) {
        width: 500px;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: var(--backgroud-secundaria);
    }

`;
