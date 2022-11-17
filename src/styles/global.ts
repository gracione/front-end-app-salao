import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #ED00B9;
		--backgroud-secundaria: #EAEAED;
		--borda: #D0B6B6;
		--red: #E52E4D;
		--green: #70853e;
		--blue: #482a7b;
		--yellow: #fdff40;

		--cor-primaria: #5090F3;
		--cor-secundaria: #969CB3;

		--blue-light: #5090F3;
		--red-light: #FF5353;

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
	}

	.display-flex{
		display: flex ;
	}

	.editar-excluir{
		margin: 0 ;
		height: 30px;
		width: 100% ;
		display: flex ;
		border: solid 1px ;
		.editar{
			background: url("/icons/lapis.png");
			background-size: 80% 80%;
			background-repeat: no-repeat ;
			background-position: center ;
			background-color: var(--cor-primaria); ;
			width: 10%;
			height: 100%;

			display: flex ;
			justify-content: center ;
		}
		.excluir{
			background-color: var(--red-light);
			width: 10% ;
			height: 100% ;

			display: flex ;
			justify-content: center ;
		}
		label{
			border: solid 1px ;
			height: 100%;
			width: 90%;
			display: flex;
			align-items: center ;
		}
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
	
	height: 100% ;
	display: flex ;
	flex-direction: column ;
	justify-content: space-between ;
`;

export const Conteudo = styled.div`
	width: 600px ;
	min-height: 500px;
	border: solid var(--borda) 2px;
    border-radius: 10px ;
    background-color: var(--backgroud-secundaria);
	padding: 20px ;
`;

export const Header = styled.div`
	display: flex ;
	padding-top:30px ;
	margin-left:40px ;
	
`
export const Adicionar = styled.a`
	margin: 20px ;
	padding: 10px 21px;
	height: 65px ;
	border-radius: 100px;
	background-color: var(--cor-primaria) ;
	text-decoration: none;
	font-size: 40px ;
	color: var(--shape);
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