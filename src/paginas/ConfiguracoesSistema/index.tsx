import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Conteudo, Header } from "../../styles/global";
import Alterar from "../../util/alterar";

export default function ConfiguracoesSistema() {
  const [frequencia, setFrequencia] = useState("");
  const [listagem, setListagem]: any[] = useState([]);

  useEffect(() => {
    api
      .post(`/configuracao-sistema/listar`, {})
      .then((response) => setListagem(response.data));
    }, []);

  return (
    <Header>
      <Conteudo>
        <h1>Configuração Sistema</h1>

        <label>Frequencia</label>
        <input
          defaultValue={listagem['frequencia_horario']}
          onChange={(e) => setFrequencia(e.target.value)}
          required
          className="form-control bg-white opacity-20" // Bootstrap classes for white background with 20% opacity
        />
        <Alterar modulo="configuracao-sistema" dados={{ frequencia_horario: frequencia }} />
      </Conteudo>
    </Header>
  );
}
