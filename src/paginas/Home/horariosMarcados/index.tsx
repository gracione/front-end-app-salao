import { Center, Container } from "../../../styles/global"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFillPencilFill } from "react-icons/bs";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao } from './styles';
import api from '../../../services/api';

export default function HorariosMarcado() {
  const [horariosMarcados, setHorariosMarcados] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');

  useEffect(() => {
    api
      .post("/horarios-marcados", {
        idFuncionario: localStorage.getItem("idFuncionario"),
        idTratamento: idTratamento
      })
      .then((response) => setHorariosMarcados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function desmarcar(idHorario: any) {
    api.post("/horario/excluir", {
      id: idHorario
    })
    window.location.href = "/home?desmarcado";
  }
  function confirmar(idHorario: any) {
    api.post("/horario/confirmar", {
      id: idHorario
    })
    window.location.href = "/home?confirmado";
  }


  return (
    <Container>
      <Center>
        <div>
          {horariosMarcados.map((element) => (
            <Cartao>
              <div className='dados-horario'>
                <div className="horario" >
                  {element['horario']}
                </div>
                <div className="data" >
                  {element['data']}
                </div>
              </div>
              <ul className='dados-usuario' >
                <li className="cliente" >
                  <div className=''>cliente: {element['cliente']}</div>
                  <a href="">
                    <BsFillPencilFill />
                  </a>
                </li>
                <li>Funcionario: {element['funcionario']}</li>
                <li>Tratamento: {element['tratamento']}</li>
                <li>
                  <a href={"https://api.whatsapp.com/send/?phone=+55" + element['telefone'] + "&text=oi"}>
                    telefone: {element['telefone'] + " "}
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
                <div className='confirmar-desmarcar' >
                  {element['confirmado'] ?
                    <div className='confirmado' onClick={() => confirmar(element['idHorario'])}>CONFIRMADO</div>
                    :
                    <div className='confirmar' onClick={() => confirmar(element['idHorario'])}>CONFIRMAR</div>
                  }
                  <div className='desmarcar' onClick={() => desmarcar(element['idHorario'])} >DESMARCAR</div>
                </div>
              </ul>
            </Cartao>
          ))}
        </div>
      </Center>
    </Container >
  );

}
