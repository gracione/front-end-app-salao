import { Conteudo } from "../../styles/global";
import { useState } from "react";
import Inserir from "../../util/inserir";

export default function Adicionar() {
  const [nome, setNome] = useState('');
  return (
    <div className="display-flex" >
      <Conteudo>
        <small>Nome</small>
        <input
          name='nome'
          placeholder="Nome da profissão"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <Inserir
          modulo="profissao"
          dados={{ nome }}
        />
      </Conteudo>
    </div>
  );
}
