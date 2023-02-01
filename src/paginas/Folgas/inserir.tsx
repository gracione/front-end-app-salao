import { useState } from 'react';
import { Conteudo, Header } from "../../styles/global";
import BuscarDadosApi from "../../util/util";
import Inserir from "../../util/inserir";

export default function InserirFolga() {
  const [diaSemana, setDiaSemana] = useState('');
  const [idFuncionario, setIdFuncionario] = useState({});
  let funcionario = BuscarDadosApi('funcionarios', 'listarPorProfissao');


  return (
    <Header>
      <Conteudo>
        <div>
          <h3>Adicionar folga ao funcionario</h3>
          <select
            onChange={e => setIdFuncionario(e.target.value)}
            required
          >
            <option >Escolha o Funcionario</option>
            {funcionario.map((element: any) => (
              <option value={[element.id_funcionario, element.id]}>{element.nome} {element.profissão}</option>
            ))}
          </select>
          <select
            onChange={e => setDiaSemana(e.target.value)}
            required
          >
            <option >Dia da Semana</option>
            <option value={1}>Domingo</option>
            <option value={2}>Segunda Feira</option>
            <option value={3}>Terça Feira</option>
            <option value={4}>Quarta Feira</option>
            <option value={5}>Quinta Feira</option>
            <option value={6}>Sexta Feira</option>
            <option value={7}>Sabado</option>
          </select>
        </div>
        <Inserir
          modulo="folgas"
          dados={{ diaSemana, dados: idFuncionario }}
        />
      </Conteudo>
    </Header>
  );
}
