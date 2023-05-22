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
        .nome-desmarcar-x {
            display: none ;
        }
    }
`;

export const Cartao = styled.div`

    width:98%;
    height:100px;
    margin-top: 5px ;

    background:rgba(43, 34, 43, 1);
    border-left:solid 10px var(--cor-primaria);
    
    border-radius:5px;
    text-transform: capitalize;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);

    display:flex;
    justify-content: space-between;
    font-size: 13px ;
    font-weight: 380;

    .dados-horario{
        width:40%;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        .horario{
            font-size:40px;
            font-weight:540;
            color:var(--cor-primaria);
            display:flex;
            justify-content: center;
            align-items:center;
    
        }
        .data{
            font-size:10px;    
            display:flex;
            justify-content: center;
            align-items:center;

        }
    }
    .dados-usuario{
        height: 100% ;
        width:60%;
        display: flex ;
        justify-content: space-between ;
        flex-direction: column;
        
        .cliente,.funcionario{
            display: flex ;
            justify-content: space-between ;
            align-items: center ;
            font-size: 16px ;
            height: 25%;
            color: var(--blue);
        }
        .telefone{
            font-size: 11px ;
        }
        li{
            display: block ;
            .lapis{
                width: 15% ;
                height: 100% ;
                color: black ;
                border: solid ;
                border-radius: 5px ;
                padding:2px ;
                background-color: white ;
            }
            a{
                color: green ;
            }
        }
    .confirmar-desmarcar{
        height:30%;
        font-size:9px !important;
        font-weight:700 !important;
        display:flex;
        justify-content:flex-end;
        .confirmar{
            text-align:center;
            width:70%;
            background:var(--cor-primaria);
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
        .confirmado{
            text-align:center;
            width:70%;
            background:var(--green-light);
            
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
        .desmarcar{
            text-align:center;
            width:30%;
            background:var(--red-light);
    
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    }
    `;