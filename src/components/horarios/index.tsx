import { DataSelecionada, HorariosDisponivel } from "./styles";
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container } from "../../styles/global";

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState('');
  const [modoTradicional, setModoTradicional] = useState('');
  const { idFuncionario, idTratamento, idFiltro, nomeCliente } = useParams();
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

  function agendarHorario(data: any, horario: any, nomeCliente: any = null) {
    api
      .post("/horario/inserir", {
        data: data,
        horario: horario,
        idCliente: localStorage.getItem('id_usuario'),
        idTratamento: idTratamento,
        idFuncionario: idFuncionario,
        nomeCliente: nomeCliente,
        nomeUsuario: localStorage.getItem('nome'),
        modoTradicional: modoTradicional,
      }).then((response) => (setOpen(response.data)));
  }
  return (
    <Container >
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='modal'>
          <div className='salvo'>
            <img src="/icons/salvo.png" alt="" />
            <h2>Horario agendado com sucesso!</h2>
            <h2><a href={"/home"}>ok</a></h2>
          </div>
        </div>
      </Modal>
      <div>
        <DataSelecionada>
          <div className="border w-100 d-flex justify-content-between" >
            <div className="border w-50 d-flex justify-content-center" >
              Data Selecionada
            </div>
            <div className="border w-50 d-flex justify-content-center" >
              {props.data + " " + horarioEscolhido}
            </div>
          </div>
        </DataSelecionada>
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
          <div className="relogio" >
            <label>Modo tradicional<br></br>de procurar<br></br>horário disponível</label>
            <input type="time"
              onChange={e => setModoTradicional(e.target.value)}
            />
          </div>
        </HorariosDisponivel>
      </div>
      {horarioEscolhido.length > 0 || modoTradicional.length > 0 &&
        <button
          onClick={() => agendarHorario(props.data, horarioEscolhido, nomeCliente)}
        >
          Agendar
        </button>
      }
    </Container>
  );
}
