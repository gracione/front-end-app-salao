import { useState } from "react";
import InputMask from "react-input-mask";

import { Conteudo, Header } from "../../styles/global";
import { AdicionarProfissao } from "./styles";

import Inserir from "../../components/inserir";
import BuscarDadosApi from "../../components/util";

export default function InserirFuncionario() {
  const [inicioExpediente, setInicioExpediente] = useState("07:00");
  const [inicioAlmoco, setInicioAlmoco] = useState("11:00");
  const [fimAlmoco, setFimAlmoco] = useState("13:00");
  const [fimExpediente, setFimExpediente] = useState("18:00");

  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [id_sexo, setId_Sexo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profissoesCadastradas, setProfissoesCadastradas] = useState([]);
  const profissoesCadastradasAux: any = profissoesCadastradas;

  const profissoes = BuscarDadosApi("servicos-profissao", "listar");
  const [quantidadeProfissoes, setQuantidadeProfissoes] = useState(1);

  function adicionarProfissao(valor: any, indice: any) {
    profissoesCadastradasAux[indice] = valor;
    setProfissoesCadastradas(profissoesCadastradasAux);
  }

  return (
    <>
      {profissoesCadastradas}
      <div>
        <input
          placeholder="Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <InputMask
          mask="(99) 9 9999-9999"
          placeholder="Seu Numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
      </div>
      <input
        placeholder="Seu E-mail"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div>
        <select onChange={(e) => setId_Sexo(e.target.value)} required>
          <option value={0}>Escolha o sexo</option>
          <option value={1}>Masculino</option>
          <option value={2}>Feminino</option>
        </select>
      </div>
      <div>
        <input
          name="password"
          placeholder="Sua Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        {[...Array(quantidadeProfissoes)].map((x, i) => (
          <select
            onChange={(e) => adicionarProfissao(e.target.value, i)}
            required
          >
            <option>Escolha a Profissão</option>
            {profissoes.map((element : any) => (
              <option value={element.id}>{element.profissao}</option>
            ))}
          </select>
        ))}
      </div>
      <AdicionarProfissao
        onClick={() => setQuantidadeProfissoes(quantidadeProfissoes + 1)}
      >
        Adicionar mais uma profissão
      </AdicionarProfissao>
      <fieldset className="p-1 display-flex bg-dark">
        <input
          type="time"
          value={inicioExpediente}
          placeholder="Inicio Expediente"
          onChange={(e) => setInicioExpediente(e.target.value)}
          className="bg-dark"
        />
        <input
          type="time"
          value={inicioAlmoco}
          placeholder="Inicio Almoco"
          onChange={(e) => setInicioAlmoco(e.target.value)}
          className="bg-dark"
        />
        <input
          type="time"
          value={fimAlmoco}
          placeholder="Fim Almoco"
          onChange={(e) => setFimAlmoco(e.target.value)}
          className="bg-dark"
        />
        <input
          type="time"
          value={fimExpediente}
          placeholder="Fim Expediente"
          onChange={(e) => setFimExpediente(e.target.value)}
          className="bg-dark"
        />
      </fieldset>
      <Inserir
        modulo="funcionarios"
        dados={{
          nome,
          numero,
          id_sexo,
          email,
          password,
          profissoesCadastradas,
          inicioExpediente,
          inicioAlmoco,
          fimAlmoco,
          fimExpediente,
        }}
      />
    </>
  );
}
