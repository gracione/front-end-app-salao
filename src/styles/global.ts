import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #ED00B9;
		--backgroud-secundaria: #FFF;
		--borda: #D0B6B6;
		--red: #E52E4D;
		--green: #70853e;
		--blue: #482a7b;
		--yellow: #fdff40;

		--cor-primaria: #5090F3;
		--cor-secundaria: #969CB3;

		--blue-light: #5090F3;
		--red-light: #FF5353;
		--green-light: #3ADF00;

		--text-title: #363F5F;
		--text-body: #969CB3;
		--shape: #FFF;

	}
	* {
		margin:0;
		padding:0;
		outline:none;
		box-sizing: border-box;
	}
	a{
		color:var(--shape);
	}
	.border{
		border: solid ;
	}
	select,input{
		padding: 0px;
		width: 100%;
		height: 30px;
		font-size: 15px ;
		padding-left:10px ;
		margin-bottom: 5px ;
		border-radius: 2px ;
		border: solid var(--borda) 2px !important;
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
		text-decoration: none ;
	}
	form{
		height: 100%;
		display: flex ;
		flex-direction: column ;
		justify-content: space-between ;	
	}
	.p-1{
		padding: 10px;
	}
	h3{
		text-transform: capitalize ;
	}
	fieldset{
		border-radius: 4px;
		margin:5px ;
		border: solid 1px var(--borda) ;
		background-color: #fff5ee ;
	}
	.inputTable{
		height: 30px ;
		border: solid 1px var(--borda) ;
		background-color: white ;
		margin: 0 ;
		border-radius: 0% ;
		display: flex;
		justify-content: center ;
		align-items: center ;
	}
	table {
		background-color: white ;
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
	.modal{
		top: 100px ;
		left: 100px ;
		width: 400px ;
		height: 200px ;
		background-color: white ;
		position: absolute ;
		border:solid ;
		border-radius: 10px ;
		display: flex ;
		justify-content:space-around ;
		align-items: center ;
		flex-direction: column ;
		color: green ;
		a{
			color: #195800 ;
			font-size: 40px ;
		}
		img{
			width: 50px ;
		}
	}

	.red{
		background-color: red ;
	}
	.blue{
		background-color: blue ;
	}
	.center{
		display: flex ;
		justify-content: center ;
		align-items: center ;
	}
	.column{
		display: flex ;
		flex-direction: column ;
	}

`;

export const Container = styled.div`
	.none{
		display: none ;
	}
	.display-flex{
		display: flex;
	}
	
	margin: 0px ;
	padding: 0px;
	width: 100% ;
	height: 100% ;
	display: flex ;
	flex-direction: column ;
	justify-content: space-between ;
`;

export const Conteudo = styled.div`

	@media (max-width: 767px) {
		width: 100%;
		min-height: 91vh;
		padding: 20px ;
		background-color: var(--backgroud-secundaria);
    }

    @media (min-width: 767px) {
		width: 600px ;
		min-height: 80vh;
		border: solid var(--borda) 2px;
		border-radius: 10px ;
		background-color: var(--backgroud-secundaria);
		padding: 20px ;
	}
`;

export const Header = styled.div`
	height: auto;
	min-height: 94vh ;
	background-image: url('/fundo.png');
    background-attachment: fixed;

	@media (max-width: 767px) {
		display: flex ;
		background-color: var(--backgroud-secundaria);
    }

    @media (min-width: 767px) {
		display: flex ;
		padding-top:30px ;
		margin-left:40px ;
	}


`
export const TituloFuncao = styled.div`
	display: flex;
	justify-content: space-between ;
	align-items: center;
`;
export const Adicionar = styled.a`
	@media (max-width: 767px) {
		margin-bottom: 5px ;
		width:55px ;
		height: 50px;
		border-radius: 100%;

		background-color: var(--cor-primaria) ;
		text-decoration: none;
		font-size: 40px ;
		color: var(--shape);

		display: flex ;
		justify-content:center ;
		align-items: center ;
    }

    @media (min-width: 767px) {
		margin: 10px ;
		width:65px ;
		height: 65px;
		border-radius: 100%;

		background-color: var(--cor-primaria) ;
		text-decoration: none;
		font-size: 40px ;
		color: var(--shape);
		
		display: flex ;
		justify-content:center ;
		align-items: center ;
	}

`;

export const Center = styled.div`
	display: flex;
	justify-content: center ;
`;
export const AdicionarItem = styled.div`
	width: 100% ;
	height: 40px ;
	align-items: center ;
	display: flex ;
	justify-content: center;
	font-size: 30px;
	border: solid 1px;
	border-radius: 2px ;
	background-color:var(--shape) ;
	color: var(--borda) ;
`;
export const Button = styled.div`
	width: 90% ;
	height: 25px ;
	background-color: var(--blue) ;
	border-radius: 5px ;
	color: white ;

	display: flex ;
	justify-content: center ;
	align-items: center ;
`

export const Carregando = styled.div`
	img{
		width: 100px ;
	}
	display: flex ;
	flex-direction: column ;
	justify-content: center ;
	align-items: center ;
`
