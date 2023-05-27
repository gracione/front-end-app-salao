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
        float:left;
        margin: 1px;
        width: 130px;
        height: 40px;
        border-radius: 2px;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 10px ;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Technology', sans-serif;
                                                
        &:active {
            opacity: 0.6;
        }
        th{
            padding-top: 13% ;
            width: 100% ;
            border: none ;
            align-items: center ;
            align-self:center;
        }
    }

    .selecionado{
        background-color: var(--cor-secundaria) ;
    }
    .disponivel{
        color: black !important;
        border: solid black;
        background-color: var(--cor-primaria) ;
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