import styled from "styled-components"

export const Container = styled.div`

    @media (min-width: 768px) 
    {
        background-image: url('/fundo.png');
        background-attachment: fixed;
        padding: 3vh;
        min-height: 92vh ;
        display: flex ;
        justify-content: space-around ;        
    }
    @media (max-width: 767px) {
    }
`;
export const PainelCalendario = styled.div`
    height: 50px ;
    padding: 10px ;
    display: flex;
    justify-content: space-between ;
    align-items: center ;
    .mudar-mes{
        font-size: 50px ;
    }
    b{
        font-size: 20px ;
    }
`;

export const Header = styled.div`

    background-image: url('/fundo.png');
    background-attachment: fixed;

	display: flex ;
    justify-content: space-around ;
	padding-top:30px ;
	margin-left:40px ;
	
`
export const Calendario = styled.div`
    width:500px;
    background:white;

    .selecionado{
        background-color: var(--cor-primaria);
        border: solid 1px var(--cor-primaria);
    }
    .dia,.feriado,.folga{
        width: 100% ;
        border: solid 1px var(--borda);
        height: 45px;
        list-style-type: none;
        display: flex ;
        justify-content: center ;
        align-items: center ;
        text-align: center ;
        text-transform: capitalize;
        font-size: 13px ;
    }
    .folga{
        color: black;
        background-color: var(--borda) ;
    }
    .feriado{
        font-size: 9px !important ;
        color: black ;
        background-color: var(--yellow) ;

        display: flex ;
        justify-content: center ;
        align-items: center ;
    }
    .diasSemana{
        width: 100% ;
        display: flex ;
        justify-content: space-between;
        li{
            border: solid 1px var(--borda);
            width: 15%;
            height: 30px;
            list-style-type: none;

            display: flex ;
            justify-content: center ;
            align-items: center ;
        }
    }
    .mes{
        width: 100% ;
        display: flex ;
        justify-content: space-between ;
        .semanaDia{
            display: flex ;
            flex-direction: column ;
            width: 100%;
        }
        li{
            display: flex;
        }
    }
    `;

export const Conteudo = styled.div`
	@media (max-width: 767px) {
		width: 100%;
		min-height: 30vh;
		padding: 20px ;
		background-color: var(--backgroud-secundaria);
    }

    @media (min-width: 767px) {
		width: 600px ;
		min-height: 80vh;
		border: solid var(--borda) 2px;
		border-radius: 5px ;
		background-color: var(--backgroud-secundaria);
		padding: 20px ;
	}
`;
