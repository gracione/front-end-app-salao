import { DataSelecionada, HorariosDisponivel } from "./styles";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container, Center } from "../../styles/global";

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const { idFuncionario, idProfissao, idTratamento, idFiltro } = useParams();
  const history = useNavigate();

  useEffect(() => {
    api.post("/horarios-disponivel", {
      data: props.data,
      idFuncionario,
      idFiltro,
      idTratamento
    }).then((response) => setHorarios(response.data));
    setHorarioEscolhido('');
  }, [props.data]);

  function agendarHorario(data: any, horario: any) {
    api
      .post("/horario/inserir", {
        data: data,
        horario: horario,
        idCliente: 1,
        idTratamento: idTratamento,
        idFuncionario: 1
      })
    history('/home');
  }
  return (
    <Container >
      <div>
        <Center>
          <DataSelecionada>
            Data Selecionada {props.data + " " + horarioEscolhido}
          </DataSelecionada>
        </Center>
        <HorariosDisponivel>
          {
            horario ?
              horario.map((element) => (
                <div
                  className={horarioEscolhido === element['inicio'] ? "selecionado" : "disponivel"}
                  onClick={() => setHorarioEscolhido(element['inicio'])}
                >
                  {element['inicio']}
                </div>
              ))
              :
              <>Nenhum Horario Disponivel</>
          }
        </HorariosDisponivel>

      </div>
      <button
        onClick={() => agendarHorario(props.data, horarioEscolhido)}
      >
        Agendar
      </button>
    </Container>
  );
}
