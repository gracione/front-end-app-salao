import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/alterar";

export default function ConfiguracoesSistema() {
  const [frequencia, setFrequencia] = useState("");
  const [listagem, setListagem]:any = useState([]);
  const [imagem, setImagem] = useState(null); // New state for image

  useEffect(() => {
    api.post("/configuracao-sistema").then((response) => setListagem(response.data));
  }, []);

  const handleImagemChange = (e: any) => {
    setImagem(e.target.files[0]);
  };

  return (
    <Header>
      <Conteudo>
        <h1>Configuração Sistema</h1>

        <label>Frequencia</label>
        <input
          defaultValue={listagem.nome}
          onChange={(e) => setFrequencia(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />


        <Alterar modulo="configuracoes-sistema" dados={{ frequencia_horario :frequencia }} />
      </Conteudo>
    </Header>
  );
}
