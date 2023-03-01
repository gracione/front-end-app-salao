import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    flex-wrap: wrap;
    width: 100% ;
    min-height: 130px ;
    border: none ;
    form{
        display: flex;
        width: 100% ;
    }
`;

export const CardFuncionario = styled.a`
        
        font-size: 25px;
        width: 90px;
        height: 120px ;
        border: solid var(--borda) 2px;
        border-radius: 5px ;
        background-color: white ;
        color: #000;

        margin-left: 10px;
        margin-bottom: 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;

        h6{
            font-size: 13px ;
            text-transform: capitalize ;
        }
`;

export const CardAdicionarFuncionario = styled.a`
        width: 90px;
        height: 120px;
        border: solid var(--cor-primaria) 2px;
        border-radius: 5px ;
        margin-left: 10px;
        margin-bottom       : 10px;

        display: flex;
        flex-direction: column ;
        justify-content: center ;
        align-items: center;

        background-color: var(--cor-primaria) ;
        color: var(--shape) ;

`;
