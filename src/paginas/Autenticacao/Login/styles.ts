import styled from "styled-components";

export const Container = styled.div`
  padding: 3vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


	select,input{
		width: 100%;
		height: 5vh;
		font-size: 2vh;
		padding-left:10px ;
		background: none !important;
		color:brack;
		border: none;
	}

	.select,.input{
		background: rgba(100,100,100, 0.3);
		border-radius: 3px;
		display: flex ;
		justify-content: center ;
		align-items: center ;
		padding: 30px ;
	}
  
  @media (min-width: 768px) {
    form {
      width: 50%;
      height: 60vh;
    }
  }

  @media (max-width: 767px) {
    form {
      width: 100%;
      height: 50vh;
    }
  }
`;
