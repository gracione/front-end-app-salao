import Menu from "../Menu";
import { Container, Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/alterar";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function AlterarProfissao() {
  const [nome, setNome] = useState('');
  const [listagem, setListagem]: any = useState([]);
  const { idProfissao } = useParams();

  useEffect(() => {
    api
      .post("/profissao/listar-id", {
        id: idProfissao
      })
      .then((response) => setListagem(response.data[0]));

  }, []);
  console.log(nome);
  return (
    <Header>

      <Conteudo>
        <h3>Alterar dados da profissão</h3>
        <small>Nome</small>
        <input
          name='nome'
          placeholder="..."
          defaultValue={listagem['nome']}
          onChange={e => setNome(e.target.value)}
          required
        />
        <Alterar
          modulo="profissao"
          dados={{ id: idProfissao, nome }}
        />
      </Conteudo>
    </Header>

  );
}
