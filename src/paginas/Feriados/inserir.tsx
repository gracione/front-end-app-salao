import { useState } from "react";
import Inserir from "../../components/inserir";

export default function InserirFeriado() {
  const [data, setData] = useState("");
  const [nome, setFeriado] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Nome do feriado"
        onChange={(e) => setFeriado(e.target.value)}
        required
      />
      <input type="date" onChange={(e) => setData(e.target.value)} required />
      <Inserir modulo="feriados" dados={{ data, nome }} />
    </>
  );
}
