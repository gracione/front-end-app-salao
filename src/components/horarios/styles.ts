import styled from "styled-components"



export const HorariosDisponivel = styled.div`
    width: 100% ;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .selecionado,.disponivel{
        margin: 1px;
        width: 20%;
        height: 30px;
        border: solid ;
        border-radius: 4px;
        margin-top: 5px;
        font-size: 25px ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Technology', sans-serif;
                                                
        &:active {
            opacity: 0.6;
        }
    }

    .selecionado{
        background-color: var(--cor-primaria) ;
    }
    .disponivel{
        color: var(--blue) ;
        background-color: white ;
    }
`;

export const DataSelecionada = styled.div`
    font-size: 20px ;
    border-radius: 4px;
    padding: 10px ;
    
    display: flex ;
    justify-content: space-between ;
    width: 100%;
`;