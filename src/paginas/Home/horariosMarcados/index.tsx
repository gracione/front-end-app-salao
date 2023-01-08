import api from '../../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao, Container } from './styles';
import { Carregando } from '../../../styles/global';
import BuscarDadosApi from '../../../util/util';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';


export default function HorariosMarcado() {
  const idTratamento = localStorage.getItem('idTratamento');
  const idTipoUsuario = localStorage.getItem("tipo_usuario");
  const [excluir, setExcluir] = useState(false);

  const horariosMarcados = BuscarDadosApi('horarios-marcados', 'listar ', {
    idUsuario: localStorage.getItem("id_usuario"),
    idTratamento: idTratamento,
    tipoUsuario: localStorage.getItem("tipo_usuario")
  });


  function desmarcar(idHorario: any) {

    api.post("/horario/excluir", {
      id: idHorario
    }).then((response) => (setExcluir(response.data)));

    if (excluir) {
      window.location.href = "/home";
    }
  }
  function confirmar(idHorario: any) {
    api.post("/horario/confirmar", {
      id: idHorario
    }).then((response) => (setExcluir(response.data)));
    if (excluir) {
      window.location.href = "/home";
    }
  }

  return (
    <Container>
      <Modal open={excluir} onClose={() => setExcluir(false)}>
        <div className='modal text-danger'>
          <h1>x</h1>
          <h2>Erro ao desmarcar horario</h2>
          <h2><a href={"/home"}>ok</a></h2>
        </div>
      </Modal>

      {
        horariosMarcados.map((element) => (
          <Cartao>
            <div className='dados-horario'>
              <div className="horario" >
                {element['horario']}
              </div>
              <div className="data" >
                {element['data']}
              </div>
            </div>
            <div className='dados-usuario' >
              <li className="cliente" >
                <div className=''>cliente: {element['nome_cliente'] ?? element['cliente']}</div>
              </li>
              <li>Funcionario: {element['funcionario']}</li>
              <li>Tratamento: {element['tratamento']}</li>
              <li className='telefone'>
                <a href={"https://api.whatsapp.com/send/?phone=+55" + element['telefone'] + "&text=oi"}>
                  telefone: {element['telefone'] + " "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <div className='confirmar-desmarcar' >
                {idTipoUsuario !== '3' && (
                  element['confirmado'] ?
                    <div className='confirmado' onClick={() => confirmar(element['idHorario'])}>CONFIRMADO</div>
                    :
                    <div className='confirmar' onClick={() => confirmar(element['idHorario'])}>CONFIRMAR</div>
                )

                }
                {idTipoUsuario === '3' && (
                  element['confirmado'] ?
                    <div className='confirmado bg-primary'>CONFIRMADO</div>
                    :
                    <div className='confirmar bg-warning'>AGUARDANDO CONFIRMAÇÃO</div>
                )

                }

                <div className='desmarcar' onClick={() => desmarcar(element['idHorario'])} >
                  DESMARCAR
                </div>
              </div>

            </div>
          </Cartao>
        ))
      }
    </Container >
  );

}
