import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #ED00B9;
		--backgroud-secundaria: rgba(23, 24, 33, 0.8);
		--borda: #D0B6B6;
		--red: #E52E4D;
		--green: #70853e;
		--blue: #482a7b;
		--yellow: #fdff40;

		--cor-primaria: white;
		--cor-secundaria: #969CB3;
		--blue-light: #5090F3;
		--red-light: #FF5353;
		--green-light: #3ADF00;
		
		--text-title: white;
		--text-body: white;
		--text: rgba(232, 232, 232, 0.8);
		--shape: black;

	}
	* {
		margin:0;
		padding:0;
		outline:none;
		box-sizing: border-box;
		color: var(--text);
	}

	.modal-content{
		background-color: rgba(23, 24, 33, 1);
	}

	select,input{
		width: 100%;
		border: none;
		height: 44px;
		font-size: 18px;
		padding-left: 10px;
		background: rgba(100,100,100,0.3);
		color: var(--text);
		border: none;
		margin-bottom: 1vh;
		border-radius: 2px;
	}

	select option {
		background-color: rgb(46 47 53 / 100%);
    color: var(--text);
		}

	.select,.input{
		background: rgba(100,100,100, 0.3);
		border-radius: 3px;
		display: flex ;
		justify-content: center ;
		align-items: center ;
		padding: 30px ;
	}
	.h-10 {
		height: 10% !important;
	}
	.h-20 {
		height: 20% !important;
	}

	button{
		width: 100%;
		height: 40px ;
		border: none ;
		padding: 20px ;
		border-radius: 5px ;
		color: var(--shape);
		background-color: var(--cor-primaria) ;

		display: flex ;
		align-items: center ;
		justify-content: center ;
	}
	.display-flex{
		display: flex ;
	}
	.editar{
			color: var(--blue-light);
		}
	.excluir{
		color: var(--red-light);
	}

	a{
	text-decoration: none;
	}

	form{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.p-1{
		padding: 10px;
	}

	fieldset{
	border-radius: 4px;
	margin: 5px;
	background-color: #fff5ee;
	}

	.inputTable{
	height: 30px;
	background-color: white;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	}


	td, th {
		border-bottom: 1px solid rgba(600,600,600, 0.4);
		text-align: left;
		padding: 8px;
	}

	.modal{
		width: 100% ;
		height: 100vh;
		background: rgba(0, 0, 0, .5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.erro {
		padding: 20px;
		color: var(--red-light);
		background-color: white;
		border: 3px solid var(--red-light);
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.erro h3 {
		color: var(--red-light);
	}
	
	.erro .circulo {
		width: 70px;
		height: 70px;
		color: var(--red-light);
		border: 2px solid var(--red-light); /* Reduced border thickness */
		border-radius: 50%; /* Use 50% for a perfect circle */
		font-size: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}		
	.salvo{
			top: 100px;
			width: 350px;
			height: 200px;
			background-color: white;
			position: absolute;
			border: solid;
			border-radius: 5px;
			display: flex;
			justify-content: space-around;
			text-align: center;
			align-items: center;
			flex-direction: column;
			color: green;
		a{
			color: #195800;
			font-size: 40px;
		}
		img{
			width: 50px;
		}
	}
`;

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 1.4), rgba(0, 0, 0, 0.4)),
    url("/fundo/fundo-login.png");
  background-size: 100% 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: black;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Conteudo = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 03%;
    min-height: 91vh;
    padding: 20px;
    background-color: var(--backgroud-secundaria);
  }

  @media (min-width: 767px) {
    width: 50%;
    min-height: 70vh !important;
    border-radius: 5px;
    background-color: var(--backgroud-secundaria);
    padding: 20px;
    margin: 1vh;
  }
`;

export const Header = styled.div`
  height: auto;
  min-height: 90vh;

  @media (max-width: 767px) {
    display: flex;
    background-color: var(--backgroud-secundaria);
  }

  @media (min-width: 767px) {
    padding-top: 30px;
    margin-left: 40px;
  }
`;

export const TituloFuncao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Adicionar = styled.a`
  @media (max-width: 767px) {
    margin-bottom: 5px;
    width: 55px;
    height: 50px;
    border-radius: 100%;

    background-color: var(--cor-primaria);
    text-decoration: none;
    font-size: 40px;
    color: var(--shape);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 767px) {
    margin: 10px;
    width: 65px;
    height: 65px;
    border-radius: 100%;

    background-color: var(--cor-primaria);
    text-decoration: none;
    font-size: 40px;
    color: var(--shape);

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;
export const AdicionarItem = styled.div`
  width: 100%;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 30px;
  border: solid 1px;
  border-radius: 2px;
  background-color: var(--shape);
  color: var(--borda);
`;
export const Button = styled.div`
  width: 90%;
  height: 25px;
  background-color: var(--blue);
  border-radius: 5px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Carregando = styled.div`
  img {
    width: 100px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
