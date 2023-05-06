import styled from "styled-components"

export const Container = styled.div`

    @media (min-width: 768px) 
    {
    }
    @media (max-width: 767px) {
    }
    background: linear-gradient(rgba(0,0,0,1.4), rgba(0,0,0,0.4)),
    url('/fundo/fundo-login.png');
    background-size: 1500px 750px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: white;
    padding: 3vh;
    height: 100vh ;
    display: flex;
    flex-direction: column ;
    justify-content: space-between ;
`;