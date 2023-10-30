import { Center } from "../../styles/global";
import { PainelCalendario, Calendario, Container, Conteudo } from './styles';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../src/services/api";
import Horarios from './horarios';
import BuscarDadosApi from "../../components/util";

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

function checkDia(diaSelecionado: any, dia: any) {
  if (dia == 'x') {
    return 'dia';
  }
  if (diaSelecionado === dia) {
    return "dia selecionado";
  }
  return "dia";
}

function checarDiaUtil(dia:any,feriadosFolgas: any[]) {
  if (dia in  feriadosFolgas) {
    return feriadosFolgas[dia];
  }
  if (dia == 'x') {
    return '';
  }
  return dia;
}

export default function EtapaCalendario() {
  let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const [diaSelecionado, setDia] = useState(new Date().getDate());
  const [mes, setmes] = useState(new Date().getMonth() + 1);
  const [ano, setAno] = useState(new Date().getFullYear());
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
//  const folga = BuscarDadosApi('folgas', 'listar-id-funcionario', { idFuncionario });
  const [feriados, setFeriados] = useState([]);
  const dias = [0, 1, 2, 3, 4, 5, 6];
  const diasSemana = criarArrayCalendario(ano, mes);

  useEffect(() => {
    api
      .post("/feriados/listar-mes-ano", {
        mes,
        ano
      })
      .then((response) => setFeriados(response.data));
  }, [mes]);

  return (
    <Container>
      <Conteudo>
        <h3>Etapa Calendario</h3>
        <hr />
        <PainelCalendario>
          <div className='mudar-mes' onClick={() => setmes(mes - 1)}> {"<"} </div>
          <b>{meses[mes - 1] + " " + ano}</b>
          <div className='mudar-mes' onClick={() => setmes(mes + 1)}> {">"} </div>
        </PainelCalendario>
        <Center>
          <Calendario>
            <div className="diasSemana" >
              <li>D</li>
              <li>S</li>
              <li>T</li>
              <li>Q</li>
              <li>Q</li>
              <li>S</li>
              <li>S</li>
            </div>
            <div className="mes" >
              {
                dias.map((semana) => (
                  <div className="semanaDia">
                    {diasSemana[semana].map((dia: any) => (
                      <li>
                        <div className={checkDia(diaSelecionado, dia)}
                          onClick={() => setDia(dia)} >
                          {checarDiaUtil(dia,feriados)}
                        </div>
                      </li>
                    ))
                    }
                  </div>
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
