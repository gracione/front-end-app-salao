import { useState } from 'react';
import Funcionarios from '../../components/funcionarios';
import HorariosMarcado from './horariosMarcados';
import { AgendarHorario, Container, HorariosMarcados } from './styles';

export default function Home() {
  // Extrai o valor da chave "tipo_usuario" do localStorage
  const { tipo_usuario } = localStorage;

  // Define o estado "nomeCliente" para armazenar o nome do cliente
  const [nomeCliente, setNomeCliente] = useState('');

  return (
    <Container>
      {/* Área de agendamento de horários */}
      <div className="home-usuario">
        <AgendarHorario>
          <h4 className="w-100 d-flex justify-content-center">Agendar Horário</h4>
          <div className="w-100">
            {/* Define a etapa adequada baseada no tipo de usuário */}
            {tipo_usuario === '1' && <h5>Etapa Escolher Funcionário e Profissão</h5>}
            {tipo_usuario === '2' && <h5>Etapa Escolher Profissão</h5>}
            {tipo_usuario === '3' && <h5>Etapa Escolher Funcionário e Profissão</h5>}

            {/* Solicita o nome do cliente caso o tipo de usuário não seja "3" */}
            {tipo_usuario !== '3' && (
              <input type="text" onChange={e => setNomeCliente(e.target.value)} placeholder="Digite o nome do cliente" required />
            )}
            <hr />
          </div>
          {/* Renderiza a lista de funcionários */}
          <Funcionarios nomeCliente={nomeCliente} />
        </AgendarHorario>
      </div>

      {/* Área de horários marcados */}
      <HorariosMarcados>
        <label>Horários Marcados</label>
        {/* Renderiza a lista de horários marcados */}
        <HorariosMarcado />
      </HorariosMarcados>
    </Container>
  );
}
