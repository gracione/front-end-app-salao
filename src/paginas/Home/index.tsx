import { AgendarHorario, HorariosMarcados, Container } from "./styles";

import HorariosMarcado from "./horariosMarcados";
import Funcionarios from "../../components/funcionarios";

import { useState } from 'react';

export default function Home() {
  const [nomeCliente, SetNomeCliente] = useState('');

  return (
    <Container>
      <AgendarHorario>
        <label>Agendar Horário</label>
        <input type="text" onChange={e => SetNomeCliente(e.target.value)} placeholder="Digite o nome do cliente" required />
        <Funcionarios
          nomeCliente={nomeCliente}
        />
      </AgendarHorario>
      <HorariosMarcados>
        <label>Horários Marcados</label>
        <div>
          <HorariosMarcado></HorariosMarcado>
        </div>
      </HorariosMarcados>
    </Container>
  );
}