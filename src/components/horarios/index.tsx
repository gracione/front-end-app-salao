import { DataSelecionada, HorariosDisponivel } from "./styles";
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container, Center } from "../../styles/global";

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const { idFuncionario, idProfissao, idTratamento, idFiltro } = useParams();
  const [open, setOpen] = useState(false);

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
        idCliente: localStorage.getItem('id_usuario'),
        idTratamento: idTratamento,
        idFuncionario: idFuncionario
      }).then((response) => (setOpen(response.data)));
  }
  return (
    <Container >
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <img src="/icons/salvo.png" alt="" />
          <h2>Horario agendado com sucesso!</h2>
          <h2><a href={"/home"}>ok</a></h2>
        </div>
      </Modal>

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
