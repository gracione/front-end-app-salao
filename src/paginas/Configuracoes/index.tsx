import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Conteudo, Header } from "../../styles/global";
import Alterar from "../../components/alterar";

export default function Configuracoes() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [listagem, setListagem]:any = useState([]);
  const [imagem, setImagem] = useState(null); // New state for image

  useEffect(() => {
    api.post("/configuracao/dados-configuracao").then((response) => setListagem(response.data));
  }, []);

  const handleImagemChange = (e: any) => {
    setImagem(e.target.files[0]);
  };

  return (
    <Header>
      <Conteudo>
        <h1>Configuração</h1>

        <label>Nome</label>
        <input
          defaultValue={listagem.nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />

        <label>Contato (telefone)</label>
        <input
          defaultValue={listagem.numero}
          onChange={(e) => setNumero(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />

        <label>Email</label>
        <input
          defaultValue={listagem.email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />

        <label>Senha</label>
        <input
          onChange={(e) => setSenha(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />

        <label>Imagem</label>
        <input type="file" accept="image/*" onChange={handleImagemChange} />

        <Alterar modulo="configuracoes" dados={{ id: listagem.id, nome, numero, senha, email, imagem }} />
      </Conteudo>
    </Header>
  );
}
