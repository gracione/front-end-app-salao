import { Center, Container } from "../../styles/global"
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from './card';

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

  return (
    <Container>
      <Center>
        <div>
          {horariosMarcados.map((element) => (
            <Card
              idHorario={element['idHorario']}
              cliente={element['cliente']}
              funcionario={element['funcionario']}
              tratamento={element['tratamento']}
              telefone={element['telefone']}
              horario={element['horario']}
              data={element['data']}
            />
          ))}
        </div>
      </Center>
    </Container>
  );

}
