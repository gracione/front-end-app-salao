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
          <h6 className="bg-white w-100 border titulo d-flex justify-content-center" >Agendar Horário</h6>
          <div className="w-100" >
            {idTipoUsuario === '1' &&
              <h5>Etapa Escolher Funcionário e Profissão</h5>
            }
            {idTipoUsuario === '2' &&
              <h5>Etapa Escolher Profissão</h5>
            }
            {idTipoUsuario === '3' &&
              <h5>Etapa Escolher Funcionário e Profissão</h5>
            }
            {idTipoUsuario !== '3' &&
              <input type="text" onChange={e => SetNomeCliente(e.target.value)} placeholder="Digite o nome do cliente" required />
            }
            <hr />
          </div>
          <Funcionarios
            nomeCliente={nomeCliente}
          />
        </AgendarHorario>
      </div>
      <HorariosMarcados>
        <label>Horários Marcados</label>
        <HorariosMarcado></HorariosMarcado>
      </HorariosMarcados>
    </Container>
  );
}