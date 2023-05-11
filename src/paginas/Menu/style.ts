import styled from "styled-components";

const logoHeightMobile = '100%';
const logoHeightDesktop = '10vh';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  text-transform: capitalize;
  flex-direction: column;
  position: fixed;

  @media (max-width: 767px) {
    width: 100%;
    
    .desktop {
      display: none;
    }
    .logo {
      margin: 0;
      padding: 0;
      height: ${logoHeightMobile};
    }
    .menu {
      height: 100%;
      width: 100%;
      padding: 0px;
    }
    .menuB {
      width: 70px;
      height: 30px;
    }
  }

  @media (min-width: 767px) {
    .mobile {
      display: none;
    }
    .logo {
      margin: 0;
      padding: 0;
      height: ${logoHeightDesktop};
    }

    .desktop {
      width: 100%;
      height: 80vh;
      display: flex;
      flex-direction: column;
    }
    .menu {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 0px;
    }

    height: 100vh;
  }
`;
