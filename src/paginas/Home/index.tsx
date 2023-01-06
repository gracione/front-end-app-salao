import { AgendarHorario, HorariosMarcados, Container } from "./styles";
import HorariosMarcado from "./horariosMarcados";
import Funcionarios from "../../components/funcionarios";
import { useState } from 'react';

export default function Home() {
  const idTipoUsuario = localStorage.getItem("tipo_usuario");
  const [nomeCliente, SetNomeCliente] = useState('');

  return (
    <Container>
      <div className="home-usuario" >
        <AgendarHorario>
          <label>Agendar Horário</label>
          {idTipoUsuario !== '3' &&
            <input type="text" onChange={e => SetNomeCliente(e.target.value)} placeholder="Digite o nome do cliente" required />
          }
          <Funcionarios
            nomeCliente={nomeCliente}
          />
        <h6 className="d-flex justify-content-end border" >
          <small>
            Usuario: {localStorage.getItem('nome')}
          </small>
        </h6>
        </AgendarHorario>
      </div>
      <HorariosMarcados>
        <label>Horários Marcados</label>
        <HorariosMarcado></HorariosMarcado>
      </HorariosMarcados>
    </Container>
  );
}