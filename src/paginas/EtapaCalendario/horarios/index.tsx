import { DataSelecionada, HorariosDisponivel } from "./styles";
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';

interface Horario {
  inicio: string;
  fim: string;
}

export default function Horarios(props: any) {
  const [horario, setHorarios] = useState<Horario[]>([]);
  const [horarioEscolhido, setHorarioEscolhido] = useState<string>('');
  const [modoTradicional, setModoTradicional] = useState<string>('');
  const { idFuncionario, idTratamento, idFiltro, nomeCliente } = useParams();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    api.post("/horarios-disponivel", {
      data: props.data,
      idFuncionario,
      idFiltro,
      idTratamento
    }).then((response) => setHorarios(response.data))
      .catch((error) => {
        console.log(error);
      });
    setHorarioEscolhido('');
  }, [props.data, idFuncionario, idFiltro, idTratamento]);

  function agendarHorario(data: string, horario: any, nomeCliente: any | null) {
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
      })
      .then((response) => setOpen(response.data))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
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
          {horario.length > 0 ? (
            <div className="w-100">
                {horario.map((element, index) => (
                  <tr
                    key={index}
                    className={horarioEscolhido === element.inicio ? "selecionado" : "disponivel"}
                    onClick={() => setHorarioEscolhido(element.inicio)}                    
                  >
                    <th>
                      <div className="text-dark">Inicio</div>
                      <div className="h6 text-dark">
                        {element.inicio}
                      </div>
                    </th>
                    <th>
                      <div className="text-dark">Fim</div>
                      <div className="h6 text-dark">
                        {element.fim}
                      </div>
                    </th>
                  </tr>
                ))}
            </div>
          ) : (
            <div>Nenhum Horario Disponivel</div>
          )}
          <div className="relogio">
            <label>Modo tradicional<br />de procurar<br />horário disponível</label>
            <input
              type="time"
              onChange={e => setModoTradicional(e.target.value)}
            />
          </div>
        </HorariosDisponivel>
      </div>
      {(horarioEscolhido.length > 0 || modoTradicional.length > 0) && (
        <button
          onClick={() => agendarHorario(props.data, horarioEscolhido, nomeCliente)}
        >
          Agendar
        </button>
      )}
    </>
  );
}
