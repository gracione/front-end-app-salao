import { useState } from "react";
import Inserir from "../../util/inserir";

export default function InserirFeriado() {
  const [data, setData] = useState("");
  const [nome, setFeriado] = useState("");
  return (
    <>
      <div>
        <h2>Adicionar Feriado</h2>
        <input
          type="text"
          placeholder="Nome do feriado"
          onChange={(e) => setFeriado(e.target.value)}
          required
        />
        <input type="date" onChange={(e) => setData(e.target.value)} required />
      </div>
      <Inserir modulo="feriados" dados={{ data, nome }} />
    </>
  );
}
