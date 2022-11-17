import { useState } from "react";
import Horarios from '../../components/horarios';
import { Center, Conteudo } from "../../styles/global";
import { PainelCalendario, Calendario, Container } from './styles';
import BuscarDadosApi from "../../util/util";
import { useParams } from "react-router-dom";

function criarArrayCalendario(ano = 0, mes = 0) {
  const diasDoMes = new Date(ano, mes, 0).getDate();
  let dadosCalendario: any = Array.from({ length: 7 }, () => []);

  for (let i = 1; i <= diasDoMes; i++) {
    dadosCalendario.forEach((element: any, indice: any) => {
      if (indice == new Date(ano, mes - 1, i).getDay()) {
        dadosCalendario[indice].push(i);
      }
    });
  }

  for (let i = 0; i <= 7; i++) {
    if (i <= new Date(ano, mes - 1, 0).getDay()) {
      dadosCalendario[i].unshift('x');
    }
  }
  return dadosCalendario;
}

export default function EtapaCalendario() {
  let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const [mes, setmes] = useState(new Date().getMonth() + 1);
  const [ano, setAno] = useState(new Date().getFullYear());
  const [diaSelecionado, setDia] = useState(new Date().getDate());
  let data = ano + "-" + (mes) + "-" + diaSelecionado;
  if (mes > 12) {
    setmes(1);
    setAno(ano + 1);
  }
  if (mes < 1) {
    setmes(12);
    setAno(ano - 1);
  }

  const { idFuncionario } = useParams();
  const folga = BuscarDadosApi('folgas', 'listar-id-funcionario', { idFuncionario });
  const feriados = BuscarDadosApi('feriados', 'listarFeriadoPorMes', { mes, ano });
  const dias = [0, 1, 2, 3, 4, 5, 6];
  const diasSemana = criarArrayCalendario(ano, mes);

  return (
    <Container>
      <Conteudo>
        <PainelCalendario>
          <div className='mudar-mes' onClick={() => setmes(mes - 1)}> {"<"} </div>
          <b>{meses[mes - 1] + " " + ano}</b>
          <div className='mudar-mes' onClick={() => setmes(mes + 1)}> {">"} </div>
        </PainelCalendario>
        <Center>
          <Calendario>
            <ul className="diasSemana" >
              <li>Dom</li>
              <li>Seg</li>
              <li>Ter</li>
              <li>Qua</li>
              <li>Qui</li>
              <li>Sex</li>
              <li>Sab</li>
            </ul>
            <div className="mes" >
              {
                dias.map((semana) => (
                  <ul>
                    {diasSemana[semana].map((dia: any) => (
                      <li>
                        {folga.includes(semana + 1) && dia !== 'x' ?
                          <div className="folga" >folga</div>
                          : feriados[dia] ?
                            <div className="feriado" >{feriados[dia]}</div>
                            : dia === 'x' ?
                              <div className={diaSelecionado === dia ? "dia selecionado" : "dia"} ></div>
                              :
                              <div className={diaSelecionado === dia ? "dia selecionado" : "dia"} onClick={() => setDia(dia)} > {dia}</div>
                        }
                      </li>
                    ))}
                  </ul>
                ))
              }
            </div>
          </Calendario>
        </Center>
      </Conteudo>
      <Conteudo>
        <Horarios data={data} ></Horarios>
      </Conteudo>
    </Container>
  );
}
