import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Cartao } from './styles';
import api from '../../../services/api';
import { Carregando } from '../../../styles/global';

export default function HorariosMarcado() {
  const [carregamento, setCarregamento] = useState(false);
  const [horariosMarcados, setHorariosMarcados] = useState([]);
  const idTratamento = localStorage.getItem('idTratamento');
  const idTipoUsuario = localStorage.getItem("tipo_usuario");

  useEffect(() => {
    api
      .post("/horarios-marcados", {
        idUsuario: localStorage.getItem("id_usuario"),
        idTratamento: idTratamento,
        tipoUsuario: localStorage.getItem("tipo_usuario"),
      })
      .then((response) => setHorariosMarcados(response.data))
      .catch((err) => {
        setCarregamento(true);
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

  if (carregamento) {
    return (
      <Carregando>
        <img src="/loading.gif" alt="" />
        <p>
          Carregando ...
        </p>
      </Carregando>
    )
  }
  return (
    <div className="w-75">
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
              <li>
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
                <div className='desmarcar' onClick={() => desmarcar(element['idHorario'])} >DESMARCAR</div>
              </div>

            </div>
          </Cartao>
        ))
      }
    </div >
  );

}
