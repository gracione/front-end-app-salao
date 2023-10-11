import { useState, useEffect } from "react";
import { Conteudo, Header } from "../../styles/global";
import { useParams } from "react-router-dom";
import Alterar from "../../components/alterar";
import api from "../../services/api";

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
    <Header>
      <Conteudo>
        <div>
          <h3>Alterar Folga</h3>
          <label>Funcionario {listagem['profissao']} {listagem['funcionario']}</label>
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
        <Alterar
          modulo="folgas"
          dados={{ id: idFolga, diaSemana }}
        />
      </Conteudo>
    </Header>
  );
}
