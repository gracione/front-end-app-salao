import styled from "styled-components"

export const HorariosDisponivel = styled.div`
    width: 100% ;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .relogio{
        margin-bottom: 10px ;
        width: 180px ;
        display: flex ;
        border: solid 2px #808080;
        font-size: 10px ;
        border-radius: 4px ;
        input{
            width:60% ;
            height: 100%;
        }
        label{
            width:70% ;
        }
    }
    .selecionado,.disponivel{
        margin: 1px;
        width: 100px;
        height: 40px;
        border: solid ;
        border-radius: 4px;
        margin-top: 5px;
        margin-bottom: 5px;
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
    font-size: 15px ;
    border-radius: 4px;
    padding: 10px ;
    
    display: flex ;
    justify-content: space-between ;
    width: 100%;
`;