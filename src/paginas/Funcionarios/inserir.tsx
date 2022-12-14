import { useState } from 'react';
import InputMask from "react-input-mask";

import { Conteudo, Header } from "../../styles/global";
import { AdicionarPrifissao } from "./styles";

import Inserir from "../../util/inserir";
import BuscarDadosApi from "../../util/util";

export default function InserirFuncionario() {
  const [inicioExpediente, setInicioExpediente] = useState('');
  const [inicioAlmoco, setInicioAlmoco] = useState('');
  const [fimAlmoco, setFimAlmoco] = useState('');
  const [fimExpediente, setFimExpediente] = useState('');

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [id_sexo, setId_Sexo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;

  const profissoes = BuscarDadosApi('profissao', 'listar');
  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(1);

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  return (
    <Header>
      <Conteudo>
        {profissoesCadastradas}
        <h2 >Adicionar Funcionario</h2>
        <div>
          <input
            placeholder="Seu Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
          <InputMask
            mask="(99) 9 9999-9999"
            placeholder="Seu Numero"
            value={numero}
            onChange={e => setNumero(e.target.value)}
            required
          />
        </div>
        <input
          placeholder="Seu E-mail"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <div>
          <select
            onChange={e => setId_Sexo(e.target.value)}
            required
          >
            <option value={0}>Escolha o sexo</option>
            <option value={1}>Masculino</option>
            <option value={2}>Feminino</option>
          </select>
        </div>
        <div>
          <input
            name='password'
            placeholder="Sua Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          {[...Array(quantidadeProfissoes)].map((x, i) =>
            <select
              onChange={e => adicionarProfissao(e.target.value, i)}
              required
            >
              <option>Escolha a Profiss??o</option>
              {
                profissoes.map((element) => (
                  <option value={element.id}>{element.profiss??o}</option>
                ))
              }
            </select>
          )}
        </div>
        <AdicionarPrifissao onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}>
          Adicionar mais uma profiss??o
        </AdicionarPrifissao>
        <fieldset className="p-1 display-flex">
          <input type="time" placeholder="Inicio Expediente" onChange={e => setInicioExpediente(e.target.value)} />
          <input type="time" placeholder="Inicio Almoco" onChange={e => setInicioAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Almoco" onChange={e => setFimAlmoco(e.target.value)} />
          <input type="time" placeholder="Fim Expediente" onChange={e => setFimExpediente(e.target.value)} />
        </fieldset>
        <Inserir
          modulo="funcionarios"
          dados={{
            nome, numero, id_sexo, email, password,
            profissoesCadastradas, inicioExpediente, inicioAlmoco, fimAlmoco, fimExpediente
          }}
        />
      </Conteudo>
    </Header>
  );
}
