import styled from "styled-components"

export const Container = styled.div`
    @media (max-width: 767px) {
        width: 100% ;
        .nome-desmarcar{
            display: none ;
        }
    }

    @media (min-width: 767px) {
        width: 90% ;
        .nome-desmarcar-x{
            display: none ;
        }
    }
`;