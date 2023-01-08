import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        justify-content: space-between ;
        width: 100% ;
        text-transform: capitalize;

    .logo{
        margin:0 ;
        padding:0    ;
        height: 100% ;
    }
    .menu{
        height: 100%;
        width: 100% ;
        padding: 0px ;
    }
    .menuB{
        width: 70px;
        height: 30px ;
    }
    @media (max-width: 767px) {
    }

    @media (min-width: 767px) {
        height: 30px ;
    }
`;