import { useState } from 'react';
import { Conteudo,Header } from "../../styles/global";
import BuscarDadosApi from "../../components/util";
import Inserir from "../../components/inserir";

export default function InserirExpediente() {
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioAlmoco, setInicioAlmoco] = useState('');
  const [fimAlmoco, setFimAlmoco] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');
  const [idFuncionario, setIdFuncionario] = useState('');
  const funcionario = BuscarDadosApi('funcionarios', 'listar-funcionarios');
  const optionFuncionarios: any = [];
  funcionario.forEach((element:any) => {
    optionFuncionarios.push(
      <option value={element.id}>{element.nome}</option>
    );
  });

  return (
    <Header>
      <Conteudo>
        <div>
          <h1>Adicionar Expediente</h1>
          <select
            onChange={e => setIdFuncionario(e.target.value)}
            required
          >
            <option >Escolha a Profissão</option>
            {optionFuncionarios}
          </select>
          <input type="time" placeholder="Inicio Expediente" onChange={e => setInicioExpediente(e.target.value)} />
          <input type="time" placeholder="Inicio Almoco" onChange={e => setInicioAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Almoco" onChange={e => setFimAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Expediente" onChange={e => setFimExpediente(e.target.value)} />
        </div>
      </Conteudo>
    </Header>

  );
}
