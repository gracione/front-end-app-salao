import styled from "styled-components";

export const Container = styled.div`
    display: flex ;
    flex-wrap: wrap;
    width: 100% ;
    min-height: 120px ;
    border: none ;

    form{
        display: flex;
        width: 100% ;
        padding: 20px;
    }
`;

export const CardFuncionario = styled.button`
        
        font-size: 25px;
        width: 90px;
        height: 120px ;
        border: solid var(--borda) 2px;
        border-radius: 5px ;
        background-color: rgba(14, 14, 20, 1);;

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
