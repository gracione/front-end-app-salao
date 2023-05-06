import api from '../../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Container } from './styles';
import BuscarDadosApi from '../../../util/util';
import { useState } from 'react';
import { Modal } from 'react-responsive-modal';


export default function HorariosMarcado() {
  const idTipoUsuario = localStorage.getItem("tipo_usuario");
  const [excluir, setExcluir] = useState(false);
  const [confima, setConfimar] = useState(false);

  
  let horariosMarcados: any = [];
  
  try {
    horariosMarcados = BuscarDadosApi('horarios-marcados', 'listar ', {
      idUsuario: localStorage.getItem("id_usuario"),
      tipoUsuario: localStorage.getItem("tipo_usuario")
    });
  } catch (err) {
    window.location.href = "/home";
    console.error(err);
  }
  

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
    }).then((response) => (setConfimar(response.data)));
    if (excluir) {
      window.location.href = "/home";
    }
  }

  return (
    <Container>
    </Container >
  );

}
