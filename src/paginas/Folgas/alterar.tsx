import { useState, useEffect } from "react";
import { Conteudo } from "../../styles/global";
import { useParams } from "react-router-dom";
import Alterar from "../../util/alterar";
import api from "../../../src/services/api";

export default function AlterarFolga() {
  const [diaSemana, setDiaSemana] = useState('');
  const { idFolga } = useParams();
  const [listagem, setListagem]: any = useState([]);

  useEffect(() => {
    api
      .post("/folgas/listar-id", {
        id: idFolga
      })
      .then((response) => setListagem(response.data[0]));
  }, []);

  return (
    <Conteudo>
      <form action={"/folgas"}>
        <div>
          <h1>Adicionar folga ao funcionario</h1>
          <label>Funcionario {listagem['funcionario']}</label>
          {
            listagem['dia_semana'] !== undefined &&
            <select
              onChange={e => setDiaSemana(e.target.value)}
              defaultValue={listagem['dia_semana']}
              required
            >
              <option value={1}>Domingo</option>
              <option value={2}>Segunda Feira</option>
              <option value={3}>Terça Feira</option>
              <option value={4}>Quarta Feira</option>
              <option value={5}>Quinta Feira</option>
              <option value={6}>Sexta Feira</option>
              <option value={7}>Sabado</option>
            </select>
          }

        </div>
        <button onClick={() => Alterar("folgas", { id: idFolga, diaSemana })} >Alterar</button>
      </form>
    </Conteudo>
  );
}
