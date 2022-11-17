import styled from "styled-components";

export const Container = styled.div`
    background: var(--cor-primaria);
    color: var(--text-title);

    img {
        width: 50px;
        height:50px;
    }

    @media (max-width: 767px) {
    
    }

    @media (min-width: 767px) {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 10px ;
        align-items: center;
        .opcoes{
            width: 60%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            padding: 10px ;
            align-items: center;
        }
        p{
            color: white ;
            text-decoration: none ;
            font-size: 15px ;
            font-weight: 400 ;
        }
    }

`;