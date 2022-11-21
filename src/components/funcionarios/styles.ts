import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    width: 100% ;
    height: 130px ;
    border: none ;
    form{
        display: flex;
        width: 100% ;
    }
`;

export const CardFuncionario = styled.a`
        input{
            display: none ;
        }
        label{
            width: 100% ;
            height: 100% ;
            font-size: 15px !important ;
        }
        width: 90px;
        height: 120px ;
        border: solid var(--borda) 2px;
        border-radius: 10px ;
        background-color: white ;
        color: #000;
        font-weight: 540 ;

        margin-left: 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;
`;

export const CardAdicionarFuncionario = styled.a`
        width: 90px;
        height: 120px;
        border: solid var(--cor-primaria) 2px;
        border-radius: 10px ;
        margin-left: 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;

        background-color: var(--cor-primaria) ;
        color: var(--shape) ;

`;
