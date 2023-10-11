import api from '../../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao, Container } from './styles';
import BuscarDadosApi from '../../../components/util';
import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';

export default function HorariosMarcado() {
  const [excluir, setExcluir] = useState(false);
  const [confimar, setConfirmar] = useState(false);
  const [dataInicio, setDataInicio] = useState(new Date().toISOString().split('T')[0]);
  const [dataFim, setDataFim] = useState(new Date().toISOString().split('T')[0]);
  const [horariosMarcados, setListagem]: any = useState([]);

  useEffect(() => {
    try {
      api.post('horarios-marcados/listar', {
        idUsuario: localStorage.getItem("id_usuario"),
        tipoUsuario: localStorage.getItem("tipo_usuario"),
        dataInicio,
        dataFim
      })
        .then((response) => setListagem(response.data))
    } catch (err) {
      window.location.href = "/home";
      console.error(err);
    }

  }, [dataInicio, dataFim]);

  function desmarcar(idHorario: any) {
    api.post("/horario/excluir", {
      id: idHorario
    }).then((response) => {
      setExcluir(response.data);
      if (response.data) {
        window.location.href = "/home";
      }
    });
  }

  function confirmar(idHorario: any) {
    api.post("/horario/confirmar", {
      id: idHorario
    }).then((response) => {
      setConfirmar(response.data);
      if (response.data) {
        window.location.href = "/home";
      }
    });
  }
  const handleOptionChange = (event: any) => {
    const selectedOption = event.target.value;
    const today = new Date().toISOString().split('T')[0];

    if (selectedOption === 'hoje') {
      setDataInicio(today);
      setDataFim(today);
    } else if (selectedOption === 'semana') {
      const firstDayOfWeek = new Date();
      firstDayOfWeek.setDate(firstDayOfWeek.getDate() - firstDayOfWeek.getDay()); // Define o primeiro dia da semana (domingo)
      const lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6); // Define o último dia da semana (sábado)

      setDataInicio(firstDayOfWeek.toISOString().split('T')[0]);
      setDataFim(lastDayOfWeek.toISOString().split('T')[0]);
    } else if (selectedOption === 'mes') {
      const firstDayOfMonth = new Date();
      firstDayOfMonth.setDate(1); // Define o primeiro dia do mês
      const lastDayOfMonth = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth() + 1, 0); // Define o último dia do mês

      setDataInicio(firstDayOfMonth.toISOString().split('T')[0]);
      setDataFim(lastDayOfMonth.toISOString().split('T')[0]);
    }
  };

  return (
    <Container>
      <Modal open={excluir} onClose={() => setExcluir(false)}>
        <div className='modal'>
          <div className='salvo'>
            <img src="/icons/salvo.png" alt="" />
            <h2>Horario desmarcado com sucesso!</h2>
            <h2><a href={"/home"}>ok</a></h2>
          </div>
        </div>
      </Modal>
      <Modal open={confimar} onClose={() => setConfirmar(false)}>
        <div className='modal'>
          <div className='salvo'>
            <img src="/icons/salvo.png" alt="" />
            <h2>Horario confirmado com sucesso!</h2>
            <h2><a href={"/home"}>ok</a></h2>
          </div>
        </div>
      </Modal>
      <div className="w-75 d-flex justify-content-between align-items-center">
        <label className="w-50">Horários Marcados</label>
        <select className="w-50 mt-1" onChange={handleOptionChange}>
          <option value="hoje">Hoje</option>
          <option value="semana">Essa Semana</option>
          <option value="mes">Esse Mês</option>
        </select>
      </div>
      {horariosMarcados.map((element: any) => (
        <Cartao key={element.idHorario}>
          <div className='dados-horario'>
            <div className="horario">
              {element.horario}
            </div>
            <div className="data">
              {element.data}
            </div>
          </div>
          <div className='dados-usuario'>
            <li className="cliente">
              <div className=''>cliente: {element.nome_cliente ?? element.cliente}</div>
            </li>
            <li>Funcionario: {element.funcionario}</li>
            <li className='text-lowercase'>Tratamento: {element.tratamento}</li>
            <li className='telefone'>
              <a href={"https://api.whatsapp.com/send/?phone=+55" + element.telefone + "&text=oi"}>
                telefone: {element.telefone + " "}
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <div className='confirmar-desmarcar' >
              <div className='desmarcar' onClick={() => desmarcar(element.idHorario)}>
                DESMARCAR
              </div>
            </div>
          </div>
        </Cartao>
      ))}
    </Container>
  );
}
