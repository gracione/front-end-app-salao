import api from '../../services/api';
import { Conteudo, Header } from "../../styles/global";
import { useState, useEffect } from "react";
import Alterar from "../../util/alterar";

export default function Configuracoes() {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [listagem, setListagem]: any = useState([]);

  useEffect(() => {
    api
      .post("/configuracao/listar-id")
      .then((response) => setListagem(response.data));

  }, []);

  return (
    <Header>
      <Conteudo>
        <h1>Configuração</h1>

        <label>Nome</label>
        <input
          defaultValue={listagem.nome}
          onChange={e => setNome(e.target.value)}
          required
        />

        <label>Contato(telefone)</label>
        <input
          defaultValue={listagem.numero}
          onChange={e => setNumero(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          defaultValue={listagem.email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Senha</label>
        <input
          onChange={e => setSenha(e.target.value)}
          required
        />
        <Alterar
          modulo="configuracoes"
          dados={{
            id: listagem.id, nome, numero, senha, email
          }}
        />

      </Conteudo>
    </Header>
  );
}
