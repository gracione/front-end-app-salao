import HorariosMarcado from "../../components/horariosMarcados";
import Funcionarios from "../../components/funcionarios";
import Menu from "../Menu/index";
import { Conteudo, Container, AgendarHorario, CompartilheLink, HorariosMarcados } from "./styles";
import { useState } from 'react';

export default function Home() {
  const [nomeCliente, SetNomeCliente] = useState('');

  return (
    <Conteudo>
      <div className="agendar-horario" >
        <AgendarHorario>
          <label>Agendar Horário</label>
          <input type="text" onChange={e => SetNomeCliente(e.target.value)} placeholder="Digite o nome do cliente" required />
          <Funcionarios
            nomeCliente={nomeCliente}
          />
        </AgendarHorario>
        <CompartilheLink>
          <label>Compartilhe o link com seus clientes</label>
          <form className="display-flex" action="">
            <input type="text" />
            <button>x</button>
          </form>
        </CompartilheLink>
      </div>
      <HorariosMarcados>
        <label>Horários Marcados</label>
        <div>
          <HorariosMarcado></HorariosMarcado>
        </div>
      </HorariosMarcados>
    </Conteudo>
  );
}