import styled from "styled-components"

export const Container = styled.div`

    background-image: url('/fundo.png');
    background-attachment: fixed;

		padding: 3vh;
		height: 92vh ;
		display: flex ;
		justify-content: space-around ;
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
        color: black ;
        background-color: var(--yellow) ;

        display: flex ;
        justify-content: center ;
        align-items: center ;
    }
    .diasSemana{
        display: flex ;
        
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
        display: flex ;
        justify-content: space-between ;
        ul{
            width: 15%;
        }
        li{
            display: block ;
        }
    }
    `;
